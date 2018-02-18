import onProjectCreated from '../../lib/on-project-created'

export default () => {
	return `
	<style>
		oo-ask-with-sign-in {
			max-width: 500px;
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
	<div style="margin-top: 3rem">
		<div class=message>
			<input disabled placeholder="Tags (, separated) 👷soon..."></input>
		</div>
		<oo-ask-with-sign-in data-sign-in-flow=redirect on-projectcreated></oo-ask-with-sign-in>
	</div>
	${onProjectCreated}
	`
}
