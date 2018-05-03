const {origin: ORIGIN} = self.location

const isSomeOrigin = (url: string) => url.startsWith(ORIGIN)
const isElementsPath = (url: string) => url.includes('elements.ooapp.co')
const isCaches = (url: string) => {
	return (isSomeOrigin(url) || isElementsPath(url))
}

export default (url: string): boolean => isCaches(url)
