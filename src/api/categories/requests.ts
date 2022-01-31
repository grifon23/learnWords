import http from '../http.service'
import { ApiResponse } from '../http.types'
import * as Req from './requests.interfaces'
import * as Res from './responses.interfaces'

export const fetchCategories = (): ApiResponse<Res.ICategories> => {
	return http.get<Res.ICategories>(`category`)
}

export const addCategory = (payload: Req.ICreateCategory) => {
	return http.post('category', payload)
}

export const categoriesApi = {
	fetchCategories,
	addCategory,
}
