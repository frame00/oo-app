import projects from './fetch-api-projects'

export default async (uid: string): Promise<boolean> => {
	const project = await projects(uid)
	if (Array.isArray(project)) {
		const [item] = project
		const scope = item.Extensions.find(i => i.key === 'scope')
		return scope && scope.value && scope.value === 'public'
	}
	return false
}
