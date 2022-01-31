import { IBudgetListState, budgetReducer } from './budget';
import { GlobalContainerService } from '@/services/system'
import { createStore, combineReducers, compose } from 'redux'
import { accountReducer, IAccountState } from './account/reducer'
import { bankAccountReducer, IBankAccountsState } from './bankAccount'
import { authReducer, IAuthState } from './auth'
import { ISharedState, sharedReducer } from './shared'
import reactron from '@/services/system/reactron.service'
import { categoriesReducer, ICategoriesState } from './category'
import { ITransactionsState, transactionsReducer } from './transaction'

const rootReducer = combineReducers<{
	auth: IAuthState
	shared: ISharedState
	account: IAccountState
	bankAccounts: IBankAccountsState
	budgets: IBudgetListState
	categories: ICategoriesState
	transactions: ITransactionsState
}>({
	auth: authReducer,
	account: accountReducer,
	shared: sharedReducer,
	bankAccounts: bankAccountReducer,
	budgets: budgetReducer,
	categories: categoriesReducer,
	transactions: transactionsReducer,
})

let storeEnhancers = []

if (__DEV__) {
	const reactotron = reactron.createEnhancer()
	storeEnhancers = [...storeEnhancers, reactotron]
}

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, compose(...storeEnhancers))

GlobalContainerService.set('store', store)

export default store
