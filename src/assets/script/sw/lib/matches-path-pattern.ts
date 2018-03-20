const {origin: ORIGIN} = self.location
const EXCLUDE = [
	`${ORIGIN}/`
]

const isSomeOrigin = (url: string) => url.startsWith(ORIGIN)
const isElementsPath = (url: string) => url.includes('elements.ooapp.co')
const isNotExcludePath = (url: string) => EXCLUDE.includes(url) === false
const isSomeOriginAndIsNotExcludePath = (url: string) => (isSomeOrigin(url) && isNotExcludePath(url))
const isCaches = (url: string) => {
	return (isSomeOriginAndIsNotExcludePath(url) || isElementsPath(url))
}

export default (url: string): boolean => isCaches(url)
