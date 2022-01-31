import { simpleDispatch } from '@/store/store-helpers'
import { SetLoadingAccount, SaveAccount } from '@/store/account'
import { fetchAccount } from '@/api'
import { IAccount, IUser, NavigationModuleKey, StorageKey } from '@/shared'
import { NavigationService, storageService } from '../system'

const ON_BOARDING_KEY = 'ONBOARDING'

const loadAccount = async () => {
	simpleDispatch(new SetLoadingAccount({ isLoading: true }))
	try {
		const { data } = await fetchAccount()
		simpleDispatch(new SaveAccount({ account: data }))
	} catch (e: any) {
		console.log(e)
	} finally {
		simpleDispatch(new SetLoadingAccount({ isLoading: false }))
	}
}



const setAccount = async (account: IAccount) => {
	simpleDispatch(new SaveAccount({ account }))
}

const checkOnboardingFinish = async () => {
	try {
		const res = await storageService.get(StorageKey.OnBoarding)
		return res === 'true'
	} catch (e) {
		return false
	}
}

const finishOnboarding = async () => {
	await storageService.set(StorageKey.OnBoarding, 'true')
	await NavigationService.setModule(NavigationModuleKey.Auth)
}

export const accountService = {
	loadAccount,
	setAccount,
	checkOnboardingFinish,
	finishOnboarding,
}
