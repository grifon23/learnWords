import { $size, Icon, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

interface IProps {
	iconName: string
	label: string
	isActive: boolean
	onPress: () => void
}

export const TabBarItem: FC<IProps> = ({
	iconName,
	label,
	isActive,
	onPress,
}) => {
	const {
		styles,
		theme: { tabBar },
	} = useTheme(createStyles)

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon
				name={iconName}
				size={$size(25, 23)}
				style={styles.icon}
				color={isActive ? tabBar.$iconActive : tabBar.$iconDisabled}
			/>

			<Txt
				style={[
					styles.txt,
					{
						color: isActive
							? tabBar.$txtActive
							: tabBar.$txtDisabled,
					},
				]}>
				{label}
			</Txt>
		</TouchableOpacity>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			position: 'relative',
			alignItems: 'center',
			flex: 1,
			maxWidth: '20%',
		},
		icon: {
			marginBottom: $size(9, 7),
		},
		txt: {
			// top: $size(35, 30),
			// backgroundColor: 'red',
			// width: $size(60, 55),
			textAlign: 'center',
			fontSize: $size(10, 8),
		},
	})
