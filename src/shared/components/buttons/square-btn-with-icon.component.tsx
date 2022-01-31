import { $size, Icon, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface IProps {
	icon: {
		name: string
		size?: number
	}
	isDisabled?: boolean
	onPress: () => void
}

export const SquareBtnWithIcon: FC<IProps> = ({
	icon: { name, size = 30 },
	isDisabled,
	onPress,
}) => {
	const {
		styles,
		theme: { squareBtnWithIcon },
	} = useTheme(createStyles)

	return (
		<TouchableOpacity
			disabled={isDisabled}
			onPress={onPress}
			style={[
				styles.container,
				{
					backgroundColor: isDisabled
						? squareBtnWithIcon.$disabled
						: squareBtnWithIcon.$bg,
				},
			]}>
			<Icon
				name={name}
				size={$size(size)}
				color={squareBtnWithIcon.$iconColor}
			/>
		</TouchableOpacity>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			padding: $size(10, 14),
			backgroundColor: theme.squareBtnWithIcon.$bg,
			borderRadius: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
