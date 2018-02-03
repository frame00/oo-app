export default `
<script>
	(() => {
		window.document.querySelector('oo-sign-out').addEventListener('signedout', () => {
			window.location.href = '/sign'
		})
	})()
</script>
`
