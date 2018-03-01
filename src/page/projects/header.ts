import onProjectCreated from '../../lib/on-project-created'

export default () => {
	return `
	<style>
		.wrap {
			width: 100%;
			padding: 3rem;
			background: #FFEB3B;
			margin-bottom: 3rem;
			h1 {
				margin-bottom: 3rem;
				font-weight: 400;
			}
		}
		.form {
			margin: auto;
			max-width: 700px;
		}
	</style>
	<div class=wrap>
		<div class=form>
			<h1>Share your knowledge</h1>
			<oo-ask-with-sign-in data-sign-in-flow=redirect on-projectcreated></oo-ask-with-sign-in>
		</div>
	</div>
	${onProjectCreated}
	`
}
