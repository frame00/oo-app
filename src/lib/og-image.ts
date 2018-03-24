export default (type: 'project' | 'users', uid: string, suffix?: string | number) => {
	if (type === 'project') {
		return `https://og.images.ooapp.co/${type}/${uid}?${suffix}`
	}
	if (type === 'users') {
		return `https://og.images.ooapp.co/${uid}?${suffix}`
	}
}
