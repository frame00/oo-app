export type SWMessageForeground = 'foreground'

export type SWMessage = SWMessageForeground

export interface SWMessageEvent extends ExtendableMessageEvent {
	data: SWMessage
}
