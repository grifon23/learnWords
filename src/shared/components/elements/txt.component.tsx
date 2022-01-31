import React, { FC } from 'react'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'
import { config } from '@/config'

interface IProps extends TextProps {
	weight?: '300-italic' | '300' | '400' | '500' | '600'
	children: string | number
	style?: StyleProp<TextStyle>
}

export const Txt: FC<IProps> = ({ weight = '400', ...props }) => {
	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: config.fonts.GTWalsheimPro[weight],
				},
			]}
		/>
	)
}
