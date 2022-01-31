import { Action } from 'redux'
import { IBudgetsList } from '@/api/budget'

export class SaveBudgets implements Action {
    readonly type = 'SAVE_BUDGETS'

    constructor(public readonly payload: { budgets: IBudgetsList }) { }
}
export type TBudgetActions =
    | SaveBudgets