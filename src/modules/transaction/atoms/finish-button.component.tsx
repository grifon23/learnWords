import React, { FC } from 'react'
import {
	ActivityIndicator,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native'
import { $size } from '@/shared/helpers'
// import { Txt } from '../elements'
import { PartialTheme } from '@/shared/themes/interfaces'
import { useTheme } from '@/shared/hooks/use-theme.hook'
import { Txt } from '@/shared'

interface ButtonProps {
	title: string
	onPress: () => void
	style?: ViewStyle
	textStyle?: TextStyle
	type?: 'primary' | 'border'
	showLoadingIndicator?: boolean
}

export const FinishButton: FC<ButtonProps> = ({ type = 'primary', ...props }) => {
	const { styles, theme } = useTheme(createStyles)

	const onPress = () => {
		if (props.showLoadingIndicator) return

		props.onPress()
	}

	const renderContent = () => {
		if (props.showLoadingIndicator) {
			return <ActivityIndicator color={theme.primaryBtn.$txt} />
		}

		return (
			<Txt
				weight={'500'}
				style={[
					styles[`${type}Txt`],
					styles.basicTxt,
					props.textStyle,
				]}>
				{props.title}
			</Txt>
		)
	}
	return (
		<TouchableOpacity
			style={[styles[`${type}Wrap`], styles.basicBtn, props.style]}
			onPress={onPress}>
			{renderContent()}
		</TouchableOpacity>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		basicBtn: {
			width: $size(100),
			height: $size(48, 45),
			borderRadius: $size(15),
			// paddingHorizontal: $size(25, 20),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
		},
		basicTxt: {
			fontSize: $size(16, 12),
		},

		primaryWrap: {
			backgroundColor: theme.primaryBtn.$bg,
		},
		primaryTxt: {
			color: theme.primaryBtn.$txt,
		},

		borderWrap: {
			backgroundColor: theme.borderBtn.$bg,
			borderColor: theme.borderBtn.$border,
			borderWidth: 1,
		},
		borderTxt: {
			color: theme.borderBtn.$txt,
		},
	})
