import { categoriesApi } from '@/api'
import { ICategories } from '@/api/categories/responses.interfaces'
import { iconsApi } from '@/api/icons/requests'
import { SaveCategories, SaveIcons } from '@/store/category'
import { simpleDispatch } from '@/store/store-helpers'

const loadCategories = async () => {
	try {
		const { data } = await categoriesApi.fetchCategories()

		setCategories(data)
	} catch (e: any) {
		console.log(e)
		throw new Error()
	} finally {
	}
}

const setCategories = async (categories: ICategories) => {
	simpleDispatch(new SaveCategories({ categories }))
}

const loadIcons = async () => {
	const { data } = await iconsApi.fetchIconsReq()
	simpleDispatch(new SaveIcons(data))
}

export const categoryService = {
	loadCategories,
	setCategories,
	loadIcons,
}
