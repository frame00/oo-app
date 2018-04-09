import {ClientToSWMessageEvent, SWToClientMessage} from '../../../../type/sw'

export default (e: ClientToSWMessageEvent, message: SWToClientMessage) => {
	e.ports[0].postMessage(message)
}
