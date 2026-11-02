// Web Push for the daily card reminder: VAPID (RFC 8292) + aes128gcm payload encryption (RFC 8291),
// written against WebCrypto so it runs on Cloudflare Workers with no dependencies.
const enc = new TextEncoder();
const PUSH_HOSTS = ['fcm.googleapis.com', 'push.services.mozilla.com', 'push.apple.com', 'notify.windows.com'];
export const MAX_SENDS_PER_RUN = 40; // stays under the free plan's 50 outbound requests per run
const TEASERS = [
  'Your card of the day is ready. Tap to flip it ✨',
  'A new card is waiting for you. Tap to reveal it.',
  'Keep your streak going. Today’s card is ready 🔥',
  'What does today hold? Your card is ready to flip.',
  'Your daily card is face down and waiting ✨',
];

export const b64u = {
  enc: bytes => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  dec: str => { const s = str.replace(/-/g, '+').replace(/_/g, '/'); const bin = atob(s + '='.repeat((4 - s.length % 4) % 4)); return Uint8Array.from(bin, c => c.charCodeAt(0)); },
};
const concat = (...parts) => { const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let o = 0; for (const p of parts) { out.set(p, o); o += p.length; } return out; };
async function hmac(key, data) { const k = await crypto.subtle.importKey('raw', key, {name: 'HMAC', hash: 'SHA-256'}, false, ['sign']); return new Uint8Array(await crypto.subtle.sign('HMAC', k, data)); }

export function allowedEndpoint(endpoint) {
  try { const u = new URL(endpoint); return u.protocol === 'https:' && PUSH_HOSTS.some(h => u.hostname === h || u.hostname.endsWith('.' + h)); } catch { return false; }
}
export function validTimeZone(tz) { try { new Intl.DateTimeFormat('en-US', {timeZone: tz}); return typeof tz === 'string' && tz.length <= 64; } catch { return false; } }
export function localNow(tz, date = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23'}).formatToParts(date).map(p => [p.type, p.value]));
  return {day: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour)};
}

async function vapidAuth(endpoint, env) {
  const pub = b64u.dec(env.VAPID_PUBLIC_KEY);
  const key = await crypto.subtle.importKey('jwk', {kty: 'EC', crv: 'P-256', x: b64u.enc(pub.slice(1, 33)), y: b64u.enc(pub.slice(33, 65)), d: env.VAPID_PRIVATE_KEY, ext: true}, {name: 'ECDSA', namedCurve: 'P-256'}, false, ['sign']);
  const header = b64u.enc(enc.encode(JSON.stringify({typ: 'JWT', alg: 'ES256'})));
  const claims = b64u.enc(enc.encode(JSON.stringify({aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: `mailto:${env.SUPPORT_EMAIL || 'support@tarotlearningguide.com'}`})));
  const sig = await crypto.subtle.sign({name: 'ECDSA', hash: 'SHA-256'}, key, enc.encode(`${header}.${claims}`));
  return `vapid t=${header}.${claims}.${b64u.enc(sig)}, k=${env.VAPID_PUBLIC_KEY}`;
}

export async function encryptPayload(payload, p256dh, auth) {
  const uaPublic = b64u.dec(p256dh), authSecret = b64u.dec(auth);
  const local = await crypto.subtle.generateKey({name: 'ECDH', namedCurve: 'P-256'}, true, ['deriveBits']);
  const asPublic = new Uint8Array(await crypto.subtle.exportKey('raw', local.publicKey));
  const uaKey = await crypto.subtle.importKey('raw', uaPublic, {name: 'ECDH', namedCurve: 'P-256'}, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({name: 'ECDH', public: uaKey}, local.privateKey, 256));
  const ikm = await hmac(await hmac(authSecret, shared), concat(enc.encode('WebPush: info\0'), uaPublic, asPublic, new Uint8Array([1])));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, concat(enc.encode('Content-Encoding: aes128gcm\0'), new Uint8Array([1])))).slice(0, 16);
  const nonce = (await hmac(prk, concat(enc.encode('Content-Encoding: nonce\0'), new Uint8Array([1])))).slice(0, 12);
  const aes = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const cipher = new Uint8Array(await crypto.subtle.encrypt({name: 'AES-GCM', iv: nonce}, aes, concat(enc.encode(payload), new Uint8Array([2]))));
  const header = new Uint8Array(21); header.set(salt); new DataView(header.buffer).setUint32(16, 4096); header[20] = asPublic.length;
  return concat(header, asPublic, cipher);
}

