import notFound from '../page/404'
import script from './script'
import json from './json'

const response = (body: string, type: string) => {
	let contentType = ''

	switch (type) {
		case 'js':
			contentType = 'application/javascript; charset=UTF-8'
			break
		case 'json':
			contentType = 'application/json; charset=UTF-8'
			break
		default:
			break
	}

	return {
		headers: {
			'content-type': contentType
		},
		body,
		status: 200
	}
}

export default (paths: Array<string>) => {
	const [, resource] = paths

	switch (resource) {
		case 'script':
			const result = script(paths)
			if (typeof result === 'string') {
				return response(result, 'js')
			}
			return result
		case 'json':
			const content = json(paths)
			if (typeof content === 'string') {
				return response(content, 'json')
			}
			return content
		default:
			return notFound()
	}

}
