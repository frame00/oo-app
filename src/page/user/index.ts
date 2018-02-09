import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import title from '../../lib/title'

export default (paths: Array<string>): CallbackOptions => {
	const [uid, sub] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}
	if (typeof sub === 'string' && sub !== 'projects') {
		return notFound()
	}

	const contents = resource => {
		if (resource) {
			return `
			<main>
				<article>
					<oo-profile data-iam=${uid}></oo-profile>
					<oo-projects data-iam=${uid}></oo-projects>
				</article>
				${_footer()}
			</main>`
		}
		return `
		<main>
			<oo-ask data-iam=${uid} data-sign-in-flow=redirect></oo-ask>
			${_footer()}
		</main>`
	}

	const body = `
<style>
	@import './style.scss';
</style>
${_nav()}
${contents(sub)}
	`
	const head = _head({title: title(sub ? 'Projects' : 'Ask')})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
