import { Icon } from '@/shared'
import React, { FC } from 'react'
import { ColorValue, TouchableOpacity } from 'react-native'

interface IProps {
	iconName: string
	size: number
	color?: ColorValue
	style?: any
	onPress: () => void
}

export const TouchableIcon: FC<IProps> = ({
	iconName,
	size,
	color,
	style,
	onPress,
}) => {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<Icon name={iconName} size={size} color={color} />
		</TouchableOpacity>
	)
}
