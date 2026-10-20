// Offline support for Becoming Daily Tracker.
// Pages: always try the internet first (so updates show at once), saved copy when offline.
// Fonts and icons: saved copy first.
const CACHE = "becoming-tracker-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
  "fonts/bebas-neue-latin-400-normal.woff2", "fonts/oswald-latin-500-normal.woff2",
  "fonts/oswald-latin-600-normal.woff2", "fonts/oswald-latin-700-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate" || req.url.endsWith(".html") || req.url.endsWith(".webmanifest")) {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
  }
});
