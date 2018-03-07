import app from './index'
import {APIGatewayEvent, ProxyCallback} from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, _, callback: ProxyCallback): Promise<void> => {
	const paths = event.path.replace(/^\//, '').replace(/\/$/, '').split('/')
	const result = await app(paths)
	const {err = null, status: statusCode, headers = {}, body} = result
	callback(err, {
		statusCode,
		body,
		headers: {...{
			'content-type': 'text/html; charset=utf-8',
			'cache-control': 'max-age=5'
		}, ...headers}
	})
}
