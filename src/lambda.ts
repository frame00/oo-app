import app from './index'
import {APIGatewayEvent, ProxyCallback} from 'aws-lambda'

export const handler = (event: APIGatewayEvent, _, callback: ProxyCallback) => {
	const paths = event.path.replace(/^\//, '').split('/')
	app(paths, (err, result, statusCode = 200) => {
		callback(err, {
			statusCode,
			body: result
		})
	})
}
