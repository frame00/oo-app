import {CallbackOptions} from '../type/callback'
import _html from '../template/html'
import _head from '../template/head'

export default (): CallbackOptions => {
	const head = _head({title: '404 Not found'})
	const html = _html({head, body: ''})
	return {
		status: 404,
		body: html
	}
}
