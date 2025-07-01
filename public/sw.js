const CACHE_NAME = 'finpromptu-v1'
const STATIC_CACHE = 'static-v1'
const DYNAMIC_CACHE = 'dynamic-v1'

// Files to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/robots.txt',
  '/manifest.json',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS)
      })
      .catch((error) => {
        console.error('Cache install failed:', error)
      })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip external requests and analytics
  if (!url.origin.includes(location.origin) || url.pathname.includes('gtag')) {
    return
  }

  // Cache strategy based on request type
  if (request.destination === 'document') {
    // Network first for HTML pages
    event.respondWith(networkFirstStrategy(request))
  } else if (request.destination === 'script' || request.destination === 'style') {
    // Cache first for JS/CSS with fallback
    event.respondWith(cacheFirstStrategy(request))
  } else if (request.destination === 'image') {
    // Cache first for images
    event.respondWith(cacheFirstStrategy(request))
  } else {
    // Stale while revalidate for other resources
    event.respondWith(staleWhileRevalidateStrategy(request))
  }
})

// Network first strategy (for HTML)
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    return cachedResponse || new Response('Page not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    })
  }
}

// Cache first strategy (for static assets)
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    return new Response('Resource not available', { status: 404 })
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidateStrategy(request) {
  const cachedResponse = await caches.match(request)
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      const cache = caches.open(DYNAMIC_CACHE)
      cache.then((c) => c.put(request, networkResponse.clone()))
    }
    return networkResponse
  }).catch(() => cachedResponse)
  
  return cachedResponse || fetchPromise
}