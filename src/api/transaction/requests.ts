import http from '../http.service'
import { ApiResponse } from '../http.types'
import * as Req from './requests.interfaces'
import * as Res from './responses.interfaces'

export const createTransaction = (
	params: Req.ICreateTransaction,
): ApiResponse<Res.ITransactionResponse> => {
	return http.post<Res.ITransactionResponse>(`transaction`, params)
}

export const updateTransaction = (
	params: Req.IUpdateTransaction,
): ApiResponse<Res.ITransactionResponse> => {
	return http.patch<Res.ITransactionResponse>(`transaction`, params)
}

export const getTransactions = (
	params?: Req.IGetTransactionsRequest,
): ApiResponse<Res.ITransactions> => {
	return http.get<Res.ITransactions>(`transaction`, params)
}

export const getTransactionsStatistic = (
	params: Req.IGetTransactionsStatisticsRequest,
): ApiResponse<Res.ITransactions> => {
	return http.get<Res.ITransactions>(`transaction-statistic`, params)
}

export const transactionApi = {
	createTransaction,
	updateTransaction,
	getTransactions,
	getTransactionsStatistic,
}
