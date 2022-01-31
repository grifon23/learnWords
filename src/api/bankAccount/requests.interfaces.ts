export interface ICreateBankAccount {
	accountName: string
	amount: number
}
export interface IUpdateBankAccountData {
	accountName?: string
	amount?: number
}

export interface ICreatePrivatIntegrationData {
	bankAccountId: number
	merchantId: number
	password: string
	card: string
}
