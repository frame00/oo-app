import escape from '../../lib/escape-html'

export default (tag: string) => {
	return `
	<style>
		.wrap {
			width: 100%;
			background: #FFEB3B;
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h1 {
				font-size: 3rem;
			}
			h1,h2 {
				margin-top: 0;
				margin-bottom: 2rem 0;
			}
		}
	</style>
	<div class=wrap>
		<h1>👨‍💻⏳</h1>
		<h2>#${escape(tag)}</h2>
		<div class=trello>
			<blockquote class="trello-card"><a href="https://trello.com/c/8NTHOaWA/4-tagging-to-posts">Tagging to posts</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>
		</div>
	</div>
	`
}
