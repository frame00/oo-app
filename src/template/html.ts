import ooElements from './oo-elements'

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
	</body>
</html>`
}
