import users from './fetch-api-users'

interface Results {
	name: string,
	bio: string
}

const d = Object.create(null)
const stringValue = (exts: Array<{key: string, value: any}>, key: string): string => {
	return (exts.find(i => i.key === key) || d).value || ''
}

export default async (uid: string): Promise<Results> => {
	const user = await users(uid)
	if (Array.isArray(user)) {
		const [item] = user
		const name = stringValue(item.Extensions, 'name')
		const bio = stringValue(item.Extensions, 'bio')
		return {
			name,
			bio
		}
	}
	return {
		name: '',
		bio: ''
	}
}
