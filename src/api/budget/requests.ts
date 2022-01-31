import http from '../http.service'
import { ApiResponse } from '../http.types'
import * as Req from './requests.interfaces'
import * as Res from './responces.interfaces'

export const createBudget = (
	params: Req.ICreateBudget,
): ApiResponse<Res.IBudget> => {
	return http.post<Res.IBudget>(`budget`, params)
}

export const fetchBudgets = (
	params: Req.IFetchBudgets,
): ApiResponse<Res.IBudgetsList> => {
	return http.get<Res.IBudgetsList>(`budget`, { params })
}

export const budgetApi = {
	createBudget,
	fetchBudgets,
}
