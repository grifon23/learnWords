import { $size, Icon } from '@/shared'
import { useTheme } from '@/shared/hooks/use-theme.hook'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { TouchableOpacity, View, StyleSheet, ViewStyle } from 'react-native'

interface IProps {
	iconName?: string
	onPress: () => void
	style?: ViewStyle
}

export const CreatePromotionBtn: FC<IProps> = ({
	iconName,
	style,
	onPress,
}) => {
	const {
		styles,
		theme: {
			tabBar: { createTransactionBtn },
		},
	} = useTheme(createStyles)

	return (
		<TouchableOpacity style={[style, styles.container]} onPress={onPress}>
			<View style={styles.iconWrapper}>
				<Icon
					name={iconName}
					size={$size(30, 28)}
					color={createTransactionBtn.$icon}
				/>
			</View>
		</TouchableOpacity>
	)
}

const createStyles = (theme: PartialTheme) => {
	const {
		tabBar: { createTransactionBtn },
	} = theme

	return StyleSheet.create({
		container: {
			width: $size(65, 58),
			height: $size(65, 58),
			borderRadius: 100,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: createTransactionBtn.$border,
			shadowColor: createTransactionBtn.$borderShadow,
			shadowOpacity: 0.1,
			shadowRadius: 24,
			shadowOffset: {
				width: 0,
				height: 4,
			},
		},
		iconWrapper: {
			margin: $size(5, 3),
			width: $size(50, 48),
			height: $size(50, 48),
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 100,
			backgroundColor: createTransactionBtn.$bg,
			shadowColor: createTransactionBtn.$mainShadow,
			shadowOpacity: 0.4,
			shadowRadius: 8,
			shadowOffset: {
				width: 0,
				height: 3,
			},
		},
	})
}
