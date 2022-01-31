import React, { FC, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import {
	$size,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	TouchableTxt,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { AuthHeader, SignInForm } from '../components'
import IconManWithCard from '@/assets/images/man-with-card.svg'
import { useImgAnimation } from '../hooks'
import { AnimatedSvgImg } from '../atoms'
import { authService } from '@/services/domain'

interface IProps extends IRouteParams {}

export const SignInScreen: FC<IProps> = ({ navigation }) => {
	const [fieldValues, setValues] = useState({ email: '', password: '' })
	const [error, setError] = useState(null)
	const [onFocusField, setFocus] = useState(false)
	const { styles } = useTheme(createStyles)
	const { imgStyle } = useImgAnimation(onFocusField)

	const isDisabledBtn = useMemo(() => {
		const { email, password } = fieldValues

		if (!email || !password) return true
		else return false
	}, [fieldValues])

	const submit = async () => {
		try {
			setError(null)
			await authService.signIn(fieldValues)
		} catch (e) {
			setError(true)
		}
	}

	const onRestorePassword = () => {
		navigation.navigate(RouteKey.PWRestore)
	}

	return (
		<ScreenLayout
			style={styles.container}
			needScroll
			contentContainerStyle={styles.scroll}
			header={
				<AuthHeader
					title={'Budget tracker'}
					rightBtnLabel={'Зареєструватись'}
					onPress={() => navigation.navigate(RouteKey.SignUp)}
				/>
			}>
			<>
				<AnimatedSvgImg
					animatedStyle={imgStyle}
					svg={IconManWithCard}
				/>

				<Txt weight={'600'} style={styles.title}>
					Увійдіть у свій обліковий запис
				</Txt>

				<SignInForm
					values={fieldValues}
					isDisabledBtn={isDisabledBtn}
					onChange={(field, val) => {
						setValues(prevState => {
							return {
								...prevState,
								[field]: val,
							}
						})
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onSubmit={() => submit()}
				/>

				{error ? (
					<Txt style={styles.warningInput}>
						{'Логін або пароль невірний, перевірте введені дані'}
					</Txt>
				) : null}

				<TouchableTxt onPress={onRestorePassword}>
					Забули пароль?
				</TouchableTxt>
			</>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
		},
		img: {
			marginTop: $size(40, 35),
		},
		title: {
			alignSelf: 'flex-start',
			color: theme.auth.info.$title,
			fontSize: $size(24, 22),
			marginBottom: $size(30, 25),
		},
		forgotPass: {
			color: theme.$textPrimary,
		},
		warningInput: {
			color: theme.auth.header.$rightTxt,
			textAlign: 'center',
			marginBottom: 30,
		},
		scroll: {
			paddingBottom: 50,
		},
	})
