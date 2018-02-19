export default (opts: {
	text: string,
	url: string
}) => {
	const {text, url} = opts
	return `
	<style>
		@import '../style/mixin-share.scss';
		.twitter-share-button {
			@mixin share;
			background: #2196F3;
			color: white;
		}
	</style>
	<a class=twitter-share-button
		href="https://twitter.com/intent/tweet?text=${`${text ? `${text} ` : ''}${url}`}"
		target=_blank
		rel=noopener>
	Tweet
	</a>
	`
}
