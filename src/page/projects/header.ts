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

			}
		}
		.form {
			margin: auto;
			max-width: 700px;
		}
		.message {
			margin-bottom: 1rem;
			input {
				width: 100%;
				padding: 0.5rem;
				border: 0.5px solid #ccc;
				border-radius: 5px;
				box-sizing: border-box;
				font-size: 16px;
				background: whitesmoke;
			}
		}
	</style>
	<div class=wrap>
		<div class=form>
			<h1>Any questions?</h1>
			<div class=message>
				<input disabled placeholder="Tags (, separated) 👷soon..."></input>
			</div>
			<oo-ask-with-sign-in data-sign-in-flow=redirect on-projectcreated></oo-ask-with-sign-in>
		</div>
	</div>
	${onProjectCreated}
	`
}
