import { TransactionsEnum } from '@/shared'

import IncomeSvg from '@/assets/images/transaction/income.svg'
import ExpenseSvg from '@/assets/images/transaction/expense.svg'

export const transactionSVG = {
	[TransactionsEnum.Income]: IncomeSvg,
	[TransactionsEnum.Expense]: ExpenseSvg,
}
