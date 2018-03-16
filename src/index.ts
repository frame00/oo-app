import {CallbackOptions} from './type/callback'
import sign from './page/sign'
import user from './page/user'
import dashboard from './page/dashboard'
import community from './page/community'
import projects from './page/projects'
import project from './page/project'
import settings from './page/settings'
import articles from './page/articles'
import assets from './assets'
import sw from './sw'

export default async (paths: Array<string>): Promise<CallbackOptions> => {
	const [resource] = paths

	switch (resource) {
		case 'sw.js':
			return sw()
		case 'assets':
			return assets(paths)
		case 'sign':
			return sign(paths)
		case 'dashboard':
			return dashboard(paths)
		case 'community':
			return community(paths)
		case 'projects':
			return projects(paths)
		case 'project':
			return project(paths)
		case 'settings':
			return settings(paths)
		case 'articles':
			return articles(paths)
		default:
			return user(paths)
	}
}
