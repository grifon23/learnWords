import { ICategory } from '@/shared/themes/interfaces/category.interface';
export interface IBudget {
    amount: number,
    title: string,
    bankAccountId: number,
    userId: number,
    id: number,
    createdAt: string,
    updatedAt: string,
    expanded: number
}

export interface IBudgetResponse extends IBudget {
    category: ICategory
}
export interface IBudgetsList extends Array<IBudgetResponse> { }