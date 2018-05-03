import {ClientToSWMessageEvent} from '../../../../type/sw'
import urls from './precache-urls'
import {fromBrowser} from './send-to-client'
import checkForUpdates from './check-for-updates'

export default (e: ClientToSWMessageEvent, cacheName: string) => {
	const handler = async () => {
		const {data} = e
		const {url: href} = data
		const check = await Promise.all([
			checkForUpdates(new Request(href), cacheName),
			checkForUpdates(urls.map(url => new Request(url)), cacheName)
		])
		if (check.includes(true)) {
			fromBrowser(e, 'newVersionAvailable')
		} else {
			fromBrowser(e, 'none')
		}
	}
	e.waitUntil(handler())
}
