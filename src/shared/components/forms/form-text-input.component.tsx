import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import {
	StyleSheet,
	View,
	TextInput as RNTextInput,
	ViewStyle,
	KeyboardTypeOptions,
	TextInputProps,
} from 'react-native'
import TextInputMask from 'react-native-text-input-mask'

interface IProps {
	label?: string
	value: string
	placeholder: string
	keyboardType?: KeyboardTypeOptions
	isPassword?: boolean
	isEmail?: boolean
	error?: string
	mask?: string
	style?: ViewStyle
	onFocus?: () => void
	onBlur?: () => void
	onChange: (val: string) => void
}

export const TextInput: FC<IProps> = ({
	label,
	value,
	placeholder,
	keyboardType,
	isPassword,
	isEmail,
	error,
	mask,
	style,
	onFocus,
	onBlur,
	onChange,
}) => {
	const {
		styles,
		theme: { textInput },
	} = useTheme(createStyle)

	const textInputProp: TextInputProps = {
		style: styles.txtInput,
		value,
		placeholder,
		placeholderTextColor: textInput.$placeholder,
		secureTextEntry: isPassword,
		keyboardType,
		textContentType: isEmail ? 'emailAddress' : null,
		autoCapitalize: 'none',
		onBlur,
		onFocus,
	}

	return (
		<View style={[styles.container, style]}>
			{label ? <Txt style={styles.label}>{label}</Txt> : null}

			{mask ? (
				<TextInputMask
					{...textInputProp}
					mask={mask}
					onChangeText={(_, extracted) => onChange(extracted)}
				/>
			) : (
				<RNTextInput {...textInputProp} onChangeText={onChange} />
			)}

			{error ? <Txt style={styles.error}>{error}</Txt> : null}
		</View>
	)
}

const createStyle = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: '100%',
		},
		label: {
			color: theme.textInput.$label,
			fontSize: $size(14, 10),
		},
		txtInput: {
			fontSize: $size(23, 18),
			fontWeight: '700',
			paddingVertical: $size(7, 5),
			borderBottomWidth: 1,
			borderBottomColor: theme.textInput.$border,
			color: theme.textInput.$color,
		},
		error: {
			marginTop: $size(5),
			color: theme.$textError,
			fontSize: $size(12),
			marginLeft: $size(5),
		},
	})
