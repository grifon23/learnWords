import { bankAccountService } from '@/services/domain'
import {
	$size,
	BaseHeader,
	getCurrencyFormattedSum,
	getParseNumFromCurrency,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { useRoute } from '@react-navigation/native'
import React, { FC, useEffect, useState } from 'react'
import {
	Alert,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
} from 'react-native'

import { AddNewBankForm } from '../components'

interface IProps extends IRouteParams {}

export const AddNewBankAccountScreen: FC<IProps> = ({ navigation }) => {
	const [fieldValues, setValues] = useState<{
		accountName: string
		amount: number
	}>({ accountName: '', amount: 0 })
	const [isDisabledBtn, setDisabled] = useState<boolean>(false)
	const [onFocusField, setFocus] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(null)

	const route: any = useRoute()
	console.log(route)
	const blockReturn = route.params['blockReturn']

	useEffect(() => {
		const { accountName, amount } = fieldValues

		if (!accountName || !amount) setDisabled(true)
		else setDisabled(false)
	}, [fieldValues])

	const { styles } = useTheme(createStyles)

	const onSubmit = async () => {
		try {
			setIsError(false)
			const data = await bankAccountService.saveBankAccount(fieldValues)

			setValues({ accountName: '', amount: 0 })
			onSuccess(data)
			return data
		} catch (error: any) {
			setIsError(true)
			Alert.alert('error creating acc', `${error.message}`)
		}
	}

	const onSuccess = data => {
		navigation.navigate(RouteKey.BankAccountCreated, {
			bankdata: data,
		})
	}

	const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 90

	return (
		<ScreenLayout
			style={styles.container}
			header={
				<BaseHeader
					title={'Додати рахунок'}
					letfBtnIcon={!blockReturn ? 'back-arrow' : null}
					onPress={navigation.goBack}
				/>
			}>
			<>
				<KeyboardAvoidingView
					style={styles.newContainer}
					behavior="position"
					keyboardVerticalOffset={keyboardVerticalOffset}>
					<ImageBackground
						style={styles.backgroundImage}
						source={require('@/assets/images/bank.png')}>
						<Image
							style={styles.iconImage}
							source={require('@/assets/images/plus-icon.png')}
						/>
					</ImageBackground>

					<Txt weight={'600'} style={styles.title}>
						Додати основний банківський рахунок
					</Txt>

					<AddNewBankForm
						// values={fieldValues}
						accountName={fieldValues.accountName}
						amount={fieldValues.amount}
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
						onSubmit={onSubmit}
					/>
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
		newContainer: {
			display: 'flex',
		},

		title: {
			color: theme.auth.info.$title,
			fontSize: $size(24, 22),
			marginBottom: $size(144, 144),
			marginLeft: $size(30),
			maxWidth: $size(264),
		},

		backgroundImage: {
			justifyContent: 'center',
			alignSelf: 'center',
			marginTop: $size(62),
			marginBottom: $size(38),

			height: $size(140),
			width: $size(140),
		},
		iconImage: {
			position: 'absolute',

			top: $size(-18),
			right: $size(-35),

			height: $size(90),
			width: $size(90),
		},
	})
