import { $size, getTransactionType, TransactionsEnum, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import moment from 'moment'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatTransactionTypeInfoBtn } from '../atoms'

interface IProps {
	date: Date
	items: any
	transactionTypes: any
	onSelect: (id: string) => void
}

export const StatTransactionType: FC<IProps> = ({
	date,
	items,
	transactionTypes,
	onSelect,
}) => {
	const { styles } = useTheme(createStyles)

	const calculateTotalValue = (type: TransactionsEnum) => {
		const total = items
			.filter(
				item =>
					item.transactionType === type &&
					moment(item.date).isSame(date, 'month'),
			)
			.reduce((sum, item) => sum + Number(item.amount), 0)
		return total
	}

	const statsToRender = transactionTypes.map((item, i) => (
		<StatTransactionTypeInfoBtn
			style={styles.item}
			key={`TransactionType---${i}`}
			icon={item.type}
			label={getTransactionType(item.type)}
			value={calculateTotalValue(item.type).toFixed(2)}
			onPress={() => {}}></StatTransactionTypeInfoBtn>
	))

	return (
		<View style={styles.container}>
			<View style={styles.scrollView}>{statsToRender}</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(60, 50),
			alignItems: 'center',
		},
		item: {
			marginHorizontal: $size(11, 9),
		},
		title: {
			fontSize: $size(20, 18),
			paddingHorizontal: $size(25, 20),
			marginBottom: $size(30, 25),
		},
		scrollView: {
			overflow: 'visible',
			flexDirection: 'row',
		},
	})
