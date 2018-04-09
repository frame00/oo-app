import escape from '../../lib/escape-html'

export default (tag: string) => {
	return `
	<article>
		<header>
			<h1>${escape(tag)}</h1>
		</header>
		<section>
			<oo-projects data-tag=${escape(tag)}></oo-projects>
		</section>
	</article>
	`
}
