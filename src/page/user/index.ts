import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	const [uid] = paths
	if (!uid || paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	@import './style.scss';
</style>
${_nav()}
<main>
	<oo-offer data-iam=${uid}></oo-offer>
	${_footer()}
</main>
	`
	const head = _head({title: title('Offer')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
