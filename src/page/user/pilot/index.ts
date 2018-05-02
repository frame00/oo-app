type Contents = Array<{
	role?: string,
	after?: string,
	text: string
}>

const template = (text: string, role?: string, after?: string) => `<section role='${role}'><p>${text}</p>${after ? after : ''}</section>`
const items = (list: Contents) => list.map(i => template(i.text, i.role, i.after)).join('')
const item = (text: string) => {
	return {
		text,
		role: 'none presentation'
	}
}
const projectItem = (text: string) => {
	return {...item(text), ...{
		after: `
			<div>
				<span>👍</span>
				<span>🤝</span>
				<span>👼</span>
				<span></span>
			</div>
		`
	}}
}

export default () => `
	<style>
		[pilot] {
			width: 100%;
			padding: 1rem 0;
			background: #FAFAFA;
			> * {
				margin: 1rem 0;
			}
			header {
				padding: 0 1rem;
				h2 {
					margin: 0;
				}
			}
			section {
				overflow-x: auto;
				> div {
					display: flex;
					width: fit-content;
					padding: 0 1rem;
				}
				section {
					display: flex;
					margin: 0;
					margin-right: 1rem;
					min-width: 180px;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;
					background: aliceblue;
					font-weight: bold;
					border-radius: 14px;
					p {
						margin: 0;
						padding: 2rem;
					}
					&:last-child {
						margin-right: 0;
					}
					&[role=button] {
						cursor: pointer;
					}
				}
				&.projects {
					section {
						&[role*=none] {
							background: #E8EAF6;
							color: #7986CB;
							border: 3px dashed;
							overflow: hidden;
							flex-direction: column;
							justify-content: space-between;
							div {
								display: flex;
								height: 35px;
								background: #C5CAE9;
								width: 100%;
								justify-content: right;
								align-items: center;
								span {
									margin: 0 .3rem;
									font-size: 1rem;
									&:last-child {
										height: 1rem;
										background: #9FA8DA;
										border-radius: 99px;
										flex-grow: 1;
									}
								}
							}
						}
						&[role=button] {
							background: #3F51B5;
							color: white;
						}
					}
				}
				&.skills {
					section {
						&[role*=none] {
							background: #F3E5F5;
							color: #BA68C8;
							border: 3px dashed;
						}
						&[role=button] {
							background: #9C27B0;
							color: white;
						}
					}
				}
			}
		}
	</style>
	<article pilot>
		<header>
			<h2>Projects</h2>
		</header>
		<section class=projects>
			<div>
				${items([
					{text: '+Your project', role: 'button'},
					projectItem('Service Worker だけの勉強会を開きたい'),
					projectItem('HoloLens で地球規模のレゴしたい'),
					projectItem('WAI-ARIA の技術書を書きたい'),
					projectItem('信州の森でもくもく会したい'),
					projectItem('夜のカフェでまったり勉強会したい'),
					projectItem('いまさら聞けないことだけ聞く会をやりたい'),
					projectItem('Web Components の状態管理ライブラリを書きたい')
				])}
			</div>
		</section>
	</article>

	<article pilot>
		<header>
			<h2>Skills</h2>
		</header>
		<section class=skills>
			<div>
				${items([
					{text: '+Your skill', role: 'button'},
					item('JavaScript'),
					item('TypeScript'),
					item('Swift'),
					item('Rust'),
					item('Go'),
					item('Haskell'),
					item('PHP'),
					item('Ruby')
				])}
			</div>
		</section>
	</article>
	<oo-modal id=pilotFeatureModal data-open=disabled>
		<header slot=header><h1>Pilot Feature</h1></header>
		<div slot=body>
			<p>This feature is pilot feature.</p>
			<p>Depending on your interests, the features to be released will be decided.</p>
			<p>Thank you 😍😉</p>
		</div>
	</oo-modal>
	<script>
		(() => {
			const modal = document.getElementById('pilotFeatureModal')
			const els = Array.from(document.querySelectorAll('[pilot] section[role=button]'))
			els.forEach(el => {
				el.addEventListener('click', e => {
					const text = e.target.innerText || ''
					text && ga && ga('send', 'event', 'pilot', 'click', text.trim())
					modal.setAttribute('data-open', 'enabled')
				})
			})
		})()
	</script>
`
