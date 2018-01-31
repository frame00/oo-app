import {Callback} from '../type/callback'
import html from '../template/html'
import head from '../template/head'

export default (callback: Callback): void => {
	const htmlHead = head({title: '404 Not found'})
	const htmlHtml = html({head: htmlHead, body: ''})
	callback(null, htmlHtml)
}
