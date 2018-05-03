import {ClientToSWMessage, SWToClientMessageEvent, SWToClientMessage} from '../../type/sw'

const script = (() => {
	const updateToast = () => {
		const update = document.getElementById('updateToast')
		if (update) {
			update.style.display = 'block'
		}
	}
	const messageHandler = (message: SWToClientMessage) => {
		switch(message) {
			case 'newVersionAvailable':
				updateToast()
				break
			default:
		}
	}
	if ('serviceWorker' in navigator) {
		const sendMessage = (message: ClientToSWMessage) => {
			return new Promise<SWToClientMessage>((resolve, reject) => {
				const channel = new MessageChannel()
				channel.port1.onmessage = (e: SWToClientMessageEvent) => {
					const {data} = e
					if (!data) {
						reject(data)
					} else {
						resolve(data)
					}
				}
				try {
					(navigator as Navigator).serviceWorker.controller.postMessage(message, [channel.port2])
				} catch(err) {
					// Empty
				}
			})
		}

		(navigator as Navigator).serviceWorker.register('/sw.js').then(() => {
			return sendMessage({type: 'foreground', url: window.location.href})
		}).then(message => {
			messageHandler(message)
		})

		; (navigator as Navigator).serviceWorker.addEventListener('message', (e: SWToClientMessageEvent) => {
			const {data} = e
			messageHandler(data)
		})
	}
})

export default () => `(${script})()`
