// The game moved to https://nextgrade.in/games/christmas/. This worker replaces the old
// offline cache on phones that installed it: clear caches, unregister, reload into the redirect.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((c) => c.navigate(c.url))),
  );
});
