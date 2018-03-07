export type Callback = (err: Error, result: string, status?: number) => void

export interface CallbackOptions {
	err?: Error,
	headers?: {
		[key: string]: string
	},
	body: string,
	status: number
}
