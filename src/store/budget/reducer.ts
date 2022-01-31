import { IBudgetsList } from "@/api/budget";
import { createReducer } from "@bitalikrty/redux-create-reducer";
import { TBudgetActions } from "./types";
export interface IBudgetListState {
    budgets: IBudgetsList
}

const initialState: IBudgetListState = {
    budgets: []
}


export const budgetReducer = createReducer<
    IBudgetListState,
    TBudgetActions>(initialState, {
        SAVE_BUDGETS: (state, action) => {
            return {
                ...state, budgets: action.payload.budgets
            }
        }
    })