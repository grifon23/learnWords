import { ITokenPair } from '@/shared'
import { Action } from 'redux'

export class SaveTokens implements Action {
	readonly type = 'SAVE_TOKENS'
	constructor(public readonly payload: ITokenPair) {}
}

export class SaveAccessToken implements Action {
	readonly type = 'SAVE_ACCESS_TOKEN'
	constructor(
		public readonly payload: {
			accessToken: string
		},
	) {}
}

export class ResetTokens {
	readonly type = 'RESET_TOKENS'
}

export type TAuthActions = SaveTokens | SaveAccessToken | ResetTokens
