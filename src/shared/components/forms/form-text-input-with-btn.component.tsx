import { $size, SquareBtnWithIcon, TextInput, useTheme } from '@/shared'
import React, { FC } from 'react'
import {
	ActivityIndicator,
	KeyboardTypeOptions,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'

interface IProps {
	label: string
	value: string
	placeholder: string
	icon: {
		name: string
		size?: number
	}
	keyboardType?: KeyboardTypeOptions
	isPassword?: boolean
	isEmail?: boolean
	isLoading?: boolean
	isDisabledBtn?: boolean
	mask?: string
	style?: ViewStyle
	onFocus?: () => void
	onBlur?: () => void
	onChange: (val: string) => void
	onPressBtn: () => void
}

export const TextInputWithBtn: FC<IProps> = ({
	onPressBtn,
	icon,
	isDisabledBtn,
	isLoading,
	style,
	...inputProps
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<TextInput {...inputProps} style={styles.input} />

			{isLoading ? (
				<ActivityIndicator
					style={styles.indicator}
					color={'#FF3378'}
					size={'large'}
				/>
			) : (
				<SquareBtnWithIcon
					isDisabled={isDisabledBtn}
					icon={icon}
					onPress={onPressBtn}
				/>
			)}
		</View>
	)
}

const createStyles = () =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-end',
			width: '100%',
		},
		input: {
			width: '75%',
		},
		indicator: {
			padding: $size(10, 14),
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