export async function sendPush(sub, message, env) {
  const body = await encryptPayload(JSON.stringify(message), sub.p256dh, sub.auth);
  return fetch(sub.endpoint, {method: 'POST', headers: {Authorization: await vapidAuth(sub.endpoint, env), 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream', TTL: '43200', Urgency: 'normal'}, body});
}

export const pushEnabled = env => Boolean(env.VAPID_PUBLIC_KEY && env.VAPID_PRIVATE_KEY);
const SCHEMA = 'CREATE TABLE IF NOT EXISTS push_subs (endpoint TEXT PRIMARY KEY, p256dh TEXT NOT NULL, auth TEXT NOT NULL, tz TEXT NOT NULL, hour INTEGER NOT NULL, last_day TEXT, created INTEGER NOT NULL, failures INTEGER NOT NULL DEFAULT 0)';
async function ensure(env) { await env.DB.prepare(SCHEMA).run(); }

export async function subscribe(env, body) {
  const s = body?.subscription, hour = Number(body?.hour), tz = body?.tz;
  if (!s || typeof s.endpoint !== 'string' || s.endpoint.length > 1000 || !allowedEndpoint(s.endpoint)) return {status: 400, error: 'This browser’s notification service is not supported.'};
  if (typeof s.keys?.p256dh !== 'string' || typeof s.keys?.auth !== 'string' || s.keys.p256dh.length > 200 || s.keys.auth.length > 100) return {status: 400, error: 'Invalid subscription.'};
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) return {status: 400, error: 'Pick a reminder time.'};
  if (!validTimeZone(tz)) return {status: 400, error: 'Invalid time zone.'};
  await ensure(env);
  // If they subscribe after today's reminder hour, start tomorrow; otherwise today counts.
  const now = localNow(tz);
  const lastDay = now.hour >= hour ? now.day : null;
  await env.DB.prepare('INSERT INTO push_subs (endpoint,p256dh,auth,tz,hour,last_day,created,failures) VALUES (?,?,?,?,?,?,?,0) ON CONFLICT(endpoint) DO UPDATE SET p256dh=excluded.p256dh, auth=excluded.auth, tz=excluded.tz, hour=excluded.hour, last_day=excluded.last_day, failures=0')
    .bind(s.endpoint, s.keys.p256dh, s.keys.auth, tz, hour, lastDay, Date.now()).run();
  return {status: 200, ok: true, sub: {endpoint: s.endpoint, p256dh: s.keys.p256dh, auth: s.keys.auth}};
}

export async function unsubscribe(env, body) {
  if (typeof body?.endpoint !== 'string') return {status: 400, error: 'Missing subscription.'};
  await ensure(env);
  await env.DB.prepare('DELETE FROM push_subs WHERE endpoint = ?').bind(body.endpoint).run();
  return {status: 200, ok: true};
}

export function dailyMessage(day) {
  const n = [...day].reduce((a, c) => a + c.charCodeAt(0), 0);
  return {title: 'Tarot Learning Guide', body: TEASERS[n % TEASERS.length], url: '/?from=reminder'};
}

export async function sendDue(env, now = new Date()) {
  if (!pushEnabled(env)) return {sent: 0};
  await ensure(env);
  const {results = []} = await env.DB.prepare('SELECT endpoint,p256dh,auth,tz,hour,last_day,failures FROM push_subs').all();
  const due = results.filter(s => { const t = localNow(s.tz, now); return t.hour >= s.hour && s.last_day !== t.day; }).slice(0, MAX_SENDS_PER_RUN);
  let sent = 0;
  await Promise.all(due.map(async s => {
    const day = localNow(s.tz, now).day;
    try {
      const r = await sendPush(s, dailyMessage(day), env);
      if (r.status === 404 || r.status === 410) return env.DB.prepare('DELETE FROM push_subs WHERE endpoint = ?').bind(s.endpoint).run();
      if (r.ok) { sent++; return env.DB.prepare('UPDATE push_subs SET last_day = ?, failures = 0 WHERE endpoint = ?').bind(day, s.endpoint).run(); }
      throw new Error(`push ${r.status}`);
    } catch {
      // Retry next run; give up for the day after 3 failures, and drop dead subscriptions after 15.
      const failures = (s.failures || 0) + 1;
      if (failures >= 15) return env.DB.prepare('DELETE FROM push_subs WHERE endpoint = ?').bind(s.endpoint).run();
      return env.DB.prepare('UPDATE push_subs SET failures = ?, last_day = CASE WHEN ? % 3 = 0 THEN ? ELSE last_day END WHERE endpoint = ?').bind(failures, failures, day, s.endpoint).run();
    }
  }));
  return {sent, due: due.length};
}
