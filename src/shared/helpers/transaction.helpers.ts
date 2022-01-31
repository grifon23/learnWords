import { TransactionsEnum } from '../enums'

const transactionsDictionary = {
	[TransactionsEnum.Expense]: 'Витрати',
	[TransactionsEnum.Income]: 'Доходи',
}

export const getTransactionType = (type: TransactionsEnum) => {
	return transactionsDictionary[type] || 'Error'
}
