import notFound from '../../page/404'
import manifest from './manifest'

export default (paths: Array<string>) => {
	const [, , resource] = paths

	switch (resource) {
		case 'manifest.json':
			return manifest()
		default:
			return notFound()
	}

}
