import {
	$size,
	IRouteParams,
	PrimaryHeader,
	RouteKey,
	ScreenLayout,
	// SvgIcon,
	Txt,
	useTheme,
} from '@/shared'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import ManWithCard from '@/assets/images/man-with-card.svg'
import { SvgXml } from 'react-native-svg'

import { TransactionSelect } from '../components'
import { transactionTypeMock } from '../mock/transaction.mock'

import { useSelector } from 'react-redux'
import { selectActiveBankAccount } from '@/store/bankAccount'
import { transactionService } from '@/services/domain'

interface IProps extends IRouteParams {}

export const CreateTransactionScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const activeBank = useSelector(selectActiveBankAccount)

	const onPress = async () => {
		await transactionService.saveTransactionActiveBankId(
			String(activeBank.id),
		)
		await navigation.navigate(RouteKey.PayeeTransaction)
	}

	return (
		<ScreenLayout
			header={
				<PrimaryHeader
					style={styles.header}
					title={{
						value: 'Додати транзакцію',
						weight: '600',
					}}
					leftIcon={{
						iconName: 'exit',
						size: $size(22, 20),
						onPress: navigation.goBack,
					}}
				/>
			}
			paddingHorizontal={0}>
			<>
				<View style={styles.container}>
					<View style={styles.image}>
						<SvgXml
							width={$size(187)}
							height={$size(215)}
							xml={ManWithCard as any}></SvgXml>
					</View>

					<Txt style={styles.title} weight={'600'}>
						Що це за транзакція?
					</Txt>

					<TransactionSelect
						onSelect={onPress}
						transactionTypes={transactionTypeMock}
					/>
				</View>
			</>
		</ScreenLayout>
	)
}

const createStyles = () =>
	StyleSheet.create({
		header: {
			marginBottom: $size(30, 25),
		},
		container: {
			paddingHorizontal: $size(25, 20),
			paddingVertical: $size(30, 25),
		},
		image: {
			alignItems: 'center',
			paddingBottom: $size(60, 55),
		},
		title: {
			fontSize: $size(24, 20),
			opacity: 0.8,
			paddingHorizontal: $size(15, 10),
			marginBottom: $size(30, 25),
		},
	})
