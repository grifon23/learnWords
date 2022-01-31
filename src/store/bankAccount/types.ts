import { IBankAccounts } from '@/api/bankAccount/responses.interfaces'
import { IBankAccount } from '@/shared'
import { Action } from 'redux'

export class SetLoadingBankAccount implements Action {
	readonly type = 'SET_LOADING_BANK_ACCOUNT'

	constructor(public readonly payload: { isLoading: boolean }) {}
}

export class SaveBankAccount implements Action {
	readonly type = 'SAVE_BANK_ACCOUNT'

	constructor(public readonly payload: { bankAccount: IBankAccount }) {}
}

export class SaveBankAccounts implements Action {
	readonly type = 'SAVE_BANK_ACCOUNTS'

	constructor(public readonly payload: { bankAccounts: IBankAccounts }) {}
}

export class SetActiveBankAccount implements Action {
	readonly type = 'SET_ACTIVE_BANK_ACCOUNT'

	constructor(public readonly payload: { activeBankAccount: IBankAccount }) {}
}

export type TBankAccountActions =
	| SetLoadingBankAccount
	| SaveBankAccount
	| SaveBankAccounts
	| SetActiveBankAccount
