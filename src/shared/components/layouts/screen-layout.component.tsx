import { useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import {
	Keyboard,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
	ViewStyle,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface IProps {
	needScroll?: boolean
	style?: ViewStyle
	paddingHorizontal?: number
	children: JSX.Element
	header?: JSX.Element
	contentContainerStyle?: ViewStyle
}

export const ScreenLayout: FC<IProps> = ({
	needScroll,
	paddingHorizontal = 25,
	children,
	style,
	header,
	contentContainerStyle,
}) => {
	const { styles } = useTheme(createStyles)

	const renderContent = () => {
		if (needScroll) {
			return (
				<KeyboardAwareScrollView
					enableAutomaticScroll={true}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps="always"
					contentContainerStyle={[
						{
							paddingHorizontal,
							flexGrow: 1,
						},
						contentContainerStyle,
					]}>
					<View style={style}>{children}</View>
				</KeyboardAwareScrollView>
			)
		} else {
			return (
				<TouchableWithoutFeedback
					onPress={Keyboard.dismiss}
					accessible={false}>
					<View
						style={{
							paddingHorizontal,
							...contentContainerStyle,
						}}>
						<View style={style}>{children}</View>
					</View>
				</TouchableWithoutFeedback>
			)
		}
	}

	return (
		<View style={styles.mainContainer}>
			{header ? header : null}

			<View style={styles.wrap}>{renderContent()}</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		mainContainer: {
			flex: 1,
			backgroundColor: theme.$layoutBg,
			overflow: 'hidden',
		},
		wrap: {
			flex: 1,
		},
	})
