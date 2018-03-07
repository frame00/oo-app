const {send} = require('micro')
const {execFile} = require('child_process')

module.exports = async (req, res) => {
	const {url} = req
	const response = await new Promise((resolve, reject) => {
		const app = execFile('node', ['lambda.js', url], (err, stdout, stderr) => {
			if (err) {
				return reject(err)
			}
			resolve(JSON.parse(stdout))
		})
	}).catch(err => {
		send(res, 500, err)
	})
	const {statusCode, headers, body} = response
	if (headers) {
		for (const header of Object.entries(headers)) {
			const [k, v] = header
			res.setHeader(k, v)
		}
	}

	send(res, statusCode, body)
}
