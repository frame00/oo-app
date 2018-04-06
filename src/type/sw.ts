export type SWMessageForeground = 'foreground' | 'hasUpdate'

export type SWMessage = SWMessageForeground

export interface SWMessageEvent extends ExtendableMessageEvent {
	data: SWMessage
}
