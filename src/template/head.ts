import {js} from '../lib/sources'
import ga from '../lib/ga'

interface OG {
	image: string
}

interface Options {
	title: string,
	og?: OG
}

const ogp = (og: OG): string => {
	let res = ''
	if (og.image) {
		res += `<meta property=og:image content=${og.image} />`
		res += `<meta property=og:image:width content=1200 />`
		res += `<meta property=og:image:height content=630 />`
	}
	return res
}

export default (opts: Options): string => {
	const {title, og} = opts
	const metaOg = og ? ogp(og) : ``
	return `
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>${title}</title>
	${metaOg}
	<link rel="preload" as="script" href="${js.elements_ooapp_co_stable_oo_elements}">
	<style>
		@import '../style/style.css';
	</style>
	${ga()}
</head>`
}
