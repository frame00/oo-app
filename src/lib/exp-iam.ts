export default `
<script>
	(() => {
		const uid = window.localStorage.getItem('oo:uid')
		if(!uid) return window.location.href = '/sign'
		window.document.querySelectorAll('a[href*="@IAM@"]').forEach(el => {
			el.setAttribute('href', el.getAttribute('href').replace('@IAM@', uid))
		})
	})()
</script>
`
