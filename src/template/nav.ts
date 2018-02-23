import logo from './logo'
import onSignedOut from '../lib/on-signed-out'
import version from './version'

interface Options {
	items: Array<{
		href: string,
		label: string,
		active?: boolean
	}>
}

export default (opts: Options): string => {
	const {items} = opts
	let link = ''
	for (const item of items) {
		link += `<a slot=item ${item.active ? 'active' : ''} href=${item.href}>${item.label}</a>`
	}
	link += `
	<a slot=item class=chat href=https://tlk.io/ooapp>Users Chat 💬
		<div style="color: lightgray">
			<p style="margin: 0"><small>2月27日(火) 19時～</small></p>
			<p style="margin: 0"><small>3月 1日(木) 19時～</small></p>
		</div>
	</a>`

	return `
<style>
	oo-nav {
		[slot=brand] {
			padding: 3rem;
			a {
				display: block;
				max-width: 150px;
			}
		}
		[slot=footer] {
			padding: 3rem;
		}
	}
</style>
<oo-nav>
	<div slot=brand>
		<a href=/dashboard>${logo('#ffd600')}</a>
		${version()}
	</div>
	${link}
	<div slot=footer>
		<oo-sign-out></oo-sign-out>
	</div>
</oo-nav>
${onSignedOut}
`
}
