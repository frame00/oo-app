const lambda = require('./dist/lambda')

const [, , url] = process.argv
const event = {
	path: url.replace(/\?.*/, '')
}

lambda.handler(event, null, (err, result) => {
	console.log(result.body)
})
