import onProjectCreated from '../../lib/on-project-created'

export default () => {
	return `
	<style>
		.wrap {
			width: 100%;
			padding: 4rem  1rem 2rem;
			background: #FFEB3B;
			margin-bottom: 3rem;
			@media (min-width: 768px) {
				padding: 3rem;
			}
		}
		section {
			margin: auto;
			max-width: 700px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: column;
			@media (min-width: 768px) {
				flex-direction: row;
			}
		}
		button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			outline: none;
			padding: 0;
			appearance: none;
			padding: 0.8rem 1.4rem;
			background: #E91E63;
			color: white;
			border-radius: 3rem;
			font-size: 1rem;
			&:hover {
				background: color(#E91E63 blackness(+10%));
			}
		}
		[slot=header],
		[slot=body] {
			h2 {
				margin: 0;
				font-size: 1.3rem;
				@media (min-width: 768px) {
					font-size: 1.5rem;
				}
			}
			padding: 2rem;
		}
		[slot=header] {
			background: #eceff1;
		}
		[slot=body] {
			padding: 1rem;
			@media (min-width: 768px) {
				padding: 2rem;
			}
		}
	</style>
	<div class=wrap>
		<section>
			<h1>Open micro knowledge</h1>
			<button onclick="document.getElementById('editor').setAttribute('data-open', 'enabled'); return false;">Write a post</button>
		</section>
	</div>
	<oo-modal id=editor>
		<div slot=header>
			<h2>Share your knowledge</h2>
		</div>
		<div slot=body>
			<oo-ask-with-sign-in on-projectcreated></oo-ask-with-sign-in>
		</div>
	</oo-modal>
	${onProjectCreated}
	`
}
