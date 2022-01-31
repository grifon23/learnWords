import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Txt, $size, TransactionsEnum, getTransactionType } from '@/shared'

interface IProps {
	payee: string
	transactionType: TransactionsEnum
	date: string
}

export const TypeTransaction: FC<IProps> = ({
	payee,
	transactionType,
	date,
}) => {
	return (
		<>
			<View>
				<Txt style={styles.title}>Назва платежу</Txt>
				<Txt style={styles.description}>{payee}</Txt>
			</View>
			<View style={styles.content}>
				<View>
					<Txt style={styles.title}>Тип транзакції</Txt>
					<Txt style={styles.description}>
						{getTransactionType(transactionType)}
					</Txt>
				</View>
				<View style={styles.verticalLine}></View>

				<View>
					<Txt style={styles.title}>Дата</Txt>
					<Txt style={styles.description}>{date}</Txt>
				</View>
			</View>
		</>
	)
}
const styles = StyleSheet.create({
	content: {
		marginTop: $size(65),
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: $size(10),
		alignItems: 'center',
		marginBottom: $size(52),
	},
	title: {
		opacity: 0.4,
		fontSize: $size(12, 10),
		marginBottom: $size(12),
	},
	description: {
		fontWeight: 'bold',
		fontSize: $size(20, 17),
		opacity: 0.9,
		lineHeight: $size(20),
	},
	verticalLine: {
		width: $size(1),
		opacity: 0.4,
		backgroundColor: '#1C202E',
		height: $size(29),
	},
})
