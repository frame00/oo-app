export default `
<script>
	(() => {
		window.addEventListener('load', () => {
			window.document.querySelectorAll('[async-src]').forEach(el => {
				el.src = el.getAttribute('async-src')
			})
		})
	})()
</script>
`
