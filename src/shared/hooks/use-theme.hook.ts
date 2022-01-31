import { useContext } from 'react'
import { IStyles } from '../interfaces'
import { ThemeContext } from '../themes'
import { PartialTheme } from '../themes/interfaces'

export type TStylesCreator = (theme?: PartialTheme) => IStyles | any

export const useTheme = (stylesCreator: TStylesCreator) => {
	const { theme } = useContext(ThemeContext)

	return {
		styles: stylesCreator(theme),
		theme,
	}
}
