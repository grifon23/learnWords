import { transactionApi } from '@/api'
import {
	ICreateTransaction,
	IGetTransactionsStatisticsRequest,
	IUpdateTransaction,
} from '@/api/transaction/requests.interfaces'
import { ITransactions } from '@/api/transaction/responses.interfaces'
import { appEvents, CurrencyEnum, TransactionsEnum } from '@/shared'
import { simpleDispatch } from '@/store/store-helpers'
import {
	ResetTransactionData,
	SaveTransactionActiveBankId,
	SaveTransactionAmount,
	SaveTransactionCategory,
	SaveTransactionCurrencyType,
	SaveTransactionDate,
	SaveTransactionPayee,
	SaveTransactionsStat,
	SaveTransactionType,
} from '@/store/transaction'

const createTransaction = async (data: ICreateTransaction) => {
	await transactionApi.createTransaction(data)
	appEvents.emit('onTransactionCreated', { })
}

const saveTransaction = async (params: ICreateTransaction) => {
	try {
		const { data } = await transactionApi.createTransaction({
			...params,
		})
		console.log('new transaction :', data)

		return data
	} catch (err: any) {
		console.log('error creating transaction = ', err.response.data.message)
		throw new Error()
	}
}

const updateTransaction = async (params: IUpdateTransaction) => {
	try {
		const data = await transactionApi.updateTransaction({
			...params,
		})

		if (data.status === 200)
			appEvents.emit('onTransactionUpdated', { })
	} catch (err: any) {
		console.log('error updating transaction = ', err.response.data.message)
		throw new Error()
	}
}

const loadTransactionsStats = async (
	params: IGetTransactionsStatisticsRequest,
) => {
	try {
		const { data } = await transactionApi.getTransactionsStatistic({
			...params,
		})

		return data
	} catch (error: any) {
		console.log(
			'error setting transactions = ',
			error.response.data.message,
		)
		throw new Error()
	}
}

const setTransactionsStatList = async (transactionStatList: ITransactions) => {
	simpleDispatch(new SaveTransactionsStat(transactionStatList))
}

const saveTransactionType = async (transactionType: TransactionsEnum) => {
	simpleDispatch(new SaveTransactionType({ transactionType }))
}

const saveTransactionPayee = async (payeeName: string) => {
	simpleDispatch(new SaveTransactionPayee({ payeeName }))
}

const saveTransactionCategoryId = async (categoryId: any) => {
	simpleDispatch(new SaveTransactionCategory({ categoryId }))
}

const saveTransactionAmount = async (amount: any) => {
	simpleDispatch(new SaveTransactionAmount({ amount }))
}

const saveTransactionCurrencyType = async (currency: CurrencyEnum) => {
	simpleDispatch(new SaveTransactionCurrencyType({ currency }))
}

const saveTransactionDate = async (date: string) => {
	simpleDispatch(new SaveTransactionDate({ date }))
}

const saveTransactionActiveBankId = async (activeBankId: any) => {
	simpleDispatch(new SaveTransactionActiveBankId({ activeBankId }))
}

const resetTransactionData = async () => {
	simpleDispatch(new ResetTransactionData())
}

export const transactionService = {
	createTransaction,
	saveTransaction,
	updateTransaction,
	loadTransactionsStats,
	saveTransactionType,
	saveTransactionPayee,
	saveTransactionCategoryId,
	saveTransactionAmount,
	saveTransactionCurrencyType,
	saveTransactionDate,
	saveTransactionActiveBankId,
	resetTransactionData,
	setTransactionsStatList,
}
