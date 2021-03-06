export default async (req: Request | Array<Request>, cacheName: string) => {
	const requests = Array.isArray(req) ? req : [req]
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
		if (!cachedResult) {
			return Promise.resolve(null)
		}
		return Promise.all([cachedResult.clone().text(), results[i].clone().text()])
	}))
	const check = await Promise.all(texts.map(async (text, i) => {
		if (!text) {
			return Promise.resolve(false)
		}
		const [prev, next] = text
		if (prev.length === next.length) {
			return false
		}
		await cache.put(requests[i], results[i].clone())
		return true
	}))
	return check.includes(true)
}
