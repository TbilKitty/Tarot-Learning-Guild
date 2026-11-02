import test from 'node:test';
import assert from 'node:assert/strict';
import {createECDH, createHmac, createDecipheriv, createPublicKey, verify, randomBytes, generateKeyPairSync} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';
import {encryptPayload, b64u, allowedEndpoint, localNow, subscribe, sendDue, MAX_SENDS_PER_RUN} from '../push.mjs';
import worker from '../worker.mjs';

const hmac = (k, d) => createHmac('sha256', k).update(d).digest();
// Independent RFC 8291 decryption using node:crypto, standing in for the browser.
function decrypt(body, uaEcdh, auth) {
  const salt = body.subarray(0, 16), idlen = body[20], asPub = body.subarray(21, 21 + idlen), data = body.subarray(21 + idlen);
  const shared = uaEcdh.computeSecret(asPub);
  const ikm = hmac(hmac(auth, shared), Buffer.concat([Buffer.from('WebPush: info\0'), uaEcdh.getPublicKey(), asPub, Buffer.from([1])]));
  const prk = hmac(salt, ikm);
  const cek = hmac(prk, Buffer.from('Content-Encoding: aes128gcm\0\x01')).subarray(0, 16);
  const nonce = hmac(prk, Buffer.from('Content-Encoding: nonce\0\x01')).subarray(0, 12);
  const d = createDecipheriv('aes-128-gcm', cek, nonce); d.setAuthTag(data.subarray(data.length - 16));
  const plain = Buffer.concat([d.update(data.subarray(0, data.length - 16)), d.final()]);
  assert.equal(plain[plain.length - 1], 2, 'last-record delimiter');
  return plain.subarray(0, -1).toString();
}
function browserSub() { const ua = createECDH('prime256v1'); ua.generateKeys(); const auth = randomBytes(16); return {ua, auth, keys: {p256dh: b64u.enc(ua.getPublicKey()), auth: b64u.enc(auth)}}; }
function vapidKeys() { const {publicKey, privateKey} = generateKeyPairSync('ec', {namedCurve: 'P-256'}); const jwk = privateKey.export({format: 'jwk'}); const pub = Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]); return {VAPID_PUBLIC_KEY: b64u.enc(pub), VAPID_PRIVATE_KEY: jwk.d, publicKey}; }
function db() {
  const sql = new DatabaseSync(':memory:');
  const wrap = q => { let v = []; return {bind(...a) { v = a; return this; }, async run() { sql.prepare(q).run(...v); return {}; }, async all() { return {results: sql.prepare(q).all(...v)}; }, async first() { return sql.prepare(q).get(...v) || null; }}; };
  return {sql, DB: {prepare: wrap, async batch(items) { return Promise.all(items.map(s => s.run())); }}};
}

test('payload encryption decrypts with an independent RFC 8291 implementation', async () => {
  const b = browserSub();
  const body = await encryptPayload('{"title":"Hi ✨"}', b.keys.p256dh, b.keys.auth);
  assert.equal(decrypt(Buffer.from(body), b.ua, b.auth), '{"title":"Hi ✨"}');
});

test('only real push services are accepted as endpoints', () => {
  assert.ok(allowedEndpoint('https://fcm.googleapis.com/fcm/send/abc'));
  assert.ok(allowedEndpoint('https://web.push.apple.com/QK'));
  assert.ok(allowedEndpoint('https://updates.push.services.mozilla.com/wpush/v2/x'));
  assert.ok(!allowedEndpoint('https://evil.example/fcm.googleapis.com'));
  assert.ok(!allowedEndpoint('http://fcm.googleapis.com/x'));
  assert.ok(!allowedEndpoint('https://push.apple.com.evil.test/x'));
});

