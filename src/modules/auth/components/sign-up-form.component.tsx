import { $size, ISignUp, TextInput, Txt, useTheme } from '@/shared'
import { TextInputWithBtn } from '@/shared/components/forms/form-text-input-with-btn.component'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	values: ISignUp
	isDisabledBtn: boolean
	errors: {
		nameInvalid: boolean
		email: boolean
		password: boolean
		emailInvalid: boolean
	}
	isLoading: boolean
	onFocus: () => void
	onBlur: () => void
	onChange: (field: keyof ISignUp, val: string) => void
	onSubmit: () => void
}

export const SignUpForm: FC<IProps> = ({
	values: { firstName, email, password },
	isDisabledBtn,
	isLoading,
	errors,
	onFocus,
	onBlur,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<>
			<TextInput
				label={"Ваше ім'я"}
				value={firstName}
				placeholder={"Ваше ім'я"}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('firstName', val)}
			/>
			{errors.nameInvalid ? (
				<Txt style={styles.warningInput}>
					{`Ім'я має бути більше 3х символів`}
				</Txt>
			) : null}
			<TextInput
				isEmail
				label={'Пошта'}
				value={email}
				placeholder={'name@domain.com'}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('email', val.trim())}
				keyboardType="email-address"
			/>
			{errors.emailInvalid ? (
				<Txt style={styles.warningInput}>
					{'Введений email не валідний'}
				</Txt>
			) : null}
			{errors.email ? (
				<Txt style={styles.warningInput}>
					{'Користувач з такою поштою вже існує'}
				</Txt>
			) : null}

			<TextInputWithBtn
				isPassword
				isLoading={isLoading}
				label={'Пароль'}
				value={password}
				placeholder={'************'}
				icon={{ name: 'next' }}
				isDisabledBtn={isDisabledBtn}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('password', val.trim())}
				onPressBtn={onSubmit}
			/>
			{errors.password ? (
				<Txt style={styles.warningInput}>
					{'Пароль повинен містити не менше ніж 6 символів'}
				</Txt>
			) : null}
		</>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		input: {
			paddingTop: $size(27, 25),
			paddingHorizontal: $size(5, 4),
		},
		warningInput: {
			alignSelf: 'flex-start',
			color: theme.auth.header.$rightTxt,
		},
	})
