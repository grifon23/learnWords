import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
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
import { BankHeader } from '../components'
import PrivatboardImage1 from '@/assets/images/bankAccount/privat-boarding-1.svg'

import { SvgXml } from 'react-native-svg'

interface IProps extends IRouteParams {}

export const PrivatBankConnectedScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const onClose = async () => navigation.navigate(RouteKey.Tab)

	const onPress = async () => navigation.navigate(RouteKey.BankAccounts)

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
				<SvgXml
					style={styles.backgroundImage}
					xml={PrivatboardImage1 as any}
					width={$size(200)}
					height={$size(200)}
				/>

				<Txt weight={'600'} style={styles.title}>
					Вітаємо!
				</Txt>

				<Txt weight={'300'} style={styles.description}>
					Ви успішно підключили приват24
				</Txt>

				<Button
					style={styles.button}
					title={`Перейти на сторінку рахунків`}
					onPress={onPress}
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
			flex: 1,
			justifyContent: 'space-evenly',
		},
		rightTxt: {
			fontSize: $size(12),
			color: theme.auth.header.$rightTxt,
		},
		backgroundImage: {
			justifyContent: 'center',
			alignSelf: 'center',
			marginTop: $size(10, 8),
			marginBottom: $size(20, 18),
		},
		title: {
			color: theme.$textPrimary,
			fontSize: $size(24, 18),
			lineHeight: 28,
			marginBottom: $size(20),
		},
		description: {
			color: theme.$textPrimary,
			opacity: 0.6,
			fontSize: $size(14, 12),
			maxWidth: $size(300),
			lineHeight: 20,
			textAlign: 'center',
			marginBottom: $size(38),
		},
		button: {
			borderRadius: 10,
			width: $size(285),
			height: $size(48),
		},
	})
