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
	if (!iam || paths.length > 2) {
		return notFound()
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
<div class=container>
	${_nav({
		items: [
			{
				href: `/community`,
				label: 'Community'
			},
			{
				href: `/projects/${iam}`,
				label: 'My projects',
				active: true
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		${header()}
		<oo-projects class=column data-iam=${iam}></oo-projects>
		${_footer()}
	</main>
</div>
${expIam(true)}`
	const head = _head({title: title('Projects')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
