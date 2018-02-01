export default (html: string): string => {
	return html.trim().replace(/[\n\t]/g, '')
}
