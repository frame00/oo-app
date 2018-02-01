import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	const [, uid] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}

	const body = `
<style>
	@import './style.scss';
</style>
<div class=container>
	<oo-nav>
		<a slot=item active href=projects/${uid}>Projects</a>
		<a slot=item href=settings/${uid}>Settings</a>
	</oo-nav>
	<main>
		<oo-projects data-iam=${uid}></oo-projects>
		${_footer()}
	</main>
</div>
	`
	const head = _head({title: title('Projects')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
