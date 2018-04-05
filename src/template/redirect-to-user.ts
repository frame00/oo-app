export default () => {
	return `
	<!doctype html>
	<html lang="en">
		<body>
			<script>
				(() => {
					const uid = window.localStorage.getItem('oo:uid')
					if(uid && uid !== 'undefined') {
						window.location.href = '/'+uid
					} else {
						window.location.href = '/'
					}
				})()
			</script>
		</body>
	</html>
	`
}
