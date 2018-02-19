import ooElements from './oo-elements'
import progress from '../lib/progress'
import asyncImg from '../lib/async-img'

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
		${asyncImg}
	</body>
</html>`
}
