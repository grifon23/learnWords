import { IBudgetsList } from '@/api/budget'
import { $size, useTheme } from '@/shared'
import React, { FC } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { BudgetRowCard } from './budget-row-card.component'

interface IProps {
	budgets: IBudgetsList
	refreshing: boolean
	onRefresh: () => void
}

export const BudgetCardList: FC<IProps> = ({
	budgets,
	refreshing,
	onRefresh,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<FlatList
			data={budgets}
			refreshing={refreshing}
			onRefresh={onRefresh}
			style={styles.container}
			contentContainerStyle={{ paddingBottom: $size(40) }}
			renderItem={({ item }) => (
				<BudgetRowCard
					style={styles.item}
					name={item.title}
					expanded={item.expanded}
					amount={item.amount}
				/>
			)}
		/>
	)
}

const createStyles = () =>
	StyleSheet.create({
		container: {
			height: '100%',
			paddingTop: $size(15, 10),
			paddingHorizontal: $size(25, 20),
		},
		item: {
			marginBottom: $size(10, 5),
		},
	})
