import { AxiosRequestConfig } from 'axios'

export interface ISignUp {
	email: string
	firstName: string
	lastName: string
	password: string
	deviceName: string
}

export interface ISignIn {
	email: string
	password: string
	deviceName: string
}

export interface IRequestConfirmationCode extends AxiosRequestConfig {
	email: string
}
export interface IResetAndSignIn {
	email: string
	code: string
	newPassword: string
	deviceName: string
}

export interface IRefreshTokenPayload {
	refreshToken: string
}

export interface ILogoutPayload {
	refreshToken: string
}
