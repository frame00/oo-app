export default `
<script>
	(() => {
		window.document.querySelector('[on-projectcreated]').addEventListener('projectcreated', e => {
			try {
				const uid = e.detail.response[0].uid
				window.location.href = '/project/' + uid
			} catch(err) {
				console.log(err)
			}
		})
	})()
</script>
`
