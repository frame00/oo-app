import {ClientToSWMessageEvent} from '../../../../type/sw'
import urls from './precache-urls'
import sendToClient from './send-to-client'

export default (e: ClientToSWMessageEvent, cacheName: string) => {
	const handler = async () => {
		const requests = urls.map(url => new Request(url))
		const resolvedItems = await Promise.all([
			Promise.all(
				requests.map(request => fetch(request))
			),
			Promise.all<Response>(
				requests.map(request => caches.match(request))
			),
			caches.open(cacheName)
		])
		const [results, cachedResults, cache] = resolvedItems
		const texts = await Promise.all(cachedResults.map((cachedResult, i) => {
			return Promise.all([cachedResult.clone().text(), results[i].clone().text()])
		}))
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
