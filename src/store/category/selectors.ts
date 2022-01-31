import { RootState } from '@/store'

export const selectCategories = (state: RootState) =>
	state.categories.categories

export const selectIcons = (state: RootState) => state.categories.icons
