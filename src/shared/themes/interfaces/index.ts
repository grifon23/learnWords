import { IAuth } from './auth.interface'
import { ITabBar } from './tab-bar.interface'
import { IColors } from './colors.interface'
import { ISharedComponents } from './shared-components.interface'
import { IBudget } from './budget.interface'
import { ICategory } from './category.interface'
import { IStat } from './stat.interface'
import { ITransaction } from './transaction.interface'

export type ThemeType = 'light' | 'dark'

export type Theme = IColors &
	ISharedComponents &
	ITabBar &
	IAuth &
	IStat &
	IBudget &
	ICategory &
	ITransaction

export type PartialTheme = Partial<Theme>
