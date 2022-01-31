import { simpleDispatch } from '@/store/store-helpers'
import { SaveBudgets } from '@/store/budget/types'
import { budgetApi } from '@/api/budget/requests'
import { IBudgetsList } from '@/api/budget/responces.interfaces'
import { getErrorCode } from '@/shared'

export const loadBudgets = async (params: {
	bankAccountId: number
	fromDate: string
	toDate: string
}) => {
	try {
		const { data } = await budgetApi.fetchBudgets(params)

		setBudgets(data)
	} catch (err: any) {
		console.log({
			status: getErrorCode(err),
			message: err.response.data.message,
		})
	}
}

const setBudgets = async (budgets: IBudgetsList) => {
	simpleDispatch(new SaveBudgets({ budgets }))
}
