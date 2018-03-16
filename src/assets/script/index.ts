import notFound from '../../page/404'
import app from './app'

export default (paths: Array<string>) => {
	const [, , resource] = paths

	switch (resource) {
		case 'app.js':
			return app()
		default:
			return notFound()
	}

}
