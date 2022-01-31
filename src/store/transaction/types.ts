import { CurrencyEnum, ITransaction, TransactionsEnum } from '@/shared'
import { Action } from 'redux'

export class SaveTransactionsStat implements Action {
	readonly type = 'SAVE_TRANSACTIONS_STAT'
	constructor(
		public readonly payload: {
			items: ITransaction[]
			count: number
		},
	) {}
}
export class SaveTransaction implements Action {
	readonly type = 'SAVE_TRANSACTION'

	constructor(public readonly payload: { newTransaction: ITransaction }) {}
}

export class SaveTransactionType implements Action {
	readonly type = 'SAVE_TRANSACTION_TYPE'
	constructor(
		public readonly payload: {
			transactionType: TransactionsEnum
		},
	) {}
}

export class SaveTransactionPayee implements Action {
	readonly type = 'SAVE_TRANSACTION_PAYEE'
	constructor(
		public readonly payload: {
			payeeName: string
		},
	) {}
}

export class SaveTransactionCategory implements Action {
	readonly type = 'SAVE_TRANSACTION_CATEGORY'
	constructor(
		public readonly payload: {
			categoryId: number
		},
	) {}
}

export class SaveTransactionAmount implements Action {
	readonly type = 'SAVE_TRANSACTION_AMOUNT'
	constructor(
		public readonly payload: {
			amount: number
		},
	) {}
}

export class SaveTransactionCurrencyType implements Action {
	readonly type = 'SAVE_TRANSACTION_CURRENCY_TYPE'
	constructor(
		public readonly payload: {
			currency: CurrencyEnum
		},
	) {}
}

export class SaveTransactionDate implements Action {
	readonly type = 'SAVE_TRANSACTION_DATE'
	constructor(
		public readonly payload: {
			date: string
		},
	) {}
}

export class SaveTransactionActiveBankId implements Action {
	readonly type = 'SAVE_TRANSACTION_ACTIVE_BANK_ID'
	constructor(
		public readonly payload: {
			activeBankId: number
		},
	) {}
}

export class ResetTransactionData {
	readonly type = 'RESET_TRANSACTION_DATA'
}

export type TTransactionActions =
	| SaveTransactionsStat
	| SaveTransaction
	| SaveTransactionType
	| SaveTransactionPayee
	| SaveTransactionCategory
	| SaveTransactionAmount
	| SaveTransactionCurrencyType
	| SaveTransactionDate
	| SaveTransactionActiveBankId
	| ResetTransactionData
