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
			<a href=#
			   onclick="document.getElementById('delete').setAttribute('data-open', 'enabled'); return false;"
			   style="
					display: inline-block;
					margin-top: 3rem;
					font-size: 0.9rem;
					text-decoration: none;
				"
			   >Delete account</a>
		</div>
	</oo-modal>
	`

	return {id, template}
}
