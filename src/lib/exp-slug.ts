export default (remove: boolean = false) => {
	return `
	<script>
		(async (r) => {
			const uid = window.localStorage.getItem('oo:uid')
			const slug = await new Promise(async resolve => {
				try {
					const res = await fetch(\`https://api.ooapp.co/stable/permalinks/\${uid}\`)
					const json = await res.json()
					const [{slug}] = json
					resolve(slug)
				} catch(err) {
					resolve(uid)
				}
			})
			const removeEl = el => el.parentNode.removeChild(el)
			const signedIn = uid && uid !== 'undefined'
			const remove = r && !signedIn
			if(!remove && !signedIn) return window.location.href = '/sign'
			window.document.querySelectorAll('[href*="@SLUG@"]').forEach(el => {
				if(remove) removeEl(el)
				else el.setAttribute('href', el.getAttribute('href').replace('@SLUG@', slug))
			})
			window.document.querySelectorAll('[data-inject-slug]').forEach(el => {
				if(remove) removeEl(el)
				else el.textContent = el.textContent.replace('@SLUG@', slug)
			})
		})(${remove})
	</script>
	`
}
