export default `
<script>
	(() => {
		const uid = window.localStorage.getItem('oo:uid')
		if(!uid) return window.location.href = '/sign'
		window.document.querySelectorAll('[data-iam="@IAM@"]').forEach(el => {
			el.setAttribute('data-iam', uid)
		})
	})()
</script>
`
