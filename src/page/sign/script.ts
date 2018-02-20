export default `
<script>
	function signedIn() {
		const uid = window.localStorage.getItem('oo:uid')
		if(uid && uid !== 'undefined') window.location.href = '/dashboard'
	}
	window.document.querySelectorAll('oo-sign-in-with-redirect').forEach(el => {
		el.addEventListener('signedin', signedIn)
	})
</script>
`
