export interface ICategory {
	id: number
	title: string
	iconKey: string | null
	userId: number | null
	createdAt: string
	updatedAt: string
	icon: IIcon | null
}

interface IIcon {
	userId: number | null
	url: string
	id: number
	createdAt: string
}

export interface ICategories extends Array<ICategory> { }
