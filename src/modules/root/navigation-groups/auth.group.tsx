import React from 'react'
import { RouteKey } from '@/shared'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PasswordChangeScreen, PasswordRestoreScreen, SignInScreen, SignUpScreen } from '@/modules/auth'

const Stack = createNativeStackNavigator()

export const AuthNavigationGroup = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={RouteKey.SignIn}>
			<Stack.Screen name={RouteKey.SignIn} component={SignInScreen} />
			<Stack.Screen name={RouteKey.SignUp} component={SignUpScreen} />
			<Stack.Screen name={RouteKey.PWRestore} component={PasswordRestoreScreen} />
			<Stack.Screen name={RouteKey.PWChange} component={PasswordChangeScreen} />
		</Stack.Navigator>
	)
}
