import projects from './fetch-api-projects'

interface Results {
	public: boolean,
	title: string,
	body: string
}

const d = Object.create(null)
const stringValue = (exts: Array<{key: string, value: any}>, key: string): string => {
	return (exts.find(i => i.key === key) || d).value || ''
}

export default async (uid: string): Promise<Results> => {
	const project = await projects(uid)
	if (Array.isArray(project)) {
		const [item] = project
		const scope = item.Extensions.find(i => i.key === 'scope')
		const title = stringValue(item.Extensions, 'title')
		const body = stringValue(item.Extensions, 'body')
		return {
			public: scope && scope.value && scope.value === 'public',
			title,
			body
		}
	}
	return {
		public: false,
		title: '',
		body: ''
	}
}
