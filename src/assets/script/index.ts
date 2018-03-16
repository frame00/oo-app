import notFound from '../../page/404'
import app from './app'
import sw from './sw'

export default (paths: Array<string>) => {
	const [, , resource] = paths

	switch (resource) {
		case 'app.js':
			return app()
		case 'sw.js':
			return sw()
		default:
			return notFound()
	}

}
