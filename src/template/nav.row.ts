import logo from './logo'
import version from './version'

export default (): string => {
	return `
<style>
	nav {
		padding: 1rem;
		background: whitesmoke;
	}
	a {
		display: block;
		max-width: 150px;
	}
</style>
<nav>
	<a href=/dashboard>${logo('#ffd600')}</a>
	${version()}
</nav>
`
}
