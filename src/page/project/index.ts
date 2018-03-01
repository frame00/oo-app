import {CallbackOptions} from '../../type/callback'
import notFound from '../404'
import _head from '../../template/head'
import _footer from '../../template/footer'
import _html from '../../template/html'
import _nav from '../../template/nav'
import title from '../../lib/title'
import messagesCount from '../../lib/fetch-api-projects-messages-count'
import forksCount from '../../lib/fetch-api-projects-forks-count'
import iam from '../../lib/exp-iam'
import _isPublic from '../../lib/fetch-api-projects-is-public'
import onProjectCreated from '../../lib/on-project-created'
import onMessageSent from './on-message-sent'
import share from './share'
import ogImage from '../../lib/og-image'

export default async (paths: Array<string>): Promise<CallbackOptions> => {
	const [, uid] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}

	const apis = await Promise.all([
		messagesCount(uid),
		forksCount(uid),
		_isPublic(uid)
	])
	const [messages, forks, isPublic] = apis
	const count = {
		messages,
		forks
	}

	const ooForks = count.forks ? `<oo-forks data-uid=${uid}></oo-forks>` : ''
	const og = ogImage('project', uid, count.messages)
	const contentShare = isPublic ? share(paths, og) : ''
	const contentOnMessageSent = isPublic ? onMessageSent(paths, uid, count.messages) : ''
	const body = `
<style>
	@import './style.scss';
</style>
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
				label: 'Public'
			},
			{
				href: '/projects/@IAM@',
				label: 'My projects'
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		<div>
			<oo-project data-uid=${uid} on-messagesent on-projectcreated></oo-project>
			${ooForks}
		</div>
		${contentShare}
		${_footer()}
	</main>
</div>
${contentOnMessageSent}
${onProjectCreated}
${iam(true)}
	`

	const head = _head({
		title: title('Project'),
		description: title('Project'),
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
