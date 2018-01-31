import app from './index'
import {APIGatewayEvent, ProxyCallback} from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, _, callback: ProxyCallback): Promise<void> => {
	const paths = event.path.replace(/^\//, '').split('/')
	const result = await app(paths)
	const {err = null, status: statusCode, body} = result
	callback(err, {
		statusCode,
		body
	})
}
