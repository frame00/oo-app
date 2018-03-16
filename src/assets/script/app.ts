const script = (() => {
	if ('serviceWorker' in navigator) {
		(navigator as Navigator).serviceWorker.register('sw.js')
	}
})

export default () => `(${script})()`
