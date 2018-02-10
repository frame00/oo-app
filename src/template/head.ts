import {js} from '../lib/sources'
import ga from '../lib/ga'

interface OG {
	image: string
}

interface Options {
	title: string,
	description?: string,
	paths?: Array<string>,
	og?: OG
}

const ogp = (og: OG, opts: Options): string => {
	let res = ''
	if (!og || !opts) {
		return res
	}
	if (opts.title) {
		res += `
		<meta property=og:title content="${opts.title}" />
		<meta name=twitter:title content="${opts.title}">`
	}
	if (opts.description) {
		res += `
		<meta property=og:description content="${opts.description}" />
		<meta name=twitter:description content="${opts.description}" />`
	}
	if (opts.paths) {
		res += `
		<meta property=og:url content="${opts.paths.join('/')}" />`
	}
	if (og.image) {
		res += `
		<meta property=og:image content=${og.image} />
		<meta property=og:image:width content=1200 />
		<meta property=og:image:height content=630 />
		<meta name=twitter:image content=${og.image}>
		<meta name=twitter:card content=summary_large_image />
		<meta name=twitter:site content=@ooappco />`
	}
	return res
}

export default (opts: Options): string => {
	const {title, og} = opts
	const metaOg = ogp(og, opts)
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
