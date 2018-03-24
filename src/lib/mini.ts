import escapeHtml from './escape-html'
import compress from './compress'
import ellipsis from 'text-ellipsis'

export default (d: string, trim: number = 32) => {
	const text: string = ellipsis(escapeHtml(d), trim)
	return compress(text)
}
