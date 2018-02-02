import {CallbackOptions} from './type/callback'
import sign from './page/sign'
import user from './page/user'
import dashboard from './page/dashboard'
import projects from './page/projects'
import project from './page/project'

export default (paths: Array<string>): CallbackOptions => {
	const [resource] = paths

	switch (resource) {
		case 'sign':
			return sign(paths)
		case 'dashboard':
			return dashboard(paths)
		case 'projects':
			return projects(paths)
		case 'project':
			return project(paths)
		default:
			return user(paths)
	}
}
