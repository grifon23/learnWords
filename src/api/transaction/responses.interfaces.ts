import { ITransaction } from '@/shared'

export interface ITransactionResponse extends ITransaction {}

export interface ITransactions {
	items: ITransaction[]
	count: number
}
