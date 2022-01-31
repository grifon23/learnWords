import { IRequestConfig } from '../http.service'

export interface ICreateTransaction {
	payeeName: string
	transactionType: string
	categoryId: number | string
	date: string
	amount: number | string
	currency: string
	bankAccountId: number | string
}

export interface IUpdateTransaction {
	transactionId: number
	payeeName?: string
	transactionType?: string
	categoryId?: number | string
	date?: string
	amount?: number | string
	currency?: string
	bankAccountId?: number | string
}

export interface IGetTransactionsRequest extends IRequestConfig {
	bankAccountId: number
	fromDate?: string
	toDate?: string
	limit?: number
	page?: number
	sortField?: string
	sort?: 'ASC' | 'DESC'
	searchString?: string
}

export interface IGetTransactionsStatisticsRequest extends IRequestConfig {
	bankAccountId: number
	fromDate?: string
	toDate?: string
	limit?: number
	page?: number
	sortField?: string
	sort?: 'ASC' | 'DESC'
	searchString?: string
}
