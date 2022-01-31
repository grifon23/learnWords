import { TAuthActions } from './types'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { NavigationModuleKey } from '@/shared/enums'

export interface ISharedState {
	activeNavigationModule: NavigationModuleKey
	isForbidden: ConstrainBoolean
	isExistUser: ConstrainBoolean
}

const initialState: ISharedState = {
	activeNavigationModule: NavigationModuleKey.Loading,
	isForbidden: false,
	isExistUser: false,
}

export const sharedReducer = createReducer<ISharedState, TAuthActions>(
	initialState,
	{
		SET_NAVIGATION_MODULE: (state, action) => {
			console.log('NAVIGATION MODUEL CHANGE', action.payload.module)
			return {
				...state,
				activeNavigationModule: action.payload.module,
			}
		},

		SET_IS_EXIST_USER: (state, action) => {
			return {
				...state,
				isExistUser: action.payload.isExistUser,
			}
		},

		SET_IS_FORBIDDEN: (state, action) => {
			return {
				...state,
				isForbidden: action.payload.isForbidden,
			}
		},

		RESET: () => {
			return {
				activeNavigationModule: NavigationModuleKey.Auth,
				isForbidden: false,
				isExistUser: false,
			}
		},
	},
)
