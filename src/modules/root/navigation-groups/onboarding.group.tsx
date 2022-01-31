import React from 'react'
import { RouteKey } from '@/shared'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { OnBoardScreen } from '../screens'

const Stack = createNativeStackNavigator()

export const OnboardingNavigationGroup = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={RouteKey.OnBoarding}>
			<Stack.Screen
				name={RouteKey.OnBoarding}
				component={OnBoardScreen}
			/>
		</Stack.Navigator>
	)
}
