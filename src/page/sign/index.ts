import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import title from '../../lib/title'
import script from './script'

export default (paths: Array<string>): CallbackOptions => {
	const [resource] = paths
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	@import './style.scss';
</style>
<main ${resource}>
	<div class=signins>
		<div class=buttons>
			<oo-sign-in data-provider=google></oo-sign-in>
			<oo-sign-in data-provider=facebook></oo-sign-in>
			<oo-sign-in data-provider=github></oo-sign-in>
		</div>
	</div>
	${_footer()}
</main>
${script}
	`
	const head = _head({title: title('Sign In/Sign Up')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
