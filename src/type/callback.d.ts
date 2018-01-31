export type Callback = (err: Error, result: string, status?: number) => void

export interface CallbackOptions {
	err?: Error,
	body: string,
	status: number
}
