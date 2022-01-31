import http from '../http.service'
import { ApiResponse } from '../http.types'
import * as Req from './requests.interfaces'
import * as Res from './responses.interfaces'

export const fetchBankAccounts = (): ApiResponse<Res.IBankAccounts> => {
	return http.get<Res.IBankAccounts>(`bank-account`)
}

export const createBankAccount = (
	params: Req.ICreateBankAccount,
): ApiResponse<Res.IBankAccountResponse> => {
	return http.post<Res.IBankAccountResponse>(`bank-account`, params)
}

export const editBankAccount = (
	id: number,
	data: Req.IUpdateBankAccountData,
): ApiResponse<Res.IEditedBankAccount> => {
	return http.patch<Res.IEditedBankAccount>(`bank-account/${id}`, data)
}

export const deleteBankAccount = (
	id: number,
): ApiResponse<Res.IBankAccountResponse> => {
	return http.delete<Res.IBankAccountResponse>(`bank-account/${id}`)
}

export const connectPrivatBankAccount = (
	params: Req.ICreatePrivatIntegrationData,
): ApiResponse<Res.IBankAccountResponse> => {
	return http.post<Res.IBankAccountResponse>(`bank-integrations`, params)
}

export const bankAccountApi = {
	fetchBankAccounts,
	createBankAccount,
	editBankAccount,
	deleteBankAccount,
	connectPrivatBankAccount,
}
