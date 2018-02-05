import ooElements from './oo-elements'
import progress from '../lib/progress'

interface Options {
	head: string,
	body: string
}

export default (opts: Options): string => {
	const {head, body} = opts
	return `
<!doctype html>
<html lang="en">
	${head}
	<body>
		${body}
		${ooElements()}
		${progress}
	</body>
</html>`
}
