import { IUser, IAccount } from '@/shared'
import { Action } from 'redux'

export class SaveAccount implements Action {
	readonly type = 'SAVE_ACCOUNT'

	constructor(public readonly payload: { account: IAccount }) {}
}

export class SetLoadingAccount implements Action {
	readonly type = 'SET_LOADING_ACCOUNT'

	constructor(public readonly payload: { isLoading: boolean }) {}
}

export class ResetAccount {
	readonly type = 'RESET_ACCOUNT'
}

export type TAccountActions = SaveAccount | SetLoadingAccount | ResetAccount
