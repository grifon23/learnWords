import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { CategoryIcon } from '../atom'

interface IProps {
	categories: any
	onSelect: (id: string) => void
}

export const SelectCategoryList: FC<IProps> = ({ categories, onSelect }) => {
	const { styles } = useTheme(createStyles)

	const [selectedCategoryId, setId] = useState<number>()

	const categoriesToRender = categories.map((item, i) => (
		<CategoryIcon
			style={styles.item}
			key={`CategoryIcon---${i}`}
			icon={item.icon}
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
			<Txt style={styles.title} weight={'300'}>
				Оберiть іконку
			</Txt>
			<ScrollView
				showsVerticalScrollIndicator={false}
				scrollEnabled={true}>
				<View style={styles.categoriesView}>{categoriesToRender}</View>
			</ScrollView>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(40, 35),
		},
		item: {
			marginHorizontal: $size(6, 4),
		},
		title: {
			fontSize: $size(12, 10),
			paddingHorizontal: $size(20, 18),
			marginBottom: $size(13, 10),
			color: theme.$textSecondary,
		},
		categoriesView: {
			justifyContent: 'center',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
	})
