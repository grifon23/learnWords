import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { NetworkService } from '@/services/system'
import { ApiResponse } from './http.types'

const PREFIX = '@http-offline'
const getAsyncStorageKey = key => `${PREFIX}/${key}`

const setToStorage = async (key: string, data: unknown) => {
	await AsyncStorage.setItem(getAsyncStorageKey(key), JSON.stringify(data))
}

const getFromStorage = async (key: string) => {
	try {
		const data = await AsyncStorage.getItem(getAsyncStorageKey(key))
		return JSON.parse(data)
	} catch (e) {
		return null
	}
}

export const OfflineDecorator = async <T>(
	requestCall: () => ApiResponse<T>,
	key: string,
): ApiResponse<T> => {
	if (NetworkService.getInternetConnection()) {
		const response: AxiosResponse<T> = await requestCall()
		setToStorage(key, response.data)
		return response
	} else {
		const data = await getFromStorage(key)
		return {
			data,
			status: 200,
			statusText: 'Ok',
			headers: {},
			config: null,
		}
	}
}

export const generateKeyFromRequest = (
	url: string,
	params?: AxiosRequestConfig,
) => {
	let result = url
	if (params) {
		if (params.params && Object.keys(params.params).length) {
			const keys = Object.keys(params.params)
			const toResult: string[] = []
			keys.map((it: string) =>
				toResult.push(`${it}=${JSON.stringify(params.params[it])}`),
			)
			toResult.sort()
			result = `${url}?${toResult.join('&')}`
		}
	}

	return result
}
