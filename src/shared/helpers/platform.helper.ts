import { Platform } from 'react-native'

export const isAndroid = (arg1: any, arg2: any) => {
	return Platform.OS === 'android' ? arg1 : arg2
}
