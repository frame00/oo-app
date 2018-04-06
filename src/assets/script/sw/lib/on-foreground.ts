import {SWMessageEvent} from '../../../../type/sw'
import urls from './precache-urls'

export default (e: SWMessageEvent, cacheName: string) => {
	const handler = async () => {
		const requests = urls.map(url => new Request(url))
		const results = await Promise.all(
			requests.map(request => fetch(request))
		)
		const cachedResults = await Promise.all<Response>(requests.map(request => {
			return caches.match(request)
		}))
		const toTexts = await Promise.all(cachedResults.map((cachedResult, i) => {
			return Promise.all([cachedResult.clone().text(), results[i].clone().text()])
		}))
		const cache = await caches.open(cacheName)
		const operation = await Promise.all(toTexts.map(async (text, i) => {
			const [prev, next] = text
			if (prev.length === next.length) {
				return false
			}
			await cache.put(requests[i], results[i].clone())
			return true
		}))
		if (operation.includes(true)) {
			e.ports[0].postMessage('hasUpdate')
		}
	}
	e.waitUntil(handler())
}
