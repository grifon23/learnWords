import React, { FC, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import {
	$size,
	Button,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	TouchableTxt,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { parseDate } from '@/services/system'
import { BankHeader, CreditCardComponent } from '../components'
import { GradientColorsData } from '../configs'
import _ from 'lodash'

interface IProps extends IRouteParams {}

export const BankAccountCreatedScreen: FC<IProps> = ({ route, navigation }) => {
	const { styles, theme } = useTheme(createStyles)

	const { bankdata } = route.params

	const [gradientColors, setGradientColors] = useState<string[]>([])

	useEffect(() => {
		const randomGradient =
			GradientColorsData[
				Math.floor(Math.random() * GradientColorsData.length) | 0
			]
		setGradientColors(randomGradient)
	}, [])

	const onClose = async () => navigation.navigate(RouteKey.Tab)

	const onPrivatBankConnect = async () =>
		navigation.navigate(RouteKey.ConnectToPrivat, {
			bankId: bankdata.id,
		})

	const renderCreditCard = useMemo(() => {
		if (!_.isEmpty(gradientColors)) {
			return (
				<CreditCardComponent
					bankName={bankdata.accountName}
					startedAmount={'₴ ' + String(bankdata.amount)}
					date={parseDate(bankdata.createdAt, 'MM-DD-YY')}
					gradientColors={gradientColors}
					onPress={() => {}}
				/>
			)
		} else {
			return <ActivityIndicator size={'large'} color={theme.$loader} />
		}
	}, [gradientColors])

	return (
		<ScreenLayout
			style={styles.mainContainer}
			header={
				<BankHeader
					leftIcon={{
						iconName: 'exit',
						size: 25,
						onPress: onClose,
					}}
					rightComponent={() => (
						<TouchableTxt
							weight="400"
							onPress={onClose}
							children={'Пропустити'}
							style={styles.rightTxt}
						/>
					)}
				/>
			}
			needScroll={true}>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('@/assets/images/confetti.png')}
				/>

				<Txt weight={'600'} style={styles.title}>
					Вітаємо!
				</Txt>

				<Txt weight={'300'} style={styles.description}>
					Ваш банківський рахунок успішно додано в додаток
				</Txt>

				{renderCreditCard}

				<Button
					style={styles.button}
					title={`Підключитися до ПриватБанку`}
					onPress={onPrivatBankConnect}
				/>
			</View>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		mainContainer: {
			alignItems: 'center',
			height: '100%',
		},
		container: {
			alignItems: 'center',
			// flex: 1,
			justifyContent: 'space-between',
		},
		rightTxt: {
			fontSize: $size(12),
			color: theme.auth.header.$rightTxt,
		},
		image: {
			resizeMode: 'contain',
			height: $size(120),
			width: $size(120),
			marginTop: $size(19, 17),
			marginBottom: $size(46, 44),
		},
		title: {
			color: theme.$textPrimary,
			fontSize: $size(24, 18),
			lineHeight: 28,
			marginBottom: $size(18, 16),
		},
		description: {
			color: theme.$textPrimary,
			opacity: 0.6,
			fontSize: $size(14, 12),
			maxWidth: $size(300),
			lineHeight: 20,
			textAlign: 'center',
			marginBottom: $size(37, 35),
		},
		button: {
			borderRadius: 10,
			width: $size(285),
			height: $size(48),
			marginTop: $size(130, 120),
		},
	})
