import { IBankAccounts } from '@/api/bankAccount/responses.interfaces'
import { IBankAccount } from '@/shared'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { TBankAccountActions } from './types'

export interface IBankAccountState {
	bankAccount?: IBankAccount
	isActive?: boolean
	isLoading: boolean
}
export interface IBankAccountsState {
	bankAccounts?: IBankAccounts
	activeBankAccount?: IBankAccount
	isLoading: boolean
}

const initialState: IBankAccountsState = {
	bankAccounts: [],
	activeBankAccount: null,
	isLoading: false,
}

export const bankAccountReducer = createReducer<
	IBankAccountsState,
	TBankAccountActions
>(initialState, {
	SAVE_BANK_ACCOUNT: (state, action) => {
		return {
			...state,
			bankAccount: action.payload.bankAccount,
		}
	},

	SAVE_BANK_ACCOUNTS: (state, action) => {
		return {
			...state,
			bankAccounts: action.payload.bankAccounts,
		}
	},

	SET_LOADING_BANK_ACCOUNT: (state, action) => {
		return {
			...state,
			isLoading: action.payload.isLoading,
		}
	},

	SET_ACTIVE_BANK_ACCOUNT: (state, action) => {
		return {
			...state,
			activeBankAccount: action.payload.activeBankAccount,
		}
	},
})
