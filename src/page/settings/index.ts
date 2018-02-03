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
		<article class=info>
			<section>
				<h2>Add Double O Button to your site.</h2>
				<p>Medium</p>
				<oo-button data-iam=@IAM@></oo-button>
				<div class=code>
					<span>${escape('<script async src="//elements.ooapp.co/stable/oo-button.js"></script>')}</span>
					<span data-inject-iam>${escape('<oo-button data-iam="@IAM@"></oo-button>')}</span>
				</div>

				<p>Small</p>
				<oo-button data-size=small data-iam=@IAM@></oo-button>
				<div class=code>
					<span>${escape('<script async src="//elements.ooapp.co/stable/oo-button.js"></script>')}</span>
					<span data-inject-iam>${escape('<oo-button data-size="small" data-iam="@IAM@"></oo-button>')}</span>
				</div>
			</section>
		</article>
		<article class=danger>
			<section>
				<h2>Delete account</h2>
				<p>Once you delete an account, you can not use the same account again.</p>
				<p>Please check if there are any ongoing projects.</p>
				<p>Would you like to delete your account?</p>
				<oo-delete-account></oo-delete-account>
			</section>
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
