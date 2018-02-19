import tweet from '../../lib/tweet'
import facebook from '../../lib/facebook'
import loading from '../../template/loading.svg'

export default (paths: Array<string>, ogp: string) => {
	const url = `https://ooapp.co/${paths.join('/')}`
	return `
	<article>
		<section>
			<h2>Share answer</h2>
			<div class=column>
				<div class=preview>
					<div class=image>
						${loading}
						<img async-src=${ogp} width=1200 height=630 />
					</div>
				</div>
				<div class=share>
					<div>
						${tweet({
							text: '',
							url
						})}
					</div>
					<div>
						${facebook({
							url
						})}
					</div>
				</div>
			</div>
		</section>
	</article>
	`
}
