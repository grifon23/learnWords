import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export interface IStyles {
	[key: string]: ViewStyle | TextStyle | ImageStyle
}
