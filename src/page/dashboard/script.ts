export default `
<script>
	(() => {
		const uid = window.localStorage.getItem('oo:uid')
		window.document.querySelectorAll('a[href*="@UID@"]').forEach(el => {
			el.setAttribute('href', el.getAttribute('href').replace('@UID@', uid))
		})
	})()
</script>
`
