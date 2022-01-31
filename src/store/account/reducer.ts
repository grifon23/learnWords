import { IAccount, IUser } from '@/shared'
import { createReducer } from '@bitalikrty/redux-create-reducer'
import { TAccountActions } from './types'

export interface IAccountState {
	account?: IAccount
	isLoading: boolean
}

const initialState: IAccountState = {
	account: null,
	isLoading: false,
}

export const accountReducer = createReducer<IAccountState, TAccountActions>(
	initialState,
	{
		SAVE_ACCOUNT: (state, action) => {
			return {
				...state,
				account: action.payload.account,
			}
		},

		SET_LOADING_ACCOUNT: (state, action) => {
			return {
				...state,
				isLoading: action.payload.isLoading,
			}
		},

		RESET_ACCOUNT: () => {
			return initialState
		},
	},
)
