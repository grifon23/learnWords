import { $size, useTheme } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { BudgetRowCard } from './budget-row-card.component'

interface IProps {
	budgets: any
}

export const BudgetCardList: FC<IProps> = ({ budgets }) => {
	const { styles } = useTheme(createStyles)

	return (
		<FlatList
			data={budgets}
			style={styles.container}
			renderItem={({ item }) => (
				<BudgetRowCard
					style={styles.item}
					name={item.name}
					current={item.current}
					target={item.target}
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
