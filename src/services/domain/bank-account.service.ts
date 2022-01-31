import { simpleDispatch } from '@/store/store-helpers'
import {
	SetLoadingBankAccount,
	SaveBankAccount,
	SaveBankAccounts,
	SetActiveBankAccount,
} from '@/store/bankAccount'
import { bankAccountApi } from '@/api'
import { NavigationService } from '../system'
import { NavigationModuleKey, IBankAccount } from '@/shared'
import {
	ICreateBankAccount,
	ICreatePrivatIntegrationData,
} from '@/api/bankAccount/requests.interfaces'
import { IBankAccounts } from '@/api/bankAccount/responses.interfaces'

const loadBankAccounts = async () => {
	simpleDispatch(new SetLoadingBankAccount({ isLoading: true }))
	try {
		const { data } = await bankAccountApi.fetchBankAccounts()

		setBankAccounts(data)

		if (data.length) {
			setActiveBankAccount(data[0])
		}
	} catch (e: any) {
		console.log(e)
		throw new Error()
	} finally {
		simpleDispatch(new SetLoadingBankAccount({ isLoading: false }))
	}
}

const saveBankAccount = async (params: ICreateBankAccount) => {
	try {
		const { data } = await bankAccountApi.createBankAccount({
			...params,
		})
		loadBankAccounts()

		return data
	} catch (err: any) {
		console.log('error = ', err.response.data.message)
		throw new Error()
	}
}

const connectToPrivatBankAccount = async (
	params: ICreatePrivatIntegrationData,
) => {
	try {
		const { data } = await bankAccountApi.connectPrivatBankAccount({
			...params,
		})
		return data
	} catch (err: any) {
		console.log('error = ', err.response.data.message)
		throw new Error()
	}
}

const setBankAccounts = async (bankAccounts: IBankAccounts) => {
	simpleDispatch(new SaveBankAccounts({ bankAccounts }))
}

const setBankAccount = async (bankAccount: IBankAccount) => {
	simpleDispatch(new SaveBankAccount({ bankAccount }))
}

const setActiveBankAccount = async (activeBankAccount: IBankAccount) => {
	simpleDispatch(new SetActiveBankAccount({ activeBankAccount }))
}

const finishCreatingBankAccount = async () => {
	try {
		await bankAccountService.loadBankAccounts()
		await NavigationService.setModule(NavigationModuleKey.User)
	} catch (err: any) {
		console.log('error', err.response.data.message)
		throw new Error()
	}
}

const finishAuth = async () => {
	await console.log('autorization finished')
}

const loadBankDataAfterAuth = async () => {
	await bankAccountService.loadBankAccounts()
}

export const bankAccountService = {
	loadBankAccounts,
	saveBankAccount,
	connectToPrivatBankAccount,
	finishCreatingBankAccount,
	loadBankDataAfterAuth,
	setBankAccount,
	setActiveBankAccount,
	finishAuth,
}
