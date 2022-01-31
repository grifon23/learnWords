import { NavigationModuleKey } from '@/shared'
import { Action } from 'redux'

export class SetNavigationModule implements Action {
	readonly type = 'SET_NAVIGATION_MODULE'
	constructor(
		public readonly payload: {
			module: NavigationModuleKey
		},
	) {}
}

export class SetIsForbidden implements Action {
	readonly type = 'SET_IS_FORBIDDEN'

	constructor(
		public readonly payload: {
			isForbidden: boolean
		},
	) {}
}

export class SetIsExistUser implements Action {
	readonly type = 'SET_IS_EXIST_USER'

	constructor(
		public readonly payload: {
			isExistUser: boolean
		},
	) {}
}

export class Reset {
	readonly type = 'RESET'
}

export type TAuthActions = SetNavigationModule | SetIsForbidden | SetIsExistUser | Reset
