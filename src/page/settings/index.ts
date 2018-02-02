import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import iam from '../../lib/exp-iam'
import escape from '../../lib/escape-html'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	@import './style.scss';
</style>
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
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
		<article>
			<h2>Medium</h2>
			<oo-button data-iam=@IAM@></oo-button>
			<div class=code>
				<span>${escape('<script async src="//elements.ooapp.co/stable/oo-button.js"></script>')}</span>
				<span data-inject-iam>${escape('<oo-button data-iam="@IAM@"></oo-button>')}</span>
			</div>

			<h2>Small</h2>
			<oo-button data-size=small data-iam=@IAM@></oo-button>
			<div class=code>
				<span>${escape('<script async src="//elements.ooapp.co/stable/oo-button.js"></script>')}</span>
				<span data-inject-iam>${escape('<oo-button data-size="small" data-iam="@IAM@"></oo-button>')}</span>
			</div>
		</article>
		${_footer()}
	</main>
</div>
${iam}`
	const head = _head({title: title('Settings')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
