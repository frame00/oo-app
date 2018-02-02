import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	const [, uid] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}

	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/${uid}/projects`,
				label: 'Projects'
			},
			{
				href: `/${uid}/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		<oo-project data-uid=${uid}></oo-project>
		${_footer()}
	</main>
</div>
	`
	const head = _head({title: title('Project')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
