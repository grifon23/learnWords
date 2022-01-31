import * as React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { selectActiveNavigationModule } from '@/store/shared'
import { NavigationModuleKey } from '@/shared'
import { accountService, authService } from '@/services/domain'
import {
	AuthNavigationGroup,
	OnboardingNavigationGroup,
	UsersNavigationGroup,
} from './navigation-groups'
import { NavigationService } from '@/services/system'
import SplashScreen from 'react-native-splash-screen'

export const Navigation = () => {
	const activeModule = useSelector(selectActiveNavigationModule)

	const handleAutoAuth = async () => {
		const onBoardingFinished = await accountService.checkOnboardingFinish()
		if (!onBoardingFinished) {
			NavigationService.setModule(NavigationModuleKey.OnBoarding)
		} else await authService.autoAuth()

		SplashScreen.hide()
	}

	React.useEffect(() => {
		handleAutoAuth()
	}, [])

	const modules = {
		[NavigationModuleKey.Auth]: <AuthNavigationGroup key="auth" />,
		[NavigationModuleKey.User]: <UsersNavigationGroup key="user" />,
		[NavigationModuleKey.OnBoarding]: (
			<OnboardingNavigationGroup key="onboardin" />
		),
	}

	return <NavigationContainer>{modules[activeModule]}</NavigationContainer>
}
