import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import header from './header'
import iam from '../../lib/exp-iam'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	oo-projects {
		padding: 0 3rem;
		max-width: 700px;
		margin: auto;
	}
</style>
<div class=container>
	${_nav({
		items: [
			{
				href: `/community`,
				label: 'Community',
				active: true
			},
			{
				href: '/projects/@IAM@',
				label: 'My projects'
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		${header()}
		<oo-projects></oo-projects>
		${_footer()}
	</main>
</div>
${iam(true)}`
	const head = _head({title: title('Community')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
