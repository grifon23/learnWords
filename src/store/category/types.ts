import { ICategories } from '@/api/categories/responses.interfaces'
import { IIcon } from '@/shared/interfaces/icon.interfaces'
import { Action } from 'redux'

export class SaveCategories implements Action {
	readonly type = 'SAVE_CATEGORIES'

	constructor(public readonly payload: { categories: ICategories }) {}
}

export class SaveIcons implements Action {
	readonly type = 'SAVE_ICONS'
	constructor(public readonly payload: IIcon[]) {}
}

export type TCategoryActions = SaveCategories | SaveIcons
