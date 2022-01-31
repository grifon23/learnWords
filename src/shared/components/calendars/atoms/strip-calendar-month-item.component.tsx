import { $size, Txt, useTheme } from '@/shared'
import React, { FC } from 'react'
import {
	LayoutRectangle,
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
} from 'react-native'

interface IProps {
	year: number
	month: string
	isActive: boolean
	setLayout: (layout: LayoutRectangle) => void
	onPress: () => void
	style?: ViewStyle
}

export const StripCalendarMonthItem: FC<IProps> = ({
	year,
	month,
	isActive,
	setLayout,
	onPress,
	style,
}) => {
	const {
		styles,
		theme: { calendars },
	} = useTheme(createStyles)

	return (
		<TouchableOpacity
			onLayout={({ nativeEvent: { layout } }) => {
				setLayout(layout)
			}}
			style={[styles.container, style]}
			onPress={onPress}>
			<Txt
				style={[
					styles.year,
					{
						color: isActive
							? calendars.strip.$activeLabel
							: calendars.strip.$label,
					},
				]}>
				{year}
			</Txt>

			<Txt
				style={[
					styles.month,
					{
						color: isActive
							? calendars.strip.$activeTitle
							: calendars.strip.$title,
						backgroundColor: isActive
							? calendars.strip.$activeBg
							: calendars.strip.$bg,
					},
				]}
				weight={'500'}>
				{month}
			</Txt>
		</TouchableOpacity>
	)
}

const createStyles = () =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			width: $size(45, 40),
		},
		year: {
			fontSize: $size(11, 8),
			marginBottom: $size(10, 8),
		},
		month: {
			width: '100%',
			textAlign: 'center',
			fontSize: $size(14, 12),
			paddingVertical: $size(8, 6),
			borderRadius: 8,
			overflow: 'hidden',
		},
	})
