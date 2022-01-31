import React, { FC } from 'react'
import { View } from 'react-native'
import {
	$size,
	CategoriesEnum,
	ITransaction,
	RouteKey,
	SvgIcon,
	TransactionsEnum,
	Txt,
	useTheme,
} from '@/shared'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PartialTheme } from '@/shared/themes/interfaces'

interface IProps {
	transaction: ITransaction
	icon: CategoriesEnum | string
	payeeName: string
	dateTransaction: string
	amount: number
}

export const TransactionPreviewRow: FC<IProps> = ({
	transaction,
	icon,
	payeeName,
	dateTransaction,
	amount,
}) => {
	const navigation = useNavigation()

	const onDetailedTransactionPress = () => {
		navigation.navigate(
			RouteKey.DetailedTransaction as never,
			{
				transaction,
			} as never,
		)
	}

	const { styles } = useTheme(createStyles)

	return (
		<TouchableOpacity onPress={onDetailedTransactionPress}>
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					{icon ? <SvgIcon icon={icon} /> : null}
				</View>
				<View style={styles.content}>
					<View>
						<View style={styles.nameTransaction}>
							<Txt style={styles.name}>{payeeName}</Txt>
						</View>
						<Txt style={styles.date}>{dateTransaction}</Txt>
					</View>
					<Txt
						weight="500"
						style={
							transaction.transactionType ===
							TransactionsEnum.Income
								? styles.income
								: styles.expense
						}>
						{amount}
					</Txt>
				</View>
			</View>
		</TouchableOpacity>
	)
}
const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			paddingTop: $size(21),
		},
		iconContainer: {
			width: $size(48),
			height: $size(48),
			backgroundColor: 'rgba(28, 32, 46, 0.04)',
			borderRadius: $size(100),
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: $size(17),
		},
		nameTransaction: {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: $size(11),
		},
		content: {
			display: 'flex',
			flexDirection: 'row',
			borderBottomWidth: $size(1),
			borderBottomColor: 'rgba(0, 0, 0, 0.12)',
			justifyContent: 'space-between',
			paddingBottom: $size(23),
			flex: 1,
		},
		name: {
			marginRight: $size(5),
			fontSize: $size(15, 12),
			color: 'rgba(28, 32, 46, 0.8)',
		},
		date: {
			color: 'rgba(28, 32, 46, 0.4)',
			fontSize: $size(11, 9),
			lineHeight: $size(10),
		},

		income: {
			fontSize: $size(15, 12),
			color: theme.transaction.$income,
		},

		expense: {
			fontSize: $size(15, 12),
			color: theme.transaction.$expense,
		},
	})
