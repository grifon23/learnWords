import { authService } from '@/services/domain'
import {
	$size,
	BaseHeader,
	Button,
	IRouteParams,
	ScreenLayout,
	TextInput,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'

interface IProps extends IRouteParams {}

export const PasswordChangeScreen: FC<IProps> = ({ route, navigation }) => {
	const { styles } = useTheme(createStyles)
	const { emaildata } = route.params

	const [fieldValues, setValues] = useState({
		email: emaildata,
		code: '',
		newPassword: '',
	})

	interface IErrorState {
		password: boolean
	}

	const defaultErrors: IErrorState = {
		password: false,
	}

	const [isCodeError, setCodeError] = useState(false)
	const [errors, setErrors] = useState<IErrorState>(defaultErrors)

	const [isLoading, setIsLoading] = useState<boolean>()

	const validateFiels = () => {
		if (fieldValues.newPassword.trim().length < 6) {
			setErrors({ ...errors, password: true })
			return
		}
		setErrors(defaultErrors)
		return true
	}

	const onSubmit = async () => {
		try {
			setIsLoading(true)

			if (!validateFiels()) return

			setCodeError(null)
			await authService.resetAndSignIn(fieldValues)
		} catch (e) {
			setCodeError(true)
		} finally {
			setIsLoading(false)
		}
	}
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 80

	return (
		<ScreenLayout
			style={styles.container}
			header={
				<BaseHeader
					title={'Зміна паролю'}
					letfBtnIcon={'back'}
					onPress={() => navigation.goBack()}
				/>
			}>
			<>
				<KeyboardAvoidingView
					style={styles.newContainer}
					behavior="position"
					keyboardVerticalOffset={keyboardVerticalOffset}>
					<Txt weight={'600'} style={styles.title}>
						Введіть перевірочний код та новий пароль
					</Txt>
					<Txt weight={'300-italic'} style={styles.title}>
						На вашу пошту вислано перевірочний код, використайте
						його та придумайте новий надійний пароль
					</Txt>

					<TextInput
						label={'Перевірочний код'}
						value={fieldValues.code}
						placeholder={'код'}
						style={styles.input}
						// onFocus={}
						// onBlur={}
						onChange={val =>
							setValues(prevState => {
								return {
									...prevState,
									code: val,
								}
							})
						}
					/>

					{isCodeError ? (
						<Txt style={styles.warningInput}>{'Невірний код'}</Txt>
					) : null}

					<TextInput
						isPassword
						label={'Введіть новий пароль'}
						value={fieldValues.newPassword}
						placeholder={'пароль'}
						style={styles.input}
						// onFocus={}
						// onBlur={}
						onChange={val =>
							setValues(prevState => {
								return {
									...prevState,
									newPassword: val,
								}
							})
						}
					/>
					{errors.password ? (
						<Txt style={styles.warningInput}>
							{'Пароль повинен містити не менше ніж 6 символів'}
						</Txt>
					) : null}

					<Button
						showLoadingIndicator={isLoading}
						title={'Змінити'}
						onPress={onSubmit}
						style={styles.btn}></Button>
				</KeyboardAvoidingView>
			</>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
		},
		title: {
			textAlign: 'center',
			fontSize: $size(18),
			paddingTop: $size(50, 45),
			paddingBottom: $size(27, 25),
		},
		input: {
			paddingBottom: $size(17, 15),
			// marginBottom: $size(60, 57),
			// marginTop: $size(30, 25)
		},
		btn: {},
		warningInput: {
			color: theme.auth.header.$rightTxt,
			textAlign: 'center',
			marginBottom: 30,
		},
	})
