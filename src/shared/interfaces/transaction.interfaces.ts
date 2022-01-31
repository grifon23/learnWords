import { ICategory } from '@/api/categories/responses.interfaces';
import { CurrencyEnum, TransactionsEnum } from '../enums'

export interface ITransactionType {
	title: string
	icon: TransactionsEnum
}

export interface ITransaction {
	id: number
	userId: number
	payeeName: string
	transactionType: TransactionsEnum
	categoryId: number
	date: string
	amount: number
	currency: CurrencyEnum
	bankAccountId: number
	category: ICategory
}
