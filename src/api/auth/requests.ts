import { AxiosResponse } from 'axios'
import http from '../http.service'
import { ApiResponse } from '../http.types'
import * as Req from './requests.interfaces'
import * as Res from './responses.interfaces'

const signUp = (payload: Req.ISignUp): ApiResponse<Res.IAuth> => {
	return http.post<Res.IAuth>('register', payload)
}

export const resetSessionReq = (payload: Req.IRefreshTokenPayload) => {
	return http.post<Res.IAuth>('auth/refresh-token', payload)
}

export const signInReq = (payload: Req.ISignIn) => {
	return http.post<Res.IAuth>('auth', payload)
}

//pw restore requests
export const confirmationCodeReq = (params: Req.IRequestConfirmationCode) => {
	return http.get<void>(`auth/password-recovery`, { params })
}

export const resetAndSignInReq = (payload: Req.IResetAndSignIn) => {
	return http.post<Res.IAuth>('auth/password-recovery/check-save', payload)
}

export const authApi = {
	signUp,
	resetSessionReq,
	confirmationCodeReq,
	resetAndSignInReq,
	signInReq,
}
