import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { BudgetCategoryBtn } from './budget-category-btn.component'

interface IProps {
	categories: any
	onSelect: (id: number) => void
}

export const SelectBudgetCategoryRowList: FC<IProps> = ({
	categories,
	onSelect,
}) => {
	const { styles } = useTheme(createStyles)

	const [selectedCategoryId, setId] = useState<number>()

	const categoriesToRender = categories.map((item, i) => (
		<BudgetCategoryBtn
			style={styles.item}
			key={`CategoryBtn---${i}`}
			// icon={item.icon}
			label={item.title}
			isActive={selectedCategoryId === i}
			onPress={() => {
				if (selectedCategoryId === i) {
					setId(null)
					onSelect(null)
					return
				}

				onSelect(i)
				setId(i)
			}}
		/>
	))

	return (
		<View style={styles.container}>
			<Txt style={styles.title} weight={'500'}>
				Оберiть категорiю
			</Txt>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.scrollView}>
				{categoriesToRender}
			</ScrollView>
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
		},
	})
