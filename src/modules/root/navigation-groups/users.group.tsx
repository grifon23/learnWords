import React, { FC } from 'react'
import { RouteKey } from '@/shared'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SocketIo } from '@/services/system'
import { DailyScreen, DailyTransaction } from '@/modules/daily'
import {
	BankAccountCreatedScreen,
	BankAccountsListScreen,
	ConnectPrivatScreen,
	PrivatBankConnectedScreen,
	PrivatBoardScreen,
} from '@/modules/bankAccounts'
import { TabBarSmart } from '../smart-components'

import { AddNewBankAccountScreen } from '@/modules/bankAccounts'
import { ProfileScreen } from '@/modules/account'
import { BudgetScreen, CreateBudgetScreen } from '@/modules/budget'
import {
	AmountInputTransactionScreen,
	CreateTransactionScreen,
	DetailedTransaction,
	PayeeInputTransactionScreen,
	SelectCategoryTransactionScreen,
	SelectDateTransactionScreen,
} from '@/modules/transaction'
import { EmptyScreen } from '../screens'
import { NewCategoryScreen } from '@/modules/categories'
import { StatScreen } from '@/modules/stat'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator: FC = () => {
	React.useEffect(() => {
		const socketIo = SocketIo.get()
		socketIo.init()
	}, [])

	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={RouteKey.Daily}
			tabBar={({ state, navigation: { navigate } }) => (
				<TabBarSmart state={state} navigate={navigate} />
			)}>
			<Tab.Screen name={RouteKey.Daily} component={DailyTransaction} />
			<Tab.Screen name={RouteKey.Stat} component={StatScreen} />
			<Tab.Screen
				name={RouteKey.CreateTransaction}
				component={CreateTransactionScreen}
			/>
			<Tab.Screen name={RouteKey.Budget} component={BudgetScreen} />
			<Tab.Screen
				name={RouteKey.BankAccounts}
				component={BankAccountsListScreen}
			/>
		</Tab.Navigator>
	)
}

export const UsersNavigationGroup: FC = () => (
	<Stack.Navigator
		screenOptions={{ headerShown: false }}
		initialRouteName={RouteKey.Empty}>
		<Stack.Screen name={RouteKey.Empty} component={EmptyScreen} />

		<Stack.Screen
			name={RouteKey.Tab}
			component={TabNavigator}
			options={{ gestureEnabled: false }}
		/>

		<Stack.Screen
			name={RouteKey.CreateBudget}
			component={CreateBudgetScreen}
		/>

		<Stack.Screen
			name={RouteKey.PayeeTransaction}
			component={PayeeInputTransactionScreen}
		/>

		<Stack.Screen
			name={RouteKey.CategoryTransaction}
			component={SelectCategoryTransactionScreen}
		/>

		<Stack.Screen
			name={RouteKey.NewCategory}
			component={NewCategoryScreen}
		/>

		<Stack.Screen
			name={RouteKey.AmountTransaction}
			component={AmountInputTransactionScreen}
		/>

		<Stack.Screen
			name={RouteKey.DateTransaction}
			component={SelectDateTransactionScreen}
		/>

		<Stack.Screen
			name={RouteKey.DetailedTransaction}
			component={DetailedTransaction}
		/>

		<Stack.Screen
			name={RouteKey.PrivatBoarding}
			component={PrivatBoardScreen}
		/>

		<Stack.Screen
			name={RouteKey.ConnectToPrivat}
			component={ConnectPrivatScreen}
		/>

		<Stack.Screen
			name={RouteKey.PrivatBankConnected}
			component={PrivatBankConnectedScreen}
		/>

		<Stack.Screen
			name={RouteKey.NewBankAccount}
			component={AddNewBankAccountScreen}
			options={{ gestureEnabled: false }}
		/>
		<Stack.Screen
			name={RouteKey.BankAccountCreated}
			component={BankAccountCreatedScreen}
			options={{ gestureEnabled: false }}
		/>
		<Stack.Screen name={RouteKey.Profile} component={ProfileScreen} />
	</Stack.Navigator>
)
