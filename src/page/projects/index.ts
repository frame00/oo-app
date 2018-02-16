import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import expIam from '../../lib/exp-iam'
import header from './header'

export default (paths: Array<string>): CallbackOptions => {
	const [, iam] = paths
	if (paths.length > 2) {
		return notFound()
	}

	const existsIam = typeof iam === 'string' && iam !== ''
	const projects = `<oo-projects${existsIam ? ` data-iam=${iam}` : ''}></oo-projects>`
	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
				label: 'Projects',
				active: !existsIam
			},
			{
				href: `/projects/${existsIam ? iam : '@IAM@'}`,
				label: 'Assigned projects',
				active: existsIam
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		${(() => {
			if (!existsIam) {
				return header()
			}
			return ''
		})()}
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
