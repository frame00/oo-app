import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import title from '../../lib/title'
import permalinks from '../../lib/fetch-api-permalinks'
import users from '../../lib/fetch-api-users-client'
import ogImage from '../../lib/og-image'
import mini from '../../lib/mini'
import settings from './modal/setting'
import post from './modal/post'
import usage from './modal/usage'
import expIam from '../../lib/exp-iam'
import expSlug from '../../lib/exp-slug'
import whenSignedIn from './script/when-signed-in'

export default async (paths: Array<string>, test: boolean = false): Promise<CallbackOptions> => {
	const [uid] = paths
	let userUid = uid
	if (!uid || paths.length > 1) {
		return notFound()
	}
	const permalink = await permalinks(uid)
	if (permalink instanceof Error) {
		return notFound()
	}
	if (Array.isArray(permalink)) {
		const [{slug, user}] = permalink
		if (uid !== slug) {
			return {
				status: 301,
				headers: {
					Location: `/${slug}`
				},
				body: ''
			}
		}
		userUid = user
	}
	const data = await users(userUid)
	const og = ogImage('users', userUid, test ? 0 : ~~(Math.random() * 1000))

	const body = `
<style>
	@import './style.scss';
	.ask {
		width: 100%;
	}
</style>
${_nav([
	`<a href=# onclick="document.getElementById('${post().id}').setAttribute('data-open', 'enabled'); return false;">Write a post</a>`,
	`<a href=# onclick="document.getElementById('${settings().id}').setAttribute('data-open', 'enabled'); return false;">Profile and settings</a>`,
	`<a href=# onclick="document.getElementById('${usage().id}').setAttribute('data-open', 'enabled'); return false;">Your buttons</a>`,
	`<oo-sign-out></oo-sign-out>`
])}
${post().template}
${settings().template}
${usage().template}
<main>
	<div class=ask>
		<oo-ask data-iam=${userUid} data-sign-in-flow=redirect></oo-ask>
	</div>
	<article>
		<oo-projects data-iam=${userUid}></oo-projects>
	</article>
	${_footer()}
</main>
${whenSignedIn()}
${expIam()}
${expSlug()}
	`

	const head = _head({
		title: title(mini(data.name || 'Ask Me Anything')),
		description: mini(data.bio, 90),
		paths,
		og: {
			image: og
		}
	})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
