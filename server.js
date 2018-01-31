const {send} = require('micro')
const html = require('./dist')

module.exports = async (req, res) => {
	const {url} = req
	const doc = await new Promise((resolve, reject) => {
		const paths = url.replace(/^\//, '').split('/')
		html(paths, (err, result) => {
			if (err) {
				return reject(err)
			}
			return resolve(result)
		})
	}).catch(err => {
		send(res, 500, err)
	})

	send(res, 200, doc)
}
