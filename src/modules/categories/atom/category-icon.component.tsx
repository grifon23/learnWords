import { $size, CategoriesEnum, SvgIcon, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IProps {
	icon: CategoriesEnum
	isActive: boolean
	onPress: () => void
	style?: ViewStyle
}

export const CategoryIcon: FC<IProps> = ({
	icon,
	isActive,
	onPress,
	style,
}) => {
	const {
		styles,
		theme: {
			category: { categoryIcon },
		},
	} = useTheme(createStyles)

	return (
		<TouchableOpacity
			style={[styles.container, isActive && styles.active, style]}
			onPress={onPress}>
			<SvgIcon icon={icon} />
		</TouchableOpacity>
	)
}
const createStyles = ({ category: { categoryIcon } }: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(20, 18),
			borderRadius: 30,
			// backgroundColor: categoryIcon.$bg,
			justifyContent: 'space-between',
			shadowColor: categoryIcon.$shadow,
			shadowOpacity: 0.05,
			shadowRadius: 20,
		},
		active: {
			borderWidth: 2,
			borderColor: categoryIcon.$activeBorder,
		},
		txt: {
			fontSize: $size(18, 18),
		},
	})
