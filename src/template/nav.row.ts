import logo from './logo'

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
</nav>
`
}
