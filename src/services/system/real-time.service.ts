import { config } from '@/config'
import { Alert } from 'react-native'
import io from 'socket.io-client'
import { GlobalContainerService } from './global-container.service'

const store = () => GlobalContainerService.get('store')

export class SocketIo {
	private socket: any

	init() {
		if (this.socket) this.socket.close()

		this.socket = io(config.socketUrl, { forceNew: true })

		this._on('connect', () => {
			this.emit('join-user', store().getState().account.account)
			this.initSockets()
		})
		this._on('websocket/test', (data: string) => {
			Alert.alert(data)
		})
	}


	get header() {
		return {
			authorization: 'Bearer ' + store().getState().auth.accessToken,
		}
	}

	_on(key, action) {
		this.socket.on(key, (data) => action(data))
	}

	_onSocketSendEvent(key) {
		this.socket.on(key, (data) => console.log('SOCKET EVENT', key))
	}

	_off(key) {
		this.socket.off(key)
	}

	emit(key, data: any = {}) {
		data.headers = this.header
		this.socket.emit(key, data)
	}

	initSockets() {
		this._onSocketSendEvent('push-notification')
	}

	static instance: SocketIo = null

	static get(): SocketIo {

		if (this.instance) return this.instance

		this.instance = new SocketIo()

		return this.instance
	}
}
