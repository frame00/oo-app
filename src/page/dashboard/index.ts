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
<style>
	@import './style.scss';
	.trello {
		font-size: 0.8rem;
		a {
			color: inherit;
		}
	}
	article {
		.oo-link {
			background: #FFC107;
		}
		.oo-btn-link {
			display: inline-block;
			padding: 1rem;
			background: whitesmoke;
			border-radius: 10px;
			color: inherit;
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
				label: 'Settings'
			}
		]
	})}
	<main>
		<article>
			<section>
				<h1>Next step</h1>

				<h2>1. Complete your profile</h2>
				<p><a href=/settings class=oo-btn-link>Open your settings.</a></p>

				<h2>2. Share your "Ask Me" link</h2>
				<p><a data-inject-iam href=https://ooapp.co/@IAM@ class=oo-link>https://ooapp.co/@IAM@</a></p>
				<p class=trello>Do you want to edit this link URL? Please vote in <a href=https://trello.com/c/KYyz7db5 target=_blank rel=noopener>Trello</a>.</p>
			</section>
		</article>
		${_footer()}
	</main>
</div>
${iam()}`
	const head = _head({title: title('Dashboard')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
