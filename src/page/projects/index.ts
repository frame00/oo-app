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
	article {
		width: 100%;
	}
	header {
		text-align: center;
		padding: 8rem 1rem;
	}
	h1 {
		margin: 0;
		word-break: break-all;
		font-size: 2rem;
		@media (min-width: 768px) {
			font-size: 3rem;
		}
		&::before {
			content: '#';
		}
	}
	section {
		padding: 0 1rem;
	}
	oo-projects {
		width: 100%;
		margin: auto;
		max-width: 700px;
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
