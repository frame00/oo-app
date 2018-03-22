import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import iam from '../../lib/exp-iam'
import slug from '../../lib/exp-slug'

export default (paths: Array<string>): CallbackOptions => {
	if (paths.length > 1) {
		return notFound()
	}

	const body = `
<style>
	@import '../../style/article.scss';
	@import './style.scss';
	article {
		padding: 1rem;
		box-sizing: border-box;
		@media (min-width: 768px) {
			padding: 3rem;
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
				href: '/projects/@IAM@',
				label: 'My projects'
			},
			{
				href: `/settings`,
				label: 'Settings',
				active: true
			}
		]
	})}
	<main>
		<oo-profile-editor class=column></oo-profile-editor>
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
${iam(false)}
${slug(false)}`
	const head = _head({title: title('Settings')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
