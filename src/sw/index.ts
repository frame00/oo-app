import {readFileSync} from 'fs'
import {resolve, join} from 'path'

export default () => {
	const root = resolve(__dirname)
	const sw = join(root, './sw.js')
	const body = readFileSync(sw, 'utf-8')

	return {
		headers: {
			'content-type': 'application/javascript; charset=UTF-8'
		},
		body,
		status: 200
	}
}
