import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	@import './style.scss';
</style>
<main>
	<div class=links>
		<a href=/projects slot=item>Projects</a>
		<a href=/settings slot=item>Settings</a>
	</div>
	${_footer()}
</main>
`
	const head = _head({title: title('Dashboard')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
