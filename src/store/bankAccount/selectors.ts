import { RootState } from '@/store'

export const selectBankAccounts = (state: RootState) =>
	state.bankAccounts.bankAccounts

export const selectActiveBankAccount = (state: RootState) =>
	state.bankAccounts.activeBankAccount
