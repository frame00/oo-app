export default (type: 'project', uid: string, suffix?: string | number) => {
	if (type === 'project') {
		return `https://og.images.ooapp.co/project/${uid}?${suffix}`
	}
}
