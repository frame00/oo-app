import {get} from 'https'
import {IncomingMessage} from 'http'

export default async (uid: string): Promise<number> => {
	const response = await new Promise<IncomingMessage>(resolve => {
		get(`https://api.ooapp.co/stable/projects/${uid}/forks`, res => {
			resolve(res)
		})
	})
	const {headers} = response
	if ('x-oo-count' in headers) {
		return Number(headers['x-oo-count'])
	}
	return 0
}
