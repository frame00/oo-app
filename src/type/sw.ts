export type SWMessageForeground = {
	type: 'foreground',
	url: string
}
export type SWMessageNone = 'none'
export type SWMessageNewVersionAvailable = 'newVersionAvailable'

export type ClientToSWMessage = SWMessageForeground
export type SWToClientMessage = SWMessageNone | SWMessageNewVersionAvailable

export interface ClientToSWMessageEvent extends ExtendableMessageEvent {
	data: ClientToSWMessage
}

export interface SWToClientMessageEvent extends MessageEvent {
	data: SWToClientMessage
}
