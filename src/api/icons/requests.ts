import { convertToFormData } from '@/shared/helpers/api.helpers'
import { IIcon } from '@/shared/interfaces/icon.interfaces'
import http from '../http.service'

export const fetchIconsReq = () => {
	return http.get<IIcon[]>(`/icon/list`)
}

export const uploadIconReq = (payload: any) => {
	return http.post('/icon', convertToFormData(payload))
}

export const iconsApi = {
	fetchIconsReq,
	uploadIconReq,
}
