import {
	ScreenLayout,
	$size,
	useTheme,
	PrimaryHeader,
	TouchableIcon,
	IRouteParams,
	RouteKey,
	cardGradient,
	IBankAccount,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'

import { CreditCardComponent } from '../components'
import { bankAccountService } from '@/services/domain/bank-account.service'

import { parseDate } from '@/services/system'
import { useSelector } from 'react-redux'
import {
	selectActiveBankAccount,
	selectBankAccounts,
} from '@/store/bankAccount'

interface IProps extends IRouteParams {}

export const BankAccountsListScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const activeBank = useSelector(selectActiveBankAccount)
	const bankAccounts = useSelector(selectBankAccounts)

	const onPressActiveBank = async (item: IBankAccount) => {
		console.log(`now this account ${item.accountName} is acive`)
		await bankAccountService.setActiveBankAccount(item)
	}

	const isActiveBank = (id: number): boolean => {
		if (activeBank === null) return
		return activeBank.id === id ? true : false
	}

	return (
		<ScreenLayout
			style={styles.mainContainer}
			header={
				<PrimaryHeader
					style={styles.header}
					title={{
						value: 'Рахунки',
						weight: '600',
						style: styles.title,
					}}
					rightComponent={() => (
						<View style={styles.rightIcons}>
							<TouchableIcon
								size={22}
								iconName="plus"
								onPress={() =>
									navigation.navigate(
										RouteKey.NewBankAccount,
										{
											blockReturn: false,
										},
									)
								}
							/>
							<TouchableIcon
								size={22}
								iconName="user"
								onPress={() =>
									navigation.navigate(RouteKey.Profile)
								}
							/>
						</View>
					)}
				/>
			}
			needScroll={true}>
			<View style={styles.container}>
				{bankAccounts
					.sort(a => (isActiveBank(a.id) ? -1 : 1))
					.map(dataitem => (
						<View style={styles.card}>
							<CreditCardComponent
								key={dataitem.id}
								bankName={dataitem.accountName}
								startedAmount={'₴ ' + String(dataitem.amount)}
								date={parseDate(dataitem.createdAt, 'MM-DD-YY')}
								isActive={isActiveBank(dataitem.id)}
								gradientColors={cardGradient(dataitem.id)}
								onPress={() => onPressActiveBank(dataitem)}
							/>
						</View>
					))}
			</View>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		mainContainer: {
			alignItems: 'center',
		},
		header: {
			paddingHorizontal: $size(25),
		},
		container: {
			alignItems: 'center',
			justifyContent: 'space-between',
			marginTop: $size(22),
		},
		title: {
			color: theme.$textPrimary,
			fontSize: $size(24, 18),
			lineHeight: 28,
		},
		card: {
			paddingBottom: $size(15),
		},
		rightIcons: {
			flexDirection: 'row',
			width: '20%',
			justifyContent: 'space-between',
		},
	})
