import {readFileSync} from 'fs'
import {resolve, join} from 'path'
import {CallbackOptions} from '../../../type/callback'

export default (): CallbackOptions => {
	const root = resolve(__dirname)
	const sw = join(root, './sw.js')
	const body = readFileSync(sw, 'utf-8')
	return {
		headers: {
			'content-type': 'application/javascript; charset=UTF-8',
			'cache-control': 'max-age=0,no-cache,no-store,must-revalidate'
		},
		body,
		status: 200
	}
}
