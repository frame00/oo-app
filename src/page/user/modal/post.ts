type Part = {
	id: string,
	template: string
}

export default (): Part => {
	const id = 'post'
	const template = `
	<oo-modal id=${id}>
		<div slot=header>
			<h2>Share your knowledge</h2>
		</div>
		<div slot=body>
			<oo-ask-with-sign-in data-sign-in-flow=redirect on-projectcreated></oo-ask-with-sign-in>
		</div>
	</oo-modal>
	`

	return {id, template}
}
