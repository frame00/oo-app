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
	@import '../../style/article.scss';
	@import './style.scss';
	article {
		padding: 3rem;
	}
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
				<h2>Add Double O link to your site.</h2>
				<p><a data-inject-iam href=https://ooapp.co/@IAM@ class=oo-link>https://ooapp.co/@IAM@</a></p>
				<p>Do you want to edit this link URL? Please vote in <a href=https://trello.com/c/KYyz7db5 target=_blank rel=noopener>Trello</a>.</p>
			</section>
		</article>
		<article class=danger>
			<section>
				<a href=# onclick="document.getElementById('delete').setAttribute('data-open', 'enabled'); return false;">Delete account</a>
				<oo-modal id=delete>
					<div slot=header>
						<h2>Are you sure you want to delete account?</h2>
					</div>
					<div slot=body>
						<p>Once you delete an account, you can not use the same account again.</p>
						<p>Please check if there are any ongoing projects.</p>
						<p>Would you like to delete your account?</p>
						<oo-delete-account></oo-delete-account>
					</div>
				<oo-modal>
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
