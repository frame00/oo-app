import {CallbackOptions} from './type/callback'
import sign from './page/sign'
import user from './page/user'
import dashboard from './page/dashboard'

export default (paths: Array<string>): CallbackOptions => {
	const [resource] = paths

	switch (resource) {
		case 'sign':
			return sign(paths)
		case 'dashboard':
			return dashboard(paths)
		default:
			return user(paths)
	}
}
