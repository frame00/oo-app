import {get} from 'https'

type Success = Array<{
	uid: string,
	created: number,
	Extensions: Array<{
		key: string,
		value: any
	}>
}>

export default async (uid: string): Promise<Success | Error> => {
	const response = await new Promise<Success>((resolve, reject) => {
		get(`https://api.ooapp.co/stable/users/${uid}`, res => {
			let data = ''
			res.on('data', d => {
				data += d
			})
			res.on('end', () => {
				try {
					resolve(JSON.parse(data))
				} catch(err) {
					reject(err)
				}
			})
		}).on('error', err => {
			reject(err)
		})
	}).catch(err => {
		return err
	})

	return response
}
