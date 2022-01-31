import { transactionService } from '@/services/domain'
import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TransactionTypeBtn } from '../atoms'

interface IProps {
	transactionTypes: any
	onSelect: (id: string) => void
}

export const TransactionSelect: FC<IProps> = ({
	transactionTypes,
	onSelect,
}) => {
	const { styles } = useTheme(createStyles)

	const [selectedTransactionId, setId] = useState<number>()
	// const [transactionTitle, setTransaction] = useState<string>()

	const transactionsToRender = transactionTypes.map((item, i) => (
		<TransactionTypeBtn
			style={styles.item}
			key={`TransactionType---${i}`}
			icon={item.icon}
			label={item.title}
			isActive={selectedTransactionId === i}
			onPress={() => {
				onSelect(i)
				setId(i)
				transactionService.saveTransactionType(item.icon)
			}}></TransactionTypeBtn>
	))

	return (
		<View style={styles.container}>
			<View style={styles.scrollView}>{transactionsToRender}</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(60, 50),
		},
		item: {
			marginHorizontal: $size(6, 4),
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
