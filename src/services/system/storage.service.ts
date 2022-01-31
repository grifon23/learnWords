import { StorageKey } from '@/shared'
import AsyncStorage from '@react-native-async-storage/async-storage'

const get = async (key: StorageKey): Promise<string> => {
	try {
		return await AsyncStorage.getItem(key)
	} catch (e) {
		console.log('STORAGE GET: ', e)
	}
}

const set = async (key: StorageKey, value: string) => {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.log('STORAGE SET: ', e)
	}
}

const del = async (key: StorageKey) => {
	try {
		await AsyncStorage.removeItem(key)
	} catch (e) {
		console.log('STORAGE DELETE: ', e)
	}
}

export const storageService = {
	get,
	set,
	del,
}
