import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { BudgetCardInfo, BudgetCardLineIndicator } from '../atoms'

interface IProps {
	name: string
	amount: number
	expanded: number
	style?: number
}

export const BudgetRowCard: FC<IProps> = ({
	name,
	expanded,
	amount,
	style,
}) => {
	const { styles } = useTheme(createStyles)
	return (
		<View style={[styles.container, style]}>
			<Txt style={styles.title}>{name}</Txt>

			<BudgetCardInfo
				style={styles.info}
				expanded={expanded}
				amount={amount}
			/>

			<BudgetCardLineIndicator expanded={expanded} amount={amount} />
		</View>
	)
}

const createStyles = ({
	budget: { budgetCard },
	$textSecondary,
}: PartialTheme) =>
	StyleSheet.create({
		container: {
			borderRadius: 20,
			padding: $size(20, 15),
			backgroundColor: budgetCard.$bg,
		},
		title: {
			fontSize: $size(14, 12),
			marginBottom: $size(10, 8),
			color: $textSecondary,
		},
		info: {
			marginBottom: $size(15, 13),
		},
	})
