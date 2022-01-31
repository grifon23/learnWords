import { Txt } from '@/shared'
import React, { FC } from 'react'
import { StyleProp, TextProps, TextStyle, TouchableOpacity } from 'react-native'

interface IProps extends TextProps {
	weight?: '300-italic' | '300' | '400' | '500' | '600'
	children: string | number
	style?: StyleProp<TextStyle>
	onPress: () => void
}

export const TouchableTxt: FC<IProps> = ({
	weight,
	children,
	style,
	onPress,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Txt weight={weight} children={children} style={style} />
		</TouchableOpacity>
	)
}
