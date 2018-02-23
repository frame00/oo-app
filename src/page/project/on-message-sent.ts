import share from './share'
import og from '../../lib/og-image'

const dummyImage = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

export default (paths: Array<string>, uid: string, count: number) => {
	if (count < 100) {
		const next = count > 1 ? 1 : count
		return `
		<script>
			(() => {
				window.document.querySelector('[on-messagesent]').addEventListener('messagesent', e => {
					const og = '${og('project', uid, ~~(next))}'
					const modal = document.getElementById('answerShare')
					const img = modal.querySelector('img')
					img.src = og
					modal.setAttribute('data-open', 'enabled')
				})
			})()
		</script>
		<oo-modal id=answerShare>
			<div slot=body>
				${share(paths, dummyImage)}
			</div>
		<oo-modal>
		`
	}
	return ''
}
