const {send} = require('micro')
const {execFile} = require('child_process')

module.exports = async (req, res) => {
	const {url} = req
	const doc = await new Promise((resolve, reject) => {
		const app = execFile('node', ['lambda.js', url], (err, stdout, stderr) => {
			if (err) {
				return reject(err)
			}
			resolve(stdout)
		})
	}).catch(err => {
		send(res, 500, err)
	})

	send(res, 200, doc)
}
