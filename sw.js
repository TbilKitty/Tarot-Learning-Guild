// Service worker: shows the daily card reminder and opens the site when it is tapped.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('push', event => {
  let msg = {title: 'Tarot Learning Guide', body: 'Your card of the day is ready ✨', url: '/?from=reminder'};
  try { if (event.data) msg = {...msg, ...event.data.json()}; } catch {}
  event.waitUntil(self.registration.showNotification(msg.title, {body: msg.body, icon: '/icons/icon-192.png', badge: '/icons/icon-192.png', tag: 'daily-card', renotify: true, data: {url: msg.url}}));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || '/', self.location.origin).href;
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    for (const c of all) { if (new URL(c.url).origin === self.location.origin) { await c.focus(); return c.navigate(target); } }
    return self.clients.openWindow(target);
  })());
});
