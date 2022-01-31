import { $size, TouchableIcon, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'

interface IProps {
	leftIcon: {
		iconName: string
		size: number
		onPress: () => void
	}
	style?: ViewStyle
	rightComponent?: () => JSX.Element
}

export const BankHeader: FC<IProps> = ({ leftIcon, style, rightComponent }) => {
	const { styles, theme } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<SafeAreaView style={styles.areaView}>
				<View style={styles.leftWrap}>
					{leftIcon ? (
						<TouchableIcon
							{...leftIcon}
							color={theme.primaryHeader.$icon}
						/>
					) : null}
					{rightComponent ? rightComponent() : null}
				</View>
			</SafeAreaView>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingTop: 25,
			paddingBottom: 15,
			paddingHorizontal: $size(22, 20),
			alignItems: 'center',
			backgroundColor: theme.primaryHeader.$bg,
			shadowColor: theme.primaryHeader.$shadow,
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			shadowOpacity: 0.1,
			shadowRadius: 20,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			zIndex: 999,
			...Platform.select({
				android: {
					borderWidth: 1,
					borderTopWidth: 0,
					borderColor: 'rgba(0,0,0,.1)',
				},
			}),
		},
		areaView: {
			width: '100%',
			justifyContent: 'space-between',
		},
		leftWrap: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	})
