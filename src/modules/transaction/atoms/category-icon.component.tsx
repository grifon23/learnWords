import { categoriesSVG } from '@/config/categories-svg.config'

import { $size, CategoriesEnum, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface IProps {
	icon: CategoriesEnum
	isActive?: boolean
	touchable?: boolean
	onPress?: () => void
	style?: ViewStyle
}

export const CategoryIcon: FC<IProps> = ({ icon, style }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={[styles.wrapper, style]}>
			<SvgXml
				width={$size(36, 33)}
				height={$size(36, 33)}
				xml={categoriesSVG[icon] as any}
			/>
		</View>
	)
}

const createStyles = ({ iconSvg }: PartialTheme) =>
	StyleSheet.create({
		wrapper: {
			width: $size(36, 35),
			height: $size(36, 35),
			alignItems: 'center',
			justifyContent: 'center',
		},
	})
