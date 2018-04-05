export default (uid: string) => {
	return `
	<script>
		(currentUser => {
			const uid = window.localStorage.getItem('oo:uid')
			const removeEl = el => el.parentNode.removeChild(el)
			const showEl = el => (el.style.display = 'block')
			const projects = document.getElementById('projects')
			const guide = document.getElementById('guide')
			if(currentUser === uid) {
				fetch('https://api.ooapp.co/stable/users/'+uid+'/projects')
				.then(res => {
					const count = ~~res.headers.get('x-oo-count') || 0
					if (count === 0) {
						guide && showEl(guide)
					} else {
						projects && showEl(projects)
					}
				})
			} else {
				guide && removeEl(guide)
				projects && showEl(projects)
			}
		})('${uid}')
	</script>
	`
}
