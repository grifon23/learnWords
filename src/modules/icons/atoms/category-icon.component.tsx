import React, { FC } from 'react'
import { StyleSheet, ViewStyle, TouchableOpacity, Image } from 'react-native'
import { $size, SvgIcon, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { DefaultIconKey } from '../config'

interface IProps {
	icon?: DefaultIconKey
	url?: string
	isActive: boolean
	onPress: () => void
	style?: ViewStyle
}

export const CategoryIcon: FC<IProps> = ({
	icon,
	url,
	isActive,
	onPress,
	style,
}) => {
	const { styles } = useTheme(createStyles)

	const renderIcon = () => {
		if (url) {
			return (
				<Image
					source={{ uri: url }}
					resizeMode="contain"
					style={styles.img}
				/>
			)
		} else {
			return <SvgIcon icon={icon} />
		}
	}

	return (
		<TouchableOpacity
			style={[styles.container, isActive && styles.active, style]}
			onPress={url ? () => {} : onPress}>
			{renderIcon()}
		</TouchableOpacity>
	)
}
const createStyles = ({ category: { categoryIcon }, iconSvg }: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(20, 18),
			borderRadius: 30,
			justifyContent: 'space-between',
			shadowColor: categoryIcon.$shadow,
			shadowOpacity: 0.05,
			shadowRadius: 20,
			overflow: 'hidden',
			borderWidth: 2,
			borderColor: iconSvg.$bg,
		},
		active: {
			borderColor: categoryIcon.$activeBorder,
		},
		txt: {
			fontSize: $size(18, 18),
		},
		img: {
			width: $size(50, 45),
			height: $size(50, 45),
			borderRadius: 100,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: iconSvg.$bg,
		},
	})
