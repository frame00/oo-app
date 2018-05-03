import {fromWorker} from './send-to-client'
import checkForUpdates from './check-for-updates'

export default async (e: FetchEvent, cacheName: string) => {
	const {clientId} = e
	const {request} = e
	if (!clientId) {
		return
	}
	const check = await checkForUpdates(request, cacheName)
	if (check) {
		fromWorker(clientId, 'newVersionAvailable')
	}
}
