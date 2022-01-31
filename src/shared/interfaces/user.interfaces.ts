import { EUserRole, EUserStatus } from '../enums'

export interface IUser {
	id: number

	role: EUserRole

	status: EUserStatus

	info?: IUsersInfo

	email: string

	phoneNumber: string

	isSelected?: boolean

	
}

export interface IUsersInfo {
	userId: number

	firstName: string

	lastName: string

	middleName?: string

	position: string

	dateOfBirth: string

	avatarUrl?: string

	isActivedApp: boolean

	createdAt: string

	updatedAt: string

	personalPhoneNumber: string

	innerPhoneNumber: string
}

export interface IShortUser {
	id: number
	firstName?: string
	fullName?: string
	dateOfBirth?: string
	avatarUrl?: string
	position?: string
}
export interface IAccount extends IUser {
	firstName: string
	lastName: string

}
