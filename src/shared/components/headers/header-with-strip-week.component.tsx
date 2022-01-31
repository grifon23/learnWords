import { HorizontalCalendar } from '@/modules/daily/atom/horizontal-calendar'
import {
	PrimaryHeader,
	StripCalendar,
	StripCalendarWeek,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native'

interface IProps {
	selected: Date
	title: {
		value: string
		weight?: '300-italic' | '300' | '400' | '500' | '600'
		style?: TextStyle
	}
	leftIcon?: {
		iconName: string
		size: number
		onPress: () => void
	}
	style?: ViewStyle
	rightComponent?: () => JSX.Element
	leftComponent?: () => JSX.Element
	onSelectDate: any
	onDayPress: any
}

export const HeaderWithStripWeek: FC<IProps> = ({
	onSelectDate,
	style,
	selected,
	onDayPress,
	...props
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<PrimaryHeader {...props} style={styles.primaryHeader} />
			<HorizontalCalendar selected={selected} onDayPress={onDayPress} />
			{/* <StripCalendarWeek
				selected={selected}
				onSelect={onSelectDate}
				style={styles.calendar}
			/> */}
		</View>
	)
}

const createStyles = ({ primaryHeader }: PartialTheme) =>
	StyleSheet.create({
		container: {
			zIndex: 999,
			shadowColor: primaryHeader.$shadow,
			shadowOpacity: 0.1,
			shadowRadius: 20,
			shadowOffset: {
				width: 0,
				height: 5,
			},
		},
		primaryHeader: {
			shadowOpacity: 0,
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,

			paddingBottom: 10,
		},
		// calendar: {
		// 	borderBottomLeftRadius: 30,
		// 	borderBottomRightRadius: 30,
		// },
	})
