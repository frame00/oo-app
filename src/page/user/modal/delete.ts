type Part = {
	id: string,
	template: string
}

export default (): Part => {
	const id = 'delete'
	const template = `
	<oo-modal id=${id}>
		<div slot=header>
			<h2>Are you sure you want to delete account?</h2>
		</div>
		<div slot=body>
			<p>Once you delete an account, you can not use the same account again.</p>
			<p>Please check if there are any ongoing projects.</p>
			<p>Would you like to delete your account?</p>
			<oo-delete-account></oo-delete-account>
		</div>
	</oo-modal>
	`

	return {id, template}
}
