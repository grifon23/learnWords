import ManWithCard from '@/assets/images/man-with-card.svg'
import {
	$size,
	BaseHeader,
	Button,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	TouchableTxt,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { ConnectPrivatBankForm } from '../components'
import { useConnectToPrivat } from '../hooks'

interface IProps extends IRouteParams {}

export const ConnectPrivatScreen: FC<IProps> = ({ navigation, route }) => {
	const { styles } = useTheme(createStyles)
	const { bankId } = route.params

	const { values, errors, isDisabledBtn, setFormField, onSubmit } =
		useConnectToPrivat(bankId)

	return (
		<ScreenLayout
			style={styles.container}
			header={
				<BaseHeader
					title={'Додати ПриватБанк'}
					letfBtnIcon={'back-arrow'}
					onPress={navigation.goBack}
				/>
			}>
			<KeyboardAvoidingView
				style={styles.newContainer}
				behavior={'position'}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
				<SvgXml
					style={styles.backgroundImage}
					xml={ManWithCard as any}
					width={$size(200)}
					height={$size(200)}
				/>

				<Txt weight={'600'} style={styles.title}>
					Підключитись до ПриватБанку
				</Txt>
				<TouchableTxt
					style={styles.tip}
					onPress={() =>
						navigation.navigate(RouteKey.PrivatBoarding, {
							bankId: bankId,
						})
					}>
					Як отримати ключ?
				</TouchableTxt>

				<ConnectPrivatBankForm
					values={values}
					errors={errors}
					onChange={setFormField}
				/>

				<Button
					title={'Підключитись до ПриватБанку'}
					disabled={isDisabledBtn}
					style={styles.btn}
					onPress={onSubmit}
				/>
			</KeyboardAvoidingView>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {},
		newContainer: {
			justifyContent: 'center',
		},
		title: {
			color: theme.auth.info.$title,
			fontSize: $size(20, 18),
			alignSelf: 'center',
			marginBottom: $size(8, 6),
		},
		tip: {
			color: theme.auth.info.$title,
			fontWeight: '400',
			fontSize: $size(14, 12),
			textDecorationLine: 'underline',
			marginBottom: $size(20, 18),
			alignSelf: 'center',
		},
		backgroundImage: {
			justifyContent: 'center',
			alignSelf: 'center',
			marginTop: $size(22),
			marginBottom: $size(28),
		},
		btn: {
			marginTop: $size(35),
		},
	})
