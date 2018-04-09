export default () => {
	return `
	<script>
		(() => {
			const uid = window.localStorage.getItem('oo:uid')
			if(uid && uid !== 'undefined') {
				const whats = document.getElementById('whatsDoubleO')
				if (whats) {
					whats.parentNode.removeChild(whats)
				}
			}
		})()
	</script>
	`
}
