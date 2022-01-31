import { Alert, PermissionsAndroid } from 'react-native'
import { request, check, RESULTS } from 'react-native-permissions'

const requestCameraPermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.CAMERA,
			{
				title: 'Cool Photo App Camera Permission',
				message:
					'Cool Photo App needs access to your camera ' +
					'so you can take awesome pictures.',
				buttonNegative: 'Cancel',
				buttonPositive: 'OK',
			},
		)
		console.log({ granted })
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the camera')
		} else {
			console.log('Camera permission denied')
		}
	} catch (err) {
		console.warn('requestCameraPermission: ', err)
	}
}

const checkCameraPermissions = async (permission: any): Promise<boolean> => {
	const perm = await check(permission)
	console.log(permission, perm)
	switch (perm) {
		case RESULTS.GRANTED:
			return true
		case RESULTS.BLOCKED: {
			// needMediaPermissions()
			break
		}
		case RESULTS.UNAVAILABLE: {
			Alert.alert('Your device does not support this function')
			break
		}
		default: {
			const requestRes = await request(permission)

			console.log('requestRes', requestRes)

			if (requestRes === RESULTS.GRANTED) return true
			else return false
		}
	}
}

export const mediaPermissionsService = {
	checkCameraPermissions,
}
