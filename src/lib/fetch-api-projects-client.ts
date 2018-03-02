import projects from './fetch-api-projects'
import escapeHtml from './escape-html'
import compress from './compress'

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
			title: compress(escapeHtml(title)),
			body: compress(escapeHtml(body).substring(0, 100))
		}
	}
	return {
		public: false,
		title: '',
		body: ''
	}
}
