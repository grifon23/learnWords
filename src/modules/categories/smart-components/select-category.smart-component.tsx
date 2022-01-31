import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RouteKey } from '@/shared'

import { selectCategories } from '@/store/category'
import { useNavigation } from '@react-navigation/native'
import { SelectCategoryRowList } from '../components'

interface IProps {
	selectedCategoriesIds: number | string
	onSelect: (id: number) => void
}

export const SelectCategorySmart: FC<IProps> = ({
	onSelect,
	selectedCategoriesIds,
}) => {
	const categories = useSelector(selectCategories)

	const navigation = useNavigation()

	const onNewCategoryBtnPress = () => {
		navigation.navigate(RouteKey.NewCategory as any)
	}

	return (
		<>
			<SelectCategoryRowList
				selectedCategoriesIds={selectedCategoriesIds}
				categories={categories}
				onSelect={onSelect}
				onPress={onNewCategoryBtnPress}
			/>
		</>
	)
}
