import { ICategories } from '@/api/categories/responses.interfaces'
import { IIcon } from '@/shared/interfaces/icon.interfaces'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { TCategoryActions } from './types'

export interface ICategoriesState {
	categories?: ICategories
	isLoading: boolean
	icons: IIcon[]
}

const initialState: ICategoriesState = {
	categories: [],
	isLoading: false,
	icons: [],
}

export const categoriesReducer = createReducer<
	ICategoriesState,
	TCategoryActions
>(initialState, {
	SAVE_CATEGORIES: (state, action) => {
		return {
			...state,
			categories: action.payload.categories,
		}
	},

	SAVE_ICONS: (state, action) => {
		return {
			...state,
			icons: action.payload,
		}
	},
})
