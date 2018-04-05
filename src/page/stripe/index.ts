import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import _title from '../../lib/title'
import iam from '../../lib/exp-iam'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
	<style>
		@import '../../style/article.scss';
		article {
			display: flex;
			min-height: 70vh;
		}
	</style>
	${_nav()}
	<article>
		<section>
			<oo-connect-stripe data-iam="@IAM@"></oo-connect-stripe>
		</section>
	</article>
	${_footer()}
	${iam()}
	`

	const head = _head({title: _title('Connect to your Stripe')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
