import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import iam from '../../lib/exp-iam'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
				label: 'Projects',
				active: true
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		<oo-projects data-iam=@IAM@></oo-projects>
		${_footer()}
	</main>
</div>
${iam}`
	const head = _head({title: title('Projects')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
