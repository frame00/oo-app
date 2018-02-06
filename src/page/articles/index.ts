import md from 'markdown-it'
import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import _title from '../../lib/title'
import terms from './text/terms.ja.md'
import privacy from './text/privacy.ja.md'

const markdown = md({
	html: true
})

export default (paths: Array<string>): CallbackOptions => {
	const [, name] = paths
	if (paths.length > 2) {
		return notFound()
	}

	let title
	let contents
	switch (name) {
		case 'terms':
			title = '利用規約'
			contents = terms
			break
		case 'privacy':
			title = 'プライバシーポリシー'
			contents = privacy
			break
		default:
			return notFound()
	}

	const body = `
	<style>
		@import '../../style/article.scss';
	</style>
	${_nav()}
	<article>
		${markdown.render(contents)}
	</article>
	${_footer()}`
	const head = _head({title: _title(title)})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
