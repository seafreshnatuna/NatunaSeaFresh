self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "./",           // index.html
        "./index.html", // halaman utama
        "./manifest.json",
        "./L_1.png"     // ikon
        // tambahkan file lain kalau mau bisa offline
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});