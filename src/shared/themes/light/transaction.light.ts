import { ITransaction } from '../interfaces/transaction.interface'

export const transactionColors: ITransaction = {
	transaction: {
		$expense: 'rgba(255, 51, 120, 1)',
		$income: 'rgba(25, 234, 37, 1)',
		total: {
			$income: 'rgba(25, 234, 37, 1)',
			$expense: 'rgba(255, 51, 120, 1)',
		},
	},
}
