import logo from './logo'

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

	return `
<style>
	oo-nav [slot=brand] {
		padding: 3rem;
		a {
			display: block;
			max-width: 150px;
		}
	}
</style>
<oo-nav>
	<div slot=brand>
		<a href=/dashboard>${logo('#ffd600')}</a>
	</div>
	${link}
</oo-nav>`
}
