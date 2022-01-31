import { TransactionsEnum } from '@/shared'

import IncomeSvg from '@/assets/images/stat/income.svg'
import ExpenseSvg from '@/assets/images/stat/expense.svg'

export const statTransactionSVG = {
	[TransactionsEnum.Income]: IncomeSvg,
	[TransactionsEnum.Expense]: ExpenseSvg,
}
