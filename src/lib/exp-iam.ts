export default `
<script>
	(() => {
		const uid = window.localStorage.getItem('oo:uid')
		if(!uid) return window.location.href = '/sign'
		window.document.querySelectorAll('[data-iam="@IAM@"]').forEach(el => {
			el.setAttribute('data-iam', uid)
		})
		window.document.querySelectorAll('[href*="@IAM@"]').forEach(el => {
			el.setAttribute('href', el.getAttribute('href').replace('@IAM@', uid))
		})
		window.document.querySelectorAll('[data-inject-iam]').forEach(el => {
			el.textContent = el.textContent.replace('@IAM@', uid)
		})
	})()
</script>
`
