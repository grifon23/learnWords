import React, { FC } from 'react'
import { $size, CategoriesEnum, Icon, RouteKey, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { CategoryAddBtn, CategoryBtn } from '../atom'
import { checkIconKey } from '@/modules/transaction/helpers'

interface IProps {
	selectedCategoriesIds: number | string
	categories: any
	onSelect: (id: number) => void
	onPress?: () => void
}

export const SelectCategoryRowList: FC<IProps> = ({
	selectedCategoriesIds,
	categories,
	onSelect,
	onPress,
}) => {
	const { styles } = useTheme(createStyles)
	const nav: any = useNavigation()

	const goToAdd = () => {
		nav.navigate(RouteKey.NewCategory)
	}

	const getIcon = () => {}

	const categoriesToRender = categories.map(item => (
		<CategoryBtn
			style={styles.item}
			key={`${item.id}`}
			icon={checkIconKey(item.iconKey)}
			label={item.title}
			isActive={item.id === Number(selectedCategoriesIds) ? true : false}
			onPress={() => {
				if (selectedCategoriesIds === item.id) {
					onSelect(null)
					return
				}
				onSelect(item.id)
			}}
		/>
	))

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Txt style={styles.title} weight={'500'}>
					Оберiть категорiю
				</Txt>
				<TouchableOpacity style={styles.add} onPress={() => goToAdd()}>
					<Icon name="plus" size={20} color="#000" />
				</TouchableOpacity>
			</View>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.scrollView}>
				{categoriesToRender}
				<CategoryAddBtn
					style={styles.item}
					key={`CategoryBtn---add`}
					icon={CategoriesEnum.ADDICON}
					label={'Додати'}
					onPress={onPress}
				/>
			</ScrollView>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginBottom: $size(60, 50),
			paddingHorizontal: 25,
		},
		item: {
			marginHorizontal: $size(6, 4),
		},
		header: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: $size(23, 21),
		},
		title: {
			fontSize: $size(20, 18),
			paddingHorizontal: $size(10, 8),

			opacity: 0.72,
		},
		add: {
			backgroundColor: '#fff',
			borderRadius: 100,
			padding: 5,
		},
		newCategory: {
			alignItems: 'center',
			flexDirection: 'row',
			paddingHorizontal: $size(10, 8),
			marginVertical: $size(10, 8),
			justifyContent: 'center',
		},
		newCategoryTitle: {
			marginLeft: $size(10, 8),
			opacity: 0.8,
		},
		scrollView: {
			overflow: 'visible',
		},
	})
