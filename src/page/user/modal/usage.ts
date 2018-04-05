import removeIndent from '../../../lib/remove-indent'
import escape from '../../../lib/escape-html'

type Part = {
	id: string,
	template: string
}

export default (): Part => {
	const id = 'usage'
	const template = `
	<style>
		section {
			&:not(:last-child) {
				margin-bottom: 4rem;
			}
		}
	</style>
	<oo-modal id=${id}>
		<div slot=header>
			<h2>Button usage</h2>
		</div>
		<div slot=body>
			<section id=askMe>
				<h2>Add "Ask Me" Button to your site.</h2>
				<p>Medium</p>
				<oo-button data-iam=@IAM@></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@"></oo-button>`)}
					\`\`\`
					`)}
				</oo-markdown>
				<p>Small</p>
				<oo-button data-iam=@IAM@ data-size=small></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-size="small"></oo-button>`)}
					\`\`\`
					`)}
				</oo-markdown>
			</section>
			<section id=offerMe>
				<h2>Add "Offer Me" Button to your site.</h2>
				<p>Medium</p>
				<oo-button data-iam=@IAM@ data-type=offer data-scope=private></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-type="offer" data-scope="private"></oo-button>`)}
					\`\`\`
					`)}
				</oo-markdown>

				<p>Small</p>
				<oo-button data-iam=@IAM@ data-size=small data-type=offer data-scope=private></oo-button>
				<oo-markdown data-inject-iam>
					${removeIndent(`
					\`\`\`html
						${escape(`<script async src="//elements.ooapp.co/stable/oo-button.js"></script>
						<oo-button data-iam="@IAM@" data-size="small" data-type="offer" data-scope="private"></oo-button>`)}
					\`\`\`
					`)}
				</oo-markdown>
			</section>
		</div>
	</oo-modal>
	`

	return {id, template}
}
