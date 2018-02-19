export default (opts: {
	url: string
}) => {
	const {url} = opts
	return `
	<style>
		@import '../style/mixin-share.scss';
		.facebook-share-button {
			@mixin share;
			background: #4267b2;
			color: white;
		}
	</style>
	<a class=facebook-share-button
		href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}"
		target=_blank
		rel=noopener>
	Facebook
	</a>
	`
}
