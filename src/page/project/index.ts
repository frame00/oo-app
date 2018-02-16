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

export default async (paths: Array<string>): Promise<CallbackOptions> => {
	const [, uid] = paths
	if (!uid || paths.length > 2) {
		return notFound()
	}

	const count = {
		messages: await messagesCount(uid),
		forks: await forksCount(uid)
	}

	const forks = count.forks ? `<oo-forks data-uid=${uid}></oo-forks>` : ''
	const body = `
<div class=container>
	${_nav({
		items: [
			{
				href: `/projects`,
				label: 'Projects'
			},
			{
				href: '/projects/@IAM@',
				label: 'Assigned projects'
			},
			{
				href: `/settings`,
				label: 'Settings'
			}
		]
	})}
	<main>
		<oo-project data-uid=${uid}></oo-project>
		${forks}
		${_footer()}
	</main>
</div>
${iam}
	`

	const head = _head({
		title: title('Project'),
		description: title('Project'),
		paths,
		og: {
			image: `https://og.images.ooapp.co/project/${uid}?${count.messages}`
		}
	})
	const html = _html({head, body})
	return {
		status: 200,
		body: html
	}
}
