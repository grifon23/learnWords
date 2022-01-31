import { getDeviceName } from 'react-native-device-info'

const getDeviceTitle = async () => await getDeviceName()

export const DeviceInfoService = {
	getDeviceTitle,
}
