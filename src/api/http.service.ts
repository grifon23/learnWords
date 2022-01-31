import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import cachios from 'cachios'
import { config } from '@/config'
import { GlobalContainerService } from '@/services/system'
import Storage from 'react-native-expire-storage'
import { authService } from '@/services/domain'
import { SetIsForbidden } from '@/store/shared'
import { simpleDispatch } from '@/store/store-helpers'
import { getErrorCode } from '@/shared/helpers'
import { Alert } from 'react-native'

const store = () => GlobalContainerService.get('store')

const axiosInstance = axios.create({
	baseURL: config.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 180000,
})

axiosInstance.interceptors.request.use((config: any) => {
	const token = store().getState().auth.accessToken
	if (token) {
		config.headers['authorization'] = `Bearer ${token}`
	}
	return config
})

const cachiosInstance = cachios.create(axiosInstance)

cachiosInstance.cache = {
	get: async (cacheKey: string) => {
		const res = await Storage.getItem(cacheKey)
		return res ? res : undefined
	},
	set: async (cacheKey: string, cacheValue: any, ttl: number) => {
		await Storage.setItem(cacheKey, cacheValue, ttl)
	},
}

const request = async <T>(func: Function): Promise<AxiosResponse<T>> => {
	try {
		let response = await func()
		return response as any as AxiosResponse
	} catch (e: any) {
		if (getErrorCode(e) === 401) {
			await authService.refreshSession()
			return (await func()) as any as AxiosResponse
		}
		throw e
	}
}

export interface ICacheRequestConfig extends AxiosRequestConfig {
	ttl?: number
	force?: boolean
	needCache?: true
}

export interface IRequestConfig extends AxiosRequestConfig { }

interface INonCacheRequestConfig extends AxiosRequestConfig {
	needCache?: false
}

type GetRequstConfig = ICacheRequestConfig | INonCacheRequestConfig

const api = {
	get: <T>(url: string, params?: GetRequstConfig) => {
		if (params && params.needCache) {
			if (!params.ttl) params.ttl = 60 * 60 * 5
			return request<T>(() => cachiosInstance.get(url, params))
		} else {
			return request<T>(() => axiosInstance.get<T>(url, params))
		}
	},
	post: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
		request<T>(() => axiosInstance.post<T>(url, data, params)),

	put: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
		request<T>(() => axiosInstance.put<T>(url, data, params)),

	patch: <T>(url: string, data: any, params?: AxiosRequestConfig) =>
		request<T>(() => axiosInstance.patch<T>(url, data, params)),

	delete: <T>(url: string, params?: AxiosRequestConfig) =>
		request<T>(() => axiosInstance.delete<T>(url, params)),
}
export default api
