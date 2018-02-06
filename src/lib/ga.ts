export default () => {
	return `
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-67415117-7"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-67415117-7');
	</script>
	`
}
