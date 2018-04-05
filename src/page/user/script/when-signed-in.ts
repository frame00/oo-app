export default () => {
	return `
	<script>
		(() => {
			const uid = window.localStorage.getItem('oo:uid')
			if(uid && uid !== 'undefined') return
			const navItems = document.querySelector('nav .items')
			if (navItems) {
				navItems.parentNode.removeChild(navItems)
			}
		})()
	</script>
	`
}
