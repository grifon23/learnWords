import { IBankAccount } from "@/shared";

export interface IEditedBankAccount {
    id: number
    userId: number
    accountName: string
    amount: number
    createdAt : string
    updatedAt : string
}

// export interface IBankAccounts {
//     items: IBankAccount[]
// }

export interface IBankAccounts extends Array<IBankAccount>{}

export interface IBankAccountResponse extends IBankAccount {}