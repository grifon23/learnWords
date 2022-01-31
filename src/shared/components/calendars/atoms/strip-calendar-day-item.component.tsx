import { $size, Txt, useTheme } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

interface IProps {
	dayOfWeek: string
	dayNumber: string | number
	isActive: boolean
	onPress: () => void
	style?: ViewStyle
}

export const StripCalendarDayItem: FC<IProps> = ({
	dayOfWeek,
	dayNumber,
	isActive,
	onPress,
	style,
}) => {
	const {
		styles,
		theme: { calendars },
	} = useTheme(createStyles)

	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<Txt
				style={[
					styles.dayOfWeek,
					{
						color: isActive
							? calendars.strip.$activeLabel
							: calendars.strip.$label,
					},
				]}>
				{dayOfWeek}
			</Txt>

			<Txt
				style={[
					styles.dayNumber,
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
				{dayNumber}
			</Txt>
		</TouchableOpacity>
	)
}

const createStyles = () =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			width: $size(34, 31),
		},
		dayOfWeek: {
			fontSize: $size(15, 8),
			marginBottom: $size(10, 8),
		},
		dayNumber: {
			width: '100%',
			textAlign: 'center',
			fontSize: $size(14, 12),
			paddingVertical: $size(8, 6),
			borderRadius: 18,
			borderWidth: 0.1,
			borderStyle: 'dashed',

			overflow: 'hidden',
		},
	})
