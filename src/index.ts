import {CallbackOptions} from './type/callback'
import notFound from './page/404'
import sign from './page/sign'
import user from './page/user'

export default (paths: Array<string>): CallbackOptions => {
	const [resource, sub] = paths

	switch (resource) {
		case 'sign':
			if (sub) {
				return notFound()
			}
			return sign(paths)
		default:
			return user(paths)
	}
}
