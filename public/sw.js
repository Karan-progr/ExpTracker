self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    clients.claim();
});

self.addEventListener("fetch", (event) => {
    // For now, just let requests pass through.
});