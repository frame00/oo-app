export default () => {
	return `
	<script>
		(() => {
			const uid = window.localStorage.getItem('oo:uid')
			if(uid && uid !== 'undefined') return
			const els = Array.from(document.querySelectorAll('.needs-signed-in'))
			if (els) {
				els.forEach(el => {
					el.parentNode.removeChild(el)
				})
			}
		})()
	</script>
	`
}
