import {Callback} from '../../type/callback'
import notFound from '../404'

export default (paths: Array<string>, callback: Callback): void => {
	notFound(callback)
}
