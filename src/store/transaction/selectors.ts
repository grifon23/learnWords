import { RootState } from '@/store'

export const selectTransaction = (state: RootState) =>
	state.transactions.newTransaction

export const selectTransactionsStatList = (state: RootState) =>
	state.transactions.transactionsStatList

export const selectTransactionType = (state: RootState) =>
	state.transactions.newTransaction.transactionType

export const selectTransactionPayee = (state: RootState) =>
	state.transactions.newTransaction.payeeName

export const selectTransactionCategory = (state: RootState) =>
	state.transactions.newTransaction.categoryId

export const selectTransactionAmount = (state: RootState) =>
	state.transactions.newTransaction.amount

export const selectTransactionDate = (state: RootState) =>
	state.transactions.newTransaction.date
