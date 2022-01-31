import { $size, TouchableIcon, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'

interface IProps {
	title: {
		value: string
		weight?: '300-italic' | '300' | '400' | '500' | '600'
		style?: TextStyle
	}
	leftIcon?: {
		iconName: string
		size: number
		onPress: () => void
	}
	style?: ViewStyle
	rightComponent?: () => JSX.Element
	leftComponent?: () => JSX.Element
}

export const PrimaryHeader: FC<IProps> = ({
	title,
	leftIcon,
	style,
	rightComponent,
	leftComponent,
}) => {
	const { styles, theme } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<SafeAreaView style={{ width: '100%' }}>
				<View style={styles.areaView}>
					<View style={styles.leftWrap}>
						{leftIcon ? (
							<TouchableIcon
								{...leftIcon}
								color={theme.primaryHeader.$icon}
							/>
						) : null}

						{leftComponent ? leftComponent() : null}

						<Txt
							weight={title.weight || '600'}
							style={[styles.title, title.style]}>
							{title.value}
						</Txt>
					</View>

					{rightComponent ? rightComponent() : null}
				</View>
			</SafeAreaView>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingVertical: $size(15, 10),
			paddingHorizontal: $size(15, 10),
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
		},
		areaView: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingTop: Platform.select({ ios: 10, android: 20 }),
		},
		leftWrap: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		title: {
			fontSize: $size(23, 21),
			paddingLeft: $size(15, 13),
		},
	})
