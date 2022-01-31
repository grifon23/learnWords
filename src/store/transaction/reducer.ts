import { CurrencyEnum, ITransaction, TransactionsEnum } from '@/shared'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { TTransactionActions } from './types'

export interface ITransactionState {
	id: number
	userId: number
	payeeName: string
	transactionType: TransactionsEnum
	categoryId: number | string
	date: string
	amount: number | string
	currency: CurrencyEnum
	bankAccountId: number | string
}

export interface ITransactionsStatListState {
	items: ITransaction[]
	count: number
}

export interface ITransactionsState {
	newTransaction: ITransactionState
	transactionsStatList: ITransactionsStatListState
}

const initialState: ITransactionsState = {
	newTransaction: {
		id: null,
		userId: null,
		payeeName: '',
		transactionType: null,
		categoryId: null,
		date: '',
		amount: null,
		currency: null,
		bankAccountId: null,
	},
	transactionsStatList: {
		items: [],
		count: null,
	},
}

export const transactionsReducer = createReducer<
	ITransactionsState,
	TTransactionActions
>(initialState, {
	SAVE_TRANSACTIONS_STAT: (state, action) => {
		return {
			...state,
		}
	},
	SAVE_TRANSACTION: (state, action) => {
		return {
			...state,
			newTransaction: action.payload.newTransaction,
		}
	},

	SAVE_TRANSACTION_TYPE: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				transactionType: action.payload.transactionType,
			},
		}
	},

	SAVE_TRANSACTION_PAYEE: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				payeeName: action.payload.payeeName,
			},
		}
	},

	SAVE_TRANSACTION_CATEGORY: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				categoryId: action.payload.categoryId,
			},
		}
	},

	SAVE_TRANSACTION_AMOUNT: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				amount: action.payload.amount,
			},
		}
	},

	SAVE_TRANSACTION_CURRENCY_TYPE: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				currency: action.payload.currency,
			},
		}
	},

	SAVE_TRANSACTION_DATE: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				date: action.payload.date,
			},
		}
	},

	SAVE_TRANSACTION_ACTIVE_BANK_ID: (state, action) => {
		return {
			...state,
			newTransaction: {
				...state.newTransaction,
				bankAccountId: action.payload.activeBankId,
			},
		}
	},

	RESET_TRANSACTION_DATA: () => {
		return initialState
	},
})
