import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Navigation } from './modules/root'
import store from './store'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import './services/system/reactron.service'
import { ThemeProvider } from './shared/themes'
import { StatusBar } from 'react-native'

const App = () => {
	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			<ThemeProvider>
				<ActionSheetProvider>
					<Provider store={store}>
						<Navigation />
					</Provider>
				</ActionSheetProvider>
			</ThemeProvider>
		</>
	)
}

export default App
