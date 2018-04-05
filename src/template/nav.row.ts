import logo from './logo'
import version from './version'

export default (links: Array<string> = []): string => {
	return `
<style>
	nav {
		border-bottom: 0.5px solid lightgray;
		.container {
			padding: 0;
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
	.brand,
	.items {
		padding: 1rem;
		@media (min-width: 768px) {
			padding: 2rem 1rem;
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
		overflow-x: auto;
		> a {
			font-weight: 600;
			text-decoration: none;
			color: #ffc107;
			font-size: 1.2rem;
			word-break: keep-all;
			white-space: pre;
			&:hover {
				color: #ff9800;
			}
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
		oo-sign-out {
			min-width: 130px;
			@media (min-width: 768px) {
				min-width: auto;
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
		${(() => {
			if (links.length > 0) {
				return `
				<div class=items>
					${links.join('')}
				</div>
				`
			}
			return ''
		})()}
	</div>
</nav>
`
}
