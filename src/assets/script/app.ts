import {SWMessage} from '../../type/sw'

const script = (() => {
	if ('serviceWorker' in navigator) {
		const sendMessage = (message: SWMessage) => {
			return new Promise<any>((resolve, reject) => {
				const channel = new MessageChannel()
				channel.port1.onmessage = e => {
					const {data} = e
					if (data.error) {
						reject(data.error)
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
			return sendMessage('foreground')
		})
	}
})

export default () => `(${script})()`
