import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import expIam from '../../lib/exp-iam'

export default (paths: Array<string>): CallbackOptions => {
	const [, iam] = paths
	if (paths.length > 2) {
		return notFound()
	}

	const projects = `<oo-projects${iam ? ` data-iam=${iam}` : ''}></oo-projects>`
	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
				label: 'Projects',
				active: !Boolean(iam)
			},
			{
				href: `/projects/${iam ? iam : '@IAM@'}`,
				label: 'Assigned projects',
				active: Boolean(iam)
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		${projects}
		${_footer()}
	</main>
</div>
${expIam}`
	const head = _head({title: title('Projects')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
