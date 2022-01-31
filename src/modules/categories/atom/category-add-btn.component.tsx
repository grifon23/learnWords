import { $size, CategoriesEnum, SvgIcon, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'

interface IProps {
	icon: CategoriesEnum | null
	label: string
	onPress: () => void
	style?: ViewStyle
}

export const CategoryAddBtn: FC<IProps> = ({ icon, label, onPress, style }) => {
	const {
		styles,
		theme: {
			budget: { categoryBtn },
		},
	} = useTheme(createStyles)

	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<SvgIcon icon={icon} />

			<Txt
				style={[
					styles.txt,
					{
						color: categoryBtn.$txt,
					},
				]}
				weight={'600'}>
				{label}
			</Txt>
		</TouchableOpacity>
	)
}

const createStyles = ({ budget: { categoryBtn } }: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: $size(150, 140),
			height: $size(170, 160),
			padding: $size(25, 20),
			borderRadius: 20,
			backgroundColor: categoryBtn.$bg,
			justifyContent: 'space-between',
			shadowColor: categoryBtn.$shadow,
			shadowOpacity: 0.05,
			shadowRadius: 10,
			alignItems: 'center',
		},
		txt: {
			fontSize: $size(21, 18),
		},
	})
