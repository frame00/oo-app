import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import tag from './tag'
import title from '../../lib/title'
import redirectToUser from '../../template/redirect-to-user'

export default (paths: Array<string>): CallbackOptions => {
	const [, first, second] = paths
	let content: string = ''
	switch(first) {
		case 'tag':
			if (!second || paths.length > 3) {
				return notFound()
			}
			content = tag(`${decodeURI(second)}`)
			break
		default:
			if (!first || paths.length > 2) {
				return notFound()
			}
			return {
				status: 200,
				body: redirectToUser()
			}
	}

	const body = `
<style>
	oo-projects {
		padding: 0 1rem;
		width: 100%;
		margin: auto;
		box-sizing: border-box;
		@media (min-width: 768px) {
			padding: 0 3rem;
		}
	}
</style>
${_nav()}
<main>
	${content}
	${_footer()}
</main>
	`

	const head = _head({title: title('Projects')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
