import { Theme } from '../interfaces'
import { authColors } from './auht.light'
import { budgetColors } from './budget.light'
import { categoryColors } from './category.light'
import { colors } from './colors.light'
import { sharedComponentsColors } from './shared-components.light'
import { statColors } from './stat.light'
import { tabBarColors } from './tab-bar.light'
import { transactionColors } from './transaction.light'

export const lightTheme: Partial<Theme> = {
	...colors,
	...sharedComponentsColors,
	...tabBarColors,
	...authColors,
	...statColors,
	...budgetColors,
	...categoryColors,
	...transactionColors
}
