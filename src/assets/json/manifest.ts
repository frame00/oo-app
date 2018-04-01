const color = '#ffd600'

const json = {
	short_name: 'Double O',
	name: 'Double O',
	icons: [
		{
			src: 'https://assets.ooapp.co/icons/oo-48x48.png',
			type: 'image/png',
			sizes: '48x48'
		},
		{
			src: 'https://assets.ooapp.co/icons/oo-96x96.png',
			type: 'image/png',
			sizes: '96x96'
		},
		{
			src: 'https://assets.ooapp.co/icons/oo-192x192.png',
			type: 'image/png',
			sizes: '192x192'
		}
	],
	start_url: '/dashboard',
	background_color: color,
	theme_color:color,
	display: 'standalone'
}

export default () => JSON.stringify(json)
