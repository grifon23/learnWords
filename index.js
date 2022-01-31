/**
 * @format
 */

import { Alert, AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

import {
	setJSExceptionHandler,
	setNativeExceptionHandler,
} from 'react-native-exception-handler'

const errorHandler = (e, isFatal) => {
	if (isFatal) {
		Alert.alert(
			'Unexpected error occurred',
			`
            Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}

            We will need to restart the app.
            `,
			[
				{
					text: 'Restart',
					onPress: () => {},
				},
			],
		)
	} else {
		console.log(e) // So that we can see it in the ADB logs in case of Android if needed
	}
}

setJSExceptionHandler(errorHandler)

setNativeExceptionHandler(errorString => {
	Alert.alert(JSON.stringify(errorString))
})

AppRegistry.registerComponent(appName, () => App)
