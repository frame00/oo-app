export default (removeWhenSignedout: boolean = false) => {
	return `
	<script>
		((removeWhenSignedout) => {
			const uid = window.localStorage.getItem('oo:uid')
			const removeEl = el => el.parentNode.removeChild(el)
			const remove = removeWhenSignedout && !uid
			if(!remove) if(!uid || uid === 'undefined') return window.location.href = '/sign'
			window.document.querySelectorAll('[data-iam="@IAM@"]').forEach(el => {
				if(remove) removeEl(el)
				else el.setAttribute('data-iam', uid)
			})
			window.document.querySelectorAll('[href*="@IAM@"]').forEach(el => {
				if(remove) removeEl(el)
				else el.setAttribute('href', el.getAttribute('href').replace('@IAM@', uid))
			})
			window.document.querySelectorAll('[data-inject-iam]').forEach(el => {
				if(remove) removeEl(el)
				else el.textContent = el.textContent.replace('@IAM@', uid)
			})
		})(${removeWhenSignedout})
	</script>
	`
}
