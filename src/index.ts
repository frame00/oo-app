import {Callback} from './type/callback'
import notFound from './page/404'
import sign from './page/sign'
import user from './page/user'

export default (paths: Array<string>, callback: Callback): void => {
	const [resource, sub] = paths

	switch (resource) {
		case 'sign':
			if (sub) {
				return notFound(callback)
			}
			return sign(paths, callback)
		default:
			user(paths, callback)
	}
}
