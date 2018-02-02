// From Tom Gruner @ http://stackoverflow.com/a/12034334/1660815
const entity = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
	'/': '&#x2F;'
}

export default (source: string): string => {
	return String(source).replace(/[&<>"'\/]/g, s => entity[s])
}
