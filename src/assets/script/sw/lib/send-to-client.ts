import {ClientToSWMessageEvent, SWToClientMessage} from '../../../../type/sw'

export const fromBrowser = (e: ClientToSWMessageEvent, message: SWToClientMessage) => {
	e.ports[0].postMessage(message)
}

export const fromWorker = (clientId: string, message: SWToClientMessage) => {
	(async (self: ServiceWorkerGlobalScope) => {
		const client = await self.clients.get(clientId)
		client.postMessage(message)
	})(<ServiceWorkerGlobalScope>self)
}
