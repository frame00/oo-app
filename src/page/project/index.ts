import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav.row'
import title from '../../lib/title'
import messagesCount from '../../lib/fetch-api-projects-messages-count'
import forksCount from '../../lib/fetch-api-projects-forks-count'
import iam from '../../lib/exp-iam'
import projects from '../../lib/fetch-api-projects-client'
import onProjectCreated from '../../lib/on-project-created'
import onMessageSent from './on-message-sent'
import share from './share'
import ogImage from '../../lib/og-image'
import mini from '../../lib/mini'
import whenSignedIn from './script/when-signed-in'

export default async (paths: Array<string>): Promise<CallbackOptions> => {
	const [, uid] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}

	const apis = await Promise.all([
		messagesCount(uid),
		forksCount(uid),
		projects(uid)
	])
	const [messages, forks, data] = apis
	const count = {
		messages,
		forks
	}

	const ooForks = count.forks ? `<oo-forks data-uid=${uid}></oo-forks>` : ''
	const og = ogImage('project', uid, count.messages)
	const contentShare = data.public ? share(paths, og) : ''
	const contentOnMessageSent = data.public ? onMessageSent(paths, uid, count.messages) : ''
	const body = `
<style>
	@import './style.scss';
</style>
${_nav()}
<main>
	<article>
		<section>
			<oo-project data-uid=${uid} on-messagesent on-projectcreated></oo-project>
			${ooForks}
		</section>
		<aside id=whatsDoubleO>
			<section>
				<h2>What's Double O?</h2>
				<div class=col>
					<div>
						<h3>Ask Me Anything</h3>
						<p><img src=//uploads-ssl.webflow.com/5ab9ebdbc827a63d89277323/5aba25ac54d3df35790f2517_oo-what-events-p-500.png /></p>
						<p>You can start "Ask Me Anything" right away.</p>
					</div>
					<div>
						<h3>Micro Knowledge</h3>
						<p><img src=//uploads-ssl.webflow.com/5ab9ebdbc827a63d89277323/5ac1f424b3e0cbf83b730e81_oo-what-micro-p-500.png /></p>
						<p>Write in 30 seconds, Goodbye blog.</p>
					</div>
				</div>
				<a href=/sign>Sign Up Free</a>
			</section>
		</aside>
	</article>
	${contentShare}
	${_footer()}
</main>
${whenSignedIn()}
${contentOnMessageSent}
${onProjectCreated}
${iam(true)}
	`

	const head = _head({
		title: title(mini(data.title || data.body) || 'Project'),
		description: mini(data.body, 90),
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
