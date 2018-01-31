import {CallbackOptions} from '../../type/callback'
import notFound from '../404'

export default (paths: Array<string>): CallbackOptions => {
	return notFound()
}
