import { TransactionsEnum } from '@/shared'

export const transactionTypeMock = [
	{
		icon: TransactionsEnum.Income,
		title: 'Доходи',
	},
	{
		icon: TransactionsEnum.Expense,
		title: 'Витрати',
	},
]

export const transactionFieldValueMock = {
	Income: { title: 'Доходи' },
	Expense: { title: 'Витрати' },
}

// transactionTypeMock[tranction.type].icon
