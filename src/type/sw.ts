export type SWMessageForeground = 'foreground'
export type SWMessageNewVersionAvailable = 'newVersionAvailable'

export type ClientToSWMessage = SWMessageForeground
export type SWToClientMessage = SWMessageNewVersionAvailable

export interface ClientToSWMessageEvent extends ExtendableMessageEvent {
	data: ClientToSWMessage
}

export interface SWToClientMessageEvent extends MessageEvent {
	data: SWToClientMessage
}
