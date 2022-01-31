import { Platform } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import { launchImageLibrary } from 'react-native-image-picker'
import { PERMISSIONS } from 'react-native-permissions'
import { mediaPermissionsService } from './media-permissions.service'

interface IPickerProps {
	width: number
	height: number
	cropperCircleOverlay?: boolean
}

const permissions = Platform.select({
	ios: {
		camera: PERMISSIONS.IOS.CAMERA,
		gallery: PERMISSIONS.IOS.PHOTO_LIBRARY,
	},
	android: {
		camera: PERMISSIONS.ANDROID.CAMERA,
		gallery: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
	},
})

// const openCamera = async () => {
// 	const hasPermissions = await mediaPermissionsService.checkCameraPermissions(
// 		permissions.camera,
// 	)
// 	if (!hasPermissions) return null

// 	const image = await ImagePicker.openCamera({
// 		width: 300,
// 		height: 400,
// 		cropping: true,
// 		useFrontCamera: true,
// 		cropperCircleOverlay: true,
// 		includeBase64: true,
// 		mediaType: 'photo',
// 		writeTempFile: true,
// 		cropperChooseText: 'Обрати',
// 		cropperCancelText: 'Відмінити',
// 		loadingLabelText: 'Обробка',
// 	}).catch(err => console.log(err))

// 	return image
// }

const openCropPicker = async () => {
	const hasPermissions = await mediaPermissionsService.checkCameraPermissions(
		permissions.gallery,
	)

	if (!hasPermissions) return null

	const img = await ImageCropPicker.openPicker({
		width: 300,
		height: 400,
		cropping: true,
		includeBase64: true,
		mediaType: 'photo',
		writeTempFile: true,
		cropperChooseText: 'Обрати',
		cropperCancelText: 'Відмінити',
		loadingLabelText: 'Обробка',
	})

	return await onSuccessUpload(img)
}
const getName = image => {
	if (Platform.OS === 'ios') return image.filename

	try {
		return String(image.path).split('/').reverse()[0]
	} catch (e) {
		return 'avatar.jpg'
	}
}

const onSuccessUpload = async image => {
	delete image.data

	return {
		name: getName(image),
		type: image.mime,
		uri:
			Platform.OS === 'android'
				? image.path
				: image.path.replace('file://', ''),
	}
}

const openGalleryPicker = async () => {
	const hasPermissions = await mediaPermissionsService.checkCameraPermissions(
		permissions.gallery,
	)

	if (!hasPermissions) return null

	const img = await launchImageLibrary({
		mediaType: 'photo',
		includeBase64: true,
		selectionLimit: 1,
	})

	console.log(img)
	return await onSuccessUpload(img)
}

export const mediaService = {
	// openCamera,
	openCropPicker,
	openGalleryPicker,
}
