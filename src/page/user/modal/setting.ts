type Part = {
	id: string,
	template: string
}

export default (): Part => {
	const id = 'settings'
	const template = `
	<oo-modal id=${id}>
		<div slot=header>
			<h2>Your profile and settings</h2>
		</div>
		<div slot=body>
			<oo-profile-editor></oo-profile-editor>
		</div>
	</oo-modal>
	`

	return {id, template}
}
