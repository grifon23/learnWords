import { RootState } from '@/store'

export const selectAccount = (state: RootState) => state.account.account

export const selectRole = (state: RootState) => state.account.account.role

export const selectId = (state: RootState) => state.account.account.id

export const selectIsLoading = (state: RootState) => state.account.isLoading