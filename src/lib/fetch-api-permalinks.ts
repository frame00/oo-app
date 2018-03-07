import {get} from 'https'

type Success = Array<{
	slug: string,
	user: string
}>

export default async (path: string): Promise<Success | Error> => {
	const response = await new Promise<Success>((resolve, reject) => {
		get(`https://api.ooapp.co/stable/permalinks/${path}`, res => {
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
