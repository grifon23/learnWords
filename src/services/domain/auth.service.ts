import { ResetTokens, SaveTokens } from '@/store/auth'
import { simpleDispatch } from '@/store/store-helpers'
import { DeviceInfoService, NavigationService, storageService } from '../system'
import {
	getErrorCode,
	ISignUp,
	ITokenPair,
	NavigationModuleKey,
	ResetAndSignInPayload,
	SignInPayload,
	StorageKey,
} from '@/shared'
import { authApi } from '@/api'
import { accountService } from './account.service'
import { Reset } from '@/store/shared'
import { ResetAccount } from '@/store/account'
import { categoryService } from './category.service'
import { bankAccountService } from './bank-account.service'

const signUp = async (params: ISignUp) => {
	try {
		const deviceName = await DeviceInfoService.getDeviceTitle()

		const { data: pairTokens } = await authApi.signUp({
			...params,
			lastName: ' ',
			deviceName,
		})

		await saveTokens(pairTokens)
		await loadDataAfterAuth()
	} catch (err: any) {
		throw {
			status: getErrorCode(err),
			message: err.response.data.message,
		}
	}
}

const signIn = async (payload: SignInPayload) => {
	try {
		const deviceName = await DeviceInfoService.getDeviceTitle()
		const { data } = await authApi.signInReq({ ...payload, deviceName })
		await saveTokens(data)
		await loadDataAfterAuth()
	} catch (e) {
		throw e
	}
}

const sendConfirmationCode = async (email: string) => {
	await authApi.confirmationCodeReq({ email })
}

const resetAndSignIn = async (payload: ResetAndSignInPayload) => {
	const deviceName = await DeviceInfoService.getDeviceTitle()
	const { data } = await authApi.resetAndSignInReq({ ...payload, deviceName })
	await saveTokens(data)
	await loadDataAfterAuth()
}

const saveTokens = async (tokens: ITokenPair) => {
	await storageService.set(StorageKey.AccessToken, tokens.accessToken)
	await storageService.set(StorageKey.RefreshToken, tokens.refreshToken)
	simpleDispatch(new SaveTokens(tokens))
}

const getTokensFromStore = async () => {
	const accessToken = await storageService.get(StorageKey.AccessToken)
	const refreshToken = await storageService.get(StorageKey.RefreshToken)

	return { accessToken, refreshToken }
}

const refreshSession = async (refreshToken?: string) => {
	let token = refreshToken
	if (!token) {
		const existTokens = await getTokensFromStore()
		token = existTokens?.refreshToken
	}

	if (!token) return

	const { data } = await authApi.resetSessionReq({
		refreshToken: token,
	})
	await saveTokens(data)
}

const dropTokens = async () => {
	await storageService.del(StorageKey.AccessToken)
	await storageService.del(StorageKey.RefreshToken)
}

const autoAuth = async () => {
	try {
		const existTokens = await getTokensFromStore()
		console.log(existTokens)

		if (!existTokens.refreshToken) throw new Error()

		if (existTokens.accessToken) {
			await refreshSession(existTokens.refreshToken)
			await loadDataAfterAuth()
		}
	} catch (e) {
		console.log('ACCOUNT LOADING ERROR', e)

		await dropTokens()
		NavigationService.setModule(NavigationModuleKey.Auth)
	}
}

const loadDataAfterAuth = async () => {
	await accountService.loadAccount()
	await bankAccountService.loadBankAccounts()
	await categoryService.loadCategories()
	await categoryService.loadIcons()

	NavigationService.setModule(NavigationModuleKey.User)
}

const logout = async () => {
	try {
		// await signOut({ refreshToken })/
		await dropTokens()
		simpleDispatch(new Reset())
		simpleDispatch(new ResetAccount())
		simpleDispatch(new ResetTokens())
	} catch (e) {
		console.log(e)
	}
}

export const authService = {
	saveTokens,
	refreshSession,
	sendConfirmationCode,
	signUp,
	autoAuth,
	logout,
	signIn,
	resetAndSignIn,
}
