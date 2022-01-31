import { $size, Button, TextInput, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	email: string
	isDisabledBtn: boolean
	isError: boolean
	onChange: (val: string) => void
	onFocus: () => void
	onBlur: () => void
	onSubmit: () => void
}

export const PasswordRestoreForm: FC<IProps> = ({
	email,
	isDisabledBtn,
	isError,
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
				placeholder={'name@domain'}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange(val)}
				keyboardType="email-address"
			/>
			{isError ? (
				<Txt style={styles.warningInput}>
					{'Користувача з такою поштою не існує'}
				</Txt>
			) : null}

			{isDisabledBtn ? null : (
				<Button
					title={'Відновити пароль'}
					onPress={onSubmit}
					style={styles.btn}></Button>
			)}
		</>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		input: {
			paddingBottom: $size(17, 15),
		},
		btn: {
            // marginBottom: $size(150),
        },
		warningInput: {
			color: theme.auth.header.$rightTxt,
			textAlign: 'center',
			marginBottom: $size(60, 57),
		},
	})
