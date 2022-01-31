import { createReducer } from '@bitalikrty/redux-create-reducer'
import { TAuthActions } from './types'

export interface IAuthState {
	accessToken: string
	refreshToken: string
}

const initialState: IAuthState = {
	accessToken: null,
	refreshToken: null,
}

export const authReducer = createReducer<IAuthState, TAuthActions>(
	initialState,
	{
		SAVE_TOKENS: (state, action) => {
			return {
				...state,
				accessToken: action.payload.accessToken,
				refreshToken: action.payload.refreshToken || state.refreshToken,
			}
		},

		SAVE_ACCESS_TOKEN: (state, action) => {
			return {
				...state,
				accessToken: action.payload.accessToken,
			}
		},

		RESET_TOKENS: () => {
			return initialState
		},
	},
)
