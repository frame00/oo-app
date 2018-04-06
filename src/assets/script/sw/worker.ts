import matches from './lib/matches-path-pattern'
import onForeground from './lib/on-foreground'
import {SWMessageEvent} from '../../../type/sw'
import precacheUrls from './lib/precache-urls'

((self: ServiceWorkerGlobalScope) => {
	const CACHE = '<@CACHE@>'

	const PRECACHE_URLS = precacheUrls

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
		if (matches(url)) {
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

	self.addEventListener('message', (e: SWMessageEvent) => {
		const {data} = e
		switch (data) {
			case 'foreground':
				onForeground(e, CACHE)
				break
			default:
				break
		}
	})
})(<ServiceWorkerGlobalScope>self)
