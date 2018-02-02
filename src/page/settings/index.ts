import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects/@IAM@`,
				label: 'Projects'
			},
			{
				href: `/settings`,
				label: 'Settings',
				active: true
			}
		]
	})}
	<main>
		<oo-profile-editor></oo-profile-editor>
		${_footer()}
	</main>
</div>
	`
	const head = _head({title: title('Settings')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
