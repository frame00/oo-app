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
import deleteAccount from './modal/delete'
import expIam from '../../lib/exp-iam'
import expSlug from '../../lib/exp-slug'
import whenSignedIn from './script/when-signed-in'
import projectsExists from './script/projects-exists'

const onClickHandler = (id: string) => `document.getElementById('${id}').setAttribute('data-open', 'enabled'); return false;`

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
	`<a href=# onclick="${onClickHandler(post().id)}">Write a post</a>`,
	`<a href=# onclick="${onClickHandler(settings().id)}">Profile and settings</a>`,
	`<a href=# onclick="${onClickHandler(usage().id)}">Your buttons</a>`,
	`<oo-sign-out></oo-sign-out>`
])}
${post().template}
${settings().template}
${usage().template}
${deleteAccount().template}
<main>
	<div class=ask>
		<oo-ask class=content data-iam=${userUid} data-sign-in-flow=redirect></oo-ask>
	</div>
	<article class=content>
		<oo-projects id=projects class=wait data-iam=${userUid}></oo-projects>
		<section id=guide class=wait>
			<h2>Question or knowledge doesn't exist yet.</h2>
			<h3>Share your profile.</h3>
			<p><a data-inject-slug href=https://ooapp.co/@SLUG@>https://ooapp.co/@SLUG@</a></p>
			<p>🛠 Costomize your link with <a class=btn href=# onclick="${onClickHandler(settings().id)}">Profile and settings</a>.</p>
			<h3>Add button to your site.</h3>
			<p><a class=btn href=# onclick="${onClickHandler(usage().id)}">Your buttons</a></p>
			<h3>Write a first micro knowledge.</h3>
			<p><a class=btn href=# onclick="${onClickHandler(post().id)}">Write a post</a></p>
		</section>
	</article>
	${_footer()}
</main>
${whenSignedIn()}
${projectsExists(userUid)}
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
