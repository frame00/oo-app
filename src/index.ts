import {CallbackOptions} from './type/callback'
import sign from './page/sign'
import user from './page/user'
import projects from './page/projects'
import project from './page/project'
import articles from './page/articles'
import assets from './assets'
import stripe from './page/stripe'
import redirectToUser from './template/redirect-to-user'

const toUserPage = (): CallbackOptions => {
	return {
		status: 200,
		body: redirectToUser()
	}
}

export default async (paths: Array<string>): Promise<CallbackOptions> => {
	const [resource] = paths

	switch (resource) {
		case 'sw.js':
			return assets(['assets', 'script', resource])
		case 'assets':
			return assets(paths)
		case 'sign':
			return sign(paths)
		case 'dashboard':
			return toUserPage()
		case 'projects':
			return projects(paths)
		case 'project':
			return project(paths)
		case 'settings':
			return toUserPage()
		case 'articles':
			return articles(paths)
		case 'stripe':
			return stripe(paths)
		default:
			return user(paths)
	}
}
