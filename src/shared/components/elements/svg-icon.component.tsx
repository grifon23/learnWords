import { categoriesSVG } from '@/config/categories-svg.config'
import { $size, CategoriesEnum, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface IProps {
	icon: any
	isActive?: boolean
	touchable?: boolean
	onPress?: () => void
	style?: ViewStyle
}

export const SvgIcon: FC<IProps> = ({ icon, touchable, isActive, style }) => {
	const { styles } = useTheme(createStyles)

	const Wrapper = (touchable ? TouchableOpacity : View) as React.ElementType

	return (
		<Wrapper
			style={[styles.wrapper, isActive && styles.activeStyles, style]}>
			<SvgXml
				width={$size(33, 30)}
				height={$size(33, 30)}
				xml={categoriesSVG[icon] as any}
			/>
		</Wrapper>
	)
}

const createStyles = ({ iconSvg }: PartialTheme) =>
	StyleSheet.create({
		wrapper: {
			width: $size(50, 45),
			height: $size(50, 45),
			borderRadius: 100,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: iconSvg.$bg,
		},
		activeStyles: {
			backgroundColor: iconSvg.$activeBg,
			borderWidth: 2,
			borderColor: iconSvg.$activeBorder,
		},
	})
