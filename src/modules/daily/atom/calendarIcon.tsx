import { $size } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Calendar from '@/assets/images/calendar.svg'
import { TouchableOpacity } from 'react-native'
interface IProps {
	onPress: () => void
}
export const CalendarIcon: FC<IProps> = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<SvgXml
				style={styles.icon}
				xml={Calendar as any}
				width={$size(25)}
				height={$size(25)}
			/>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	icon: {},
})
