import logo from './logo'
import version from './version'

export default (links: Array<string> = []): string => {
	return `
<style>
	nav {
		padding: 1rem;
		border-bottom: 0.5px solid lightgray;
		@media (min-width: 768px) {
			padding: 2rem;
		}
	}
	.container {
		margin: auto;
		width: 100%;
		max-width: 940px;
		padding: 0 1rem;
		box-sizing: border-box;
		justify-content: space-between;
		> div {
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
	}
	.brand {
		a {
			display: block;
			max-width: 150px;
		}
	}
	.items {
		display: flex;
		align-items: center;
		> a {
			font-weight: 600;
			text-decoration: none;
			color: #ffc107;
			font-size: 1.2rem;
			&:hover {
				color: #ff9800;
			}
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
	}
</style>
<nav>
	<div class=container>
		<div class=brand>
			<a href=/dashboard>${logo('#ffd600')}</a>
			${version()}
		</div>
		<div class=items>
			${links.join('')}
		</div>
	</div>
</nav>
`
}
