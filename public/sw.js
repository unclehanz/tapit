// TAP-IT service worker: keeps the site working without a connection after the first visit.
// Bump VERSION to force every visitor to refresh their saved copy.
const VERSION = 'tapit-v1'
const BASE = new URL('./', self.location.href).href

async function precache() {
  const cache = await caches.open(VERSION)
  const res = await fetch(BASE, { cache: 'reload' })
  const html = await res.clone().text()
  await cache.put(BASE, res)

  // Save the scripts, styles and icons that the page itself links to.
  const urls = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
    .map((m) => new URL(m[1], BASE))
    .filter((u) => u.origin === self.location.origin)
    .map((u) => u.href)
  const extras = [`${BASE}manifest.webmanifest`, `${BASE}favicon.svg`]
  await Promise.all(
    [...new Set([...urls, ...extras])].map((u) => cache.add(u).catch(() => undefined)),
  )
}

self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith('http')) return

  // Page loads: use the network when it works, fall back to the saved page when offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(VERSION).then((c) => c.put(BASE, copy))
          return res
        })
        .catch(() => caches.match(BASE, { ignoreVary: true })),
    )
    return
  }

  // Everything else (scripts, styles, fonts, images): show the saved copy fast, refresh it quietly.
  event.respondWith(
    caches.match(request, { ignoreVary: true }).then((cached) => {
      const fresh = fetch(request)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone()
            caches.open(VERSION).then((c) => c.put(request, copy))
          }
          return res
        })
        .catch(() => cached)
      return cached || fresh
    }),
  )
})
