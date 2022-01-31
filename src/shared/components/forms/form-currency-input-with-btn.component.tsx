import { SquareBtnWithIcon, TextInput, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { KeyboardTypeOptions, StyleSheet, View, ViewStyle } from 'react-native'
import CurrencyInput from 'react-currency-input-field'

interface IProps {
	label: string
	value: number
	placeholder: string
	icon: {
		name: string
		size?: number
	}
	keyboardType?: KeyboardTypeOptions
	isPassword?: boolean
	isEmail?: boolean
	isDisabledBtn?: boolean
	style?: ViewStyle
	onFocus?: () => void
	onBlur?: () => void
	onChange: (val: number) => void
	onPressBtn: () => void
}

export const CurrencyInputWithBtn: FC<IProps> = ({
	label,
	value,
	placeholder,
	icon,
	keyboardType,
	isPassword,
	isEmail,
	isDisabledBtn,
	style,
	onFocus,
	onBlur,
	onChange,
	onPressBtn,
}) => {
	const { styles } = useTheme(createStyles)

	const prefix = '₴ '

	return (
		<View style={[styles.container, style]}>
			<CurrencyInput
				value={value}
				onValueChange={() => onChange}
				prefix={prefix}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
			/>

			<SquareBtnWithIcon
				isDisabled={isDisabledBtn}
				icon={icon}
				onPress={onPressBtn}
			/>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
		},
		input: {
			width: '75%',
		},
	})
