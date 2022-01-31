import { authService } from '@/services/domain'
import {
	$size,
	BaseHeader,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC, useMemo, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { PasswordRestoreForm } from '../components'

interface IProps extends IRouteParams {}

export const PasswordRestoreScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)
	const [emailValue, setEmailValue] = useState('')
	const [error, setError] = useState(null)
	const [onFocusField, setFocus] = useState(false)

	const isDisabledBtn = useMemo(() => {
		const email = emailValue

		if (!email) return true
		else return false
	}, [emailValue])

	const onSignInBack = () => {
		navigation.goBack()
	}

	const onSubmit = async () => {
		try {
			setError(null)
			await authService.sendConfirmationCode(emailValue)
			await navigation.navigate(RouteKey.PWChange, {
				emaildata: emailValue,
			})
		} catch (e: any) {
			setError(true)
		}
	}

	return (
		<ScreenLayout
			style={styles.container}
			header={
				<BaseHeader
					title={'Відновлення паролю'}
					letfBtnIcon={'exit'}
					onPress={onSignInBack}
				/>
			}>
			<>
				<Txt weight={'600'} style={styles.title}>
					Ввведіть свою поштову скриньку від зареєстрованого аккаунту
					для відновлення паролю
				</Txt>

				<PasswordRestoreForm
					email={emailValue}
					isDisabledBtn={isDisabledBtn}
					isError={error}
					onChange={value => {
						setEmailValue(value)
						setError(false)
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onSubmit={onSubmit}></PasswordRestoreForm>
			</>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			// flex: 1,
			alignItems: 'center',
		},
		title: {
			textAlign: 'center',
			fontSize: $size(18),
			paddingTop: $size(50, 45),
			paddingBottom: $size(27, 25),
		},
	})
