import {resolve, join} from 'path'

export default (path: string): string => {
	const root = resolve(__dirname)
	return join(root, path.replace(/(\.\.\/)+/, '../'))
}
