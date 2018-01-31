import {js} from '../lib/sources'

interface Options {
	title: string
}

export default (opts: Options): string => {
	const {title} = opts
	return `
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>${title}</title>
	<link rel="preload" as="script" href="${js.elements_ooapp_co_stable_oo_elements}">
	<style>
		@import '../style/style.css';
	</style>
</head>`
}
