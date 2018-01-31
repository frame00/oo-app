const lambda = require('./dist/lambda')

const [, , url] = process.argv
const event = {
	path: url
}

lambda.handler(event, null, (err, result) => {
	console.log(result.body)
})