test('daily reminders go out once per local day at the chosen hour, with valid VAPID', async () => {
  const {sql, DB} = db(); const keys = vapidKeys();
  const env = {DB, ...keys, SUPPORT_EMAIL: 'x@example.test', SITE_URL: 'https://example.test'};
  const b = browserSub(); const sent = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (url, opts) => {
    const [, t] = opts.headers.Authorization.match(/^vapid t=([^,]+), k=/);
    const [h, c, s] = t.split('.');
    assert.ok(verify('sha256', Buffer.from(`${h}.${c}`), {key: keys.publicKey, dsaEncoding: 'ieee-p1363'}, Buffer.from(s, 'base64url')), 'VAPID signature');
    assert.equal(JSON.parse(Buffer.from(c, 'base64url')).aud, new URL(url).origin);
    sent.push(JSON.parse(decrypt(Buffer.from(opts.body), b.ua, b.auth)));
    return new Response(null, {status: 201});
  };
  try {
    const tz = 'America/New_York';
    let r = await subscribe(env, {subscription: {endpoint: 'https://fcm.googleapis.com/fcm/send/1', keys: b.keys}, hour: 9, tz});
    assert.equal(r.status, 200);
    sql.prepare('UPDATE push_subs SET last_day = NULL').run();
    const at = iso => new Date(iso);
    await sendDue(env, at('2026-11-02T13:00:00Z')); // 8 AM local
    assert.equal(sent.length, 0);
    await sendDue(env, at('2026-11-02T14:05:00Z')); // 9 AM local
    assert.equal(sent.length, 1); assert.match(sent[0].body, /card/i); assert.equal(sent[0].url, '/?from=reminder');
    await sendDue(env, at('2026-11-02T20:00:00Z')); // later same day
    assert.equal(sent.length, 1);
    await sendDue(env, at('2026-11-03T14:10:00Z')); // next day
    assert.equal(sent.length, 2);
    assert.equal(localNow(tz, at('2026-11-03T14:10:00Z')).hour, 9);
    // Expired subscriptions are removed.
    globalThis.fetch = async () => new Response(null, {status: 410});
    await sendDue(env, at('2026-11-04T14:00:00Z'));
    assert.equal(sql.prepare('SELECT COUNT(*) n FROM push_subs').get().n, 0);
    // Bad input is rejected.
    r = await subscribe(env, {subscription: {endpoint: 'https://evil.test/x', keys: b.keys}, hour: 9, tz}); assert.equal(r.status, 400);
    r = await subscribe(env, {subscription: {endpoint: 'https://fcm.googleapis.com/x', keys: b.keys}, hour: 25, tz}); assert.equal(r.status, 400);
    r = await subscribe(env, {subscription: {endpoint: 'https://fcm.googleapis.com/x', keys: b.keys}, hour: 9, tz: 'Not/AZone'}); assert.equal(r.status, 400);
  } finally { globalThis.fetch = original; sql.close(); }
});

test('sends are capped per run so the free plan limit is never hit; the rest go next run', async () => {
  const {sql, DB} = db(); const env = {DB, ...vapidKeys()};
  for (let i = 0; i < MAX_SENDS_PER_RUN + 10; i++) { const b = browserSub(); await subscribe(env, {subscription: {endpoint: `https://fcm.googleapis.com/x/${i}`, keys: b.keys}, hour: 0, tz: 'UTC'}); }
  sql.prepare('UPDATE push_subs SET last_day = NULL').run();
  const original = globalThis.fetch; let calls = 0;
  globalThis.fetch = async () => { calls++; return new Response(null, {status: 201}); };
  try {
    await sendDue(env, new Date('2026-11-02T08:00:00Z')); assert.equal(calls, MAX_SENDS_PER_RUN);
    await sendDue(env, new Date('2026-11-02T08:10:00Z')); assert.equal(calls, MAX_SENDS_PER_RUN + 10);
  } finally { globalThis.fetch = original; sql.close(); }
});

test('the API exposes the public key and rejects cross-site subscribe requests', async () => {
  const {sql, DB} = db(); const env = {DB, ...vapidKeys(), SITE_URL: 'https://example.test'};
  let r = await worker.fetch(new Request('https://example.test/api/config'), env);
  assert.equal((await r.json()).pushKey, env.VAPID_PUBLIC_KEY);
  const b = browserSub();
  const post = origin => new Request('https://example.test/api/push/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json', Origin: origin}, body: JSON.stringify({subscription: {endpoint: 'https://fcm.googleapis.com/x/9', keys: b.keys}, hour: 8, tz: 'UTC'})});
  r = await worker.fetch(post('https://attacker.test'), env); assert.equal(r.status, 403);
  r = await worker.fetch(post('https://example.test'), env); assert.equal(r.status, 200);
  r = await worker.fetch(new Request('https://example.test/api/push/unsubscribe', {method: 'POST', headers: {'Content-Type': 'application/json', Origin: 'https://example.test'}, body: JSON.stringify({endpoint: 'https://fcm.googleapis.com/x/9'})}), env);
  assert.equal(r.status, 200); assert.equal(sql.prepare('SELECT COUNT(*) n FROM push_subs').get().n, 0);
  delete env.VAPID_PRIVATE_KEY;
  r = await worker.fetch(new Request('https://example.test/api/config'), env); assert.equal((await r.json()).pushKey, '');
  sql.close();
});
