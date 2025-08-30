self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("natuna-sea-fresh").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "style.css",
        "script.js",
        "B_1.jpg",
        "IMG_1.jpg",
        "IMG_2.jpg",
        "IMG_3.jpg",
        "IMG_4.jpg",
        "IMG_5.jpg",
        "A1.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
