import NetInfo from '@react-native-community/netinfo'

const localData = {
	internetIsConnected: true,
}

const init = () => {
	const unsubscribe = NetInfo.addEventListener(state => {
		localData.internetIsConnected = state.isConnected
	})
	unsubscribe()
}

const getInternetConnection = () => localData.internetIsConnected

export const NetworkService = {
	init,
	getInternetConnection,
}
