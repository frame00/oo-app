import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import iam from '../../lib/exp-iam'
import slug from '../../lib/exp-slug'
import escape from '../../lib/escape-html'

const removeIndent = (text: string) => text.replace(/\t/g, '')

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
		<article id=askMe>
			<section>
				<h1>Ask Me</h1>
				<h2>Add "Ask Me" Button to your site.</h2>
				<p>Medium</p>
				<oo-button data-iam=@IAM@></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`
						<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@"></oo-button>
						`)}
					\`\`\`
					`)}
				</oo-markdown>
				<p>Small</p>
				<oo-button data-iam=@IAM@ data-size=small></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`
						<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-size="small"></oo-button>
						`)}
					\`\`\`
					`)}
				</oo-markdown>
				<h2>Add link to your site.</h2>
				<p><a data-inject-slug href=https://ooapp.co/@SLUG@ class=oo-link>https://ooapp.co/@SLUG@</a></p>
				<p>🛠 Costomize your link with <a href=/settings>"Settings".</a></p>
			</section>
		</article>
		<article id=offerMe>
			<section>
				<h1>Offer Me</h1>
				<h2>Add "Offer Me" Button to your site.</h2>
				<p>Medium</p>
				<oo-button data-iam=@IAM@ data-type=offer data-scope=private></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`
						<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-type="offer" data-scope="private"></oo-button>
						`)}
					\`\`\`
					`)}
				</oo-markdown>

				<p>Small</p>
				<oo-button data-iam=@IAM@ data-size=small data-type=offer data-scope=private></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`
						<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-size="small" data-type="offer" data-scope="private"></oo-button>
						`)}
					\`\`\`
					`)}
				</oo-markdown>
			</section>

			</article>
		${_footer()}
	</main>
</div>
${iam()}
${slug()}`
	const head = _head({title: title('Dashboard')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
