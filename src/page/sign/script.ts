export default `
<script>
	function signedIn() {
		window.location.href = '/dashboard'
	}
	window.document.querySelectorAll('oo-sign-in-with-redirect').forEach(el => {
		el.addEventListener('signedin', signedIn)
	})
</script>
`
