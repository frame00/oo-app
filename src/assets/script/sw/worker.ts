import {js} from '../../../lib/sources'

((self: ServiceWorkerGlobalScope) => {
	const CACHE = '<@CACHE@>'

	const PRECACHE_URLS = [
		`https:${js.elements_ooapp_co_stable_oo_elements}`,
		'/community'
	]

	self.addEventListener('install', event => {
		const handler = async () => {
			const cache = await caches.open(CACHE)
			await cache.addAll(PRECACHE_URLS)
			self.skipWaiting()
		}
		event.waitUntil(handler())
	})

	self.addEventListener('activate', event => {
		const currentCaches = [CACHE]
		const handler = async () => {
			const cacheNames = await caches.keys()
			const cachesToDelete = await cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
			await Promise.all(cachesToDelete.map(cacheToDelete => {
				return caches.delete(cacheToDelete)
			}))
			self.clients.claim()
		}
		event.waitUntil(handler())
	})

	self.addEventListener('fetch', event => {
		const {request} = event
		const {url} = request
		if (url.startsWith(self.location.origin) ||
			url.includes('elements.ooapp.co')) {
			const handler = async () => {
				const cachedResponse = await caches.match(request)
				if (cachedResponse) {
					return cachedResponse
				}
				const cache = await caches.open(CACHE)
				const response = await fetch(request)
				await cache.put(request, response.clone())
				return response
			}
			event.respondWith(handler())
		}
	})
})(<ServiceWorkerGlobalScope>self)
