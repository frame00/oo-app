import {CallbackOptions} from '../../type/callback'
import _html from '../../template/html'
import _head from '../../template/head'

export default (): CallbackOptions => {
	const body = `
<style>
	@import './style.scss';
</style>
<main>
	<span class=404>404</span>
	<span class=not-found>Not found</span>
</main>
`
	const head = _head({title: '404 Not found'})
	const html = _html({head, body})
	return {
		status: 404,
		body: html
	}
}
