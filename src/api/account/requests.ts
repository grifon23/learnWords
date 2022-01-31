import { convertToFormData } from '@/shared/helpers/api.helpers'
import http from '../http.service'
import { ApiResponse } from '../http.types'
import { IFetchAccountResponse } from './responses.interfaces'
import { IUpdateAccountPayload } from './requests.interfaces'

export const fetchAccount = (): ApiResponse<IFetchAccountResponse> => {
	return http.get<IFetchAccountResponse>('account', {})
}

export const updateAvatarReq = (avatar: unknown) => {
	return http.put<{ avatarUrl: string }>(
		'account/avatar',
		convertToFormData(avatar),
	)
}

export const updateAccountReq = (
	payload: IUpdateAccountPayload,
): ApiResponse<IFetchAccountResponse> => {
	return http.patch('account', payload)
}
