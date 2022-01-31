import { $size, TextInput, TextInputWithBtn, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	values: {
		email: string
		password: string
	}
	isDisabledBtn: boolean
	onChange: (field: string, val: string) => void
	onFocus: () => void
	onBlur: () => void
	onSubmit: () => void
}

export const SignInForm: FC<IProps> = ({
	values: { email, password },
	isDisabledBtn,
	onFocus,
	onBlur,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<>
			<TextInput
				isEmail
				label={'Пошта'}
				value={email}
				placeholder={'name@domain.com'}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('email', val)}
				keyboardType="email-address"
			/>

			<TextInputWithBtn
				isPassword
				label={'Пароль'}
				value={password}
				placeholder={'************'}
				icon={{ name: 'next' }}
				style={styles.input}
				isDisabledBtn={isDisabledBtn}
				onFocus={() => {
					onFocus()
					onChange('password', '')
				}}
				onBlur={onBlur}
				onChange={val => onChange('password', val)}
				onPressBtn={onSubmit}
			/>
		</>
	)
}

const createStyles = () =>
	StyleSheet.create({
		input: {
			paddingBottom: $size(27, 25),
		},
	})
