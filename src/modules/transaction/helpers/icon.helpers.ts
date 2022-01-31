import { ICategories } from '@/api/categories/responses.interfaces'
import { CategoriesEnum } from '@/shared'

export const getSelectedIconKey = (
	selectedCategoryId: string | number,
	categories: ICategories,
): string => {
	const { iconKey: selectedIconKey } = categories.find(
		it => it.id == Number(selectedCategoryId),
	)

	if (!hasIcon(selectedIconKey)) return CategoriesEnum.NOICON

	return selectedIconKey
}

export const checkIconKey = (iconKey: string): CategoriesEnum => {
	if (hasIcon(iconKey)) return iconKey as CategoriesEnum
	else return null
}

export const hasIcon = (iconKey: string): boolean =>
	Object.values(CategoriesEnum).includes(iconKey as CategoriesEnum)
