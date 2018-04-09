import {ClientToSWMessageEvent} from '../../../../type/sw'
import urls from './precache-urls'
import sendToClient from './send-to-client'

export default (e: ClientToSWMessageEvent, cacheName: string) => {
	const handler = async () => {
		const requests = urls.map(url => new Request(url))
		const results = await Promise.all(
			requests.map(request => fetch(request))
		)
		const cachedResults = await Promise.all<Response>(requests.map(request => {
			return caches.match(request)
		}))
		const texts = await Promise.all(cachedResults.map((cachedResult, i) => {
			return Promise.all([cachedResult.clone().text(), results[i].clone().text()])
		}))
		const cache = await caches.open(cacheName)
		const operation = await Promise.all(texts.map(async (text, i) => {
			const [prev, next] = text
			if (prev.length === next.length) {
				return false
			}
			await cache.put(requests[i], results[i].clone())
			return true
		}))
		if (operation.includes(true)) {
			sendToClient(e, 'newVersionAvailable')
		}
	}
	e.waitUntil(handler())
}
