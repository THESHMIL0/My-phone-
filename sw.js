// This is a simple Service Worker to allow PWA Installation

self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

// A fetch listener is required by browsers to pass the PWA check
self.addEventListener('fetch', (e) => {
  // We aren't caching anything yet, just returning the normal network request
});
