import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

interface IProps {
	income: number
	expense: number
}

export const TransactionsTotalAtom: FC<IProps> = ({ income, expense }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View>
			<View style={styles.container}>
				<Txt style={styles.title}>Доходи</Txt>
				<Txt
					style={[
						styles.totalPrice,
						styles.income,
					]}>{`+ ₴${income.toFixed(2)}`}</Txt>
			</View>

			<View style={styles.container}>
				<Txt style={styles.title}>Витрати</Txt>
				<Txt
					style={[
						styles.totalPrice,
						styles.expense,
					]}>{`- ₴${expense.toFixed(2)}`}</Txt>
			</View>
		</View>
	)
}

const createStyles = ({ transaction: { total } }: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: '80%',
			marginLeft: 'auto',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		title: {
			color: 'rgba(28, 32, 46, 0.5)',
			fontSize: $size(15, 12),
		},
		totalPrice: {
			color: 'rgba(18, 24, 41, 1)',
			fontWeight: 'bold',
			fontSize: $size(18, 15),
		},
		income: {
			color: total.$income,
		},
		expense: {
			color: total.$expense,
		},
	})
