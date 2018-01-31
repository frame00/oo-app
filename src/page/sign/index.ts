import {Callback} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import title from '../../lib/title'

export default (paths: Array<string>, callback: Callback): void => {
	const [resource] = paths
	if (paths.length > 1) {
		return notFound(callback)
	}
	const body = `
<main ${resource}>
	<oo-sign-in data-provider=google></oo-sign-in>
	<oo-sign-in data-provider=facebook></oo-sign-in>
	<oo-sign-in data-provider=github></oo-sign-in>
</main>
${_footer()}
	`
	const head = _head({title: title('Sign In/Sign Up')})
	const html = _html({head, body})
	callback(null, html)
}
