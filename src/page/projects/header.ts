import onProjectCreated from '../../lib/on-project-created'

export default () => {
	return `
	<oo-ask-with-sign-in data-sign-in-flow=redirect on-projectcreated></oo-ask-with-sign-in>
	${onProjectCreated}
	`
}
