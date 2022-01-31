export interface SignInPayload {
	email: string
	password: string
}

export interface ResetAndSignInPayload {
	email: string
	code: string
	newPassword: string
}

export interface ISignUp {
	firstName: string
	email: string
	password: string
}

export interface IGetRecoveryPasswordCode {
	email: string
}
