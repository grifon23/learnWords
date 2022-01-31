export interface ICreateBudget {
	amount: number
	title: string
	bankAccountId: number
	categoryId: number
}

export interface IFetchBudgets {
	bankAccountId: number
	fromDate: string
	toDate: string
}
