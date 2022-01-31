import {
	$size,
	IRouteParams,
	ISignUp,
	RouteKey,
	ScreenLayout,
	TouchableTxt,
	useTheme,
} from '@/shared'
import React, { FC, useEffect, useState } from 'react'
import { AuthHeader, SignUpForm } from '../components'
import IconManWithCard from '@/assets/images/man-with-card.svg'
import { Platform, StyleSheet, View } from 'react-native'
import { PartialTheme } from '@/shared/themes/interfaces'
import { AnimatedSvgImg, SignUpInfoTxt } from '../atoms'
import { useImgAnimation } from '../hooks'
import { authService } from '@/services/domain'
import isEmail from 'validator/es/lib/isEmail'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface IProps extends IRouteParams {}

interface IErrorState {
	nameInvalid: boolean
	email: boolean
	emailInvalid: boolean
	password: boolean
}

const defaultErrors: IErrorState = {
	nameInvalid: false,
	email: false,
	emailInvalid: false,
	password: false,
}

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
	const [fieldValues, setValues] = useState<ISignUp>({
		firstName: '',
		email: '',
		password: '',
	})
	const [isDisabledBtn, setDisabled] = useState<boolean>(false)
	const [onFocusField, setFocus] = useState<boolean>(false)
	const [errors, setErrors] = useState<IErrorState>(defaultErrors)
	const { styles } = useTheme(createStyles)

	const { imgStyle } = useImgAnimation(onFocusField)

	const [isLoading, setIsLoading] = useState<boolean>()

	useEffect(() => {
		const { firstName, email, password } = fieldValues

		if (!firstName || !email || !password) setDisabled(true)
		else setDisabled(false)
	}, [fieldValues])

	const validateFiels = () => {
		if (fieldValues.firstName.trim().length < 3) {
			setErrors({ ...errors, nameInvalid: true })
			return
		}
		if (!isEmail(fieldValues.email)) {
			setErrors({ ...errors, emailInvalid: true })
			return
		}

		if (fieldValues.password.trim().length < 6) {
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
			const data = await authService.signUp(fieldValues)
			console.log({ data })
		} catch (error: any) {
			if (error.status === 409) {
				setErrors({ ...errors, email: true })
			}
		} finally {
			setIsLoading(false)
		}
	}

	const onRestorePassword = () => {
		navigation.navigate(RouteKey.PWRestore)
	}

	return (
		<ScreenLayout
			needScroll
			header={
				<AuthHeader
					title={'Budget tracker'}
					rightBtnLabel={'Увійти'}
					onPress={() => navigation.navigate(RouteKey.SignIn)}
				/>
			}>
			<KeyboardAwareScrollView
				resetScrollToCoords={{ x: 0, y: 0 }}
				scrollEnabled
				contentContainerStyle={styles.container}>
				<View style={{ alignItems: 'center' }}>
					<AnimatedSvgImg
						animatedStyle={imgStyle}
						svg={IconManWithCard}
					/>
				</View>

				<SignUpInfoTxt
					title={'Зареєструйтесь в Budget tracker'}
					info={
						'Зберігайте ваші фінансові дані на нашому сервері, щоб ви могли отримати доступ до них звідки завгодно'
					}
					style={styles.info}
				/>

				<SignUpForm
					values={fieldValues}
					onChange={(field, val) => {
						setErrors(defaultErrors)
						setValues(prevState => {
							return {
								...prevState,
								[field]: val,
							}
						})
					}}
					isDisabledBtn={isDisabledBtn}
					isLoading={isLoading}
					errors={errors}
					onSubmit={onSubmit}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
				/>

				<TouchableTxt
					style={styles.bottomBtn}
					onPress={onRestorePassword}>
					Забули пароль?
				</TouchableTxt>
			</KeyboardAwareScrollView>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
		},
		keyboardContainer: {
			paddingHorizontal: $size(8, 6),
		},

		img: {
			alignItems: 'center',
		},
		info: {},
		orTxt: {
			color: theme.$textSecondary,
			paddingBottom: $size(27, 25),
		},
		googleBtn: {
			marginBottom: $size(27, 25),
		},
		bottomBtn: {
			marginTop: 30,
			alignSelf: 'center',
		},
	})
