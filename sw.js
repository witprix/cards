self.addEventListener('install', (e) => { 
    self.skipWaiting(); 
});

self.addEventListener('activate', (e) => { 
    self.clients.claim(); 
});

self.addEventListener('fetch', (e) => {
    // A simple fetch handler is required by Chrome to pass the PWA check
    e.respondWith(
        fetch(e.request).catch(() => new Response('App is running offline', { status: 200 }))
    );
});
