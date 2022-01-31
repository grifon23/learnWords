import React, { useEffect, useState } from 'react'
import { getThemeFromStore, setThemeToStorage } from './helpers'
import { Theme, ThemeType } from './interfaces'
import { lightTheme } from './light'
import { darkTheme } from './dark'
import { useColorScheme } from 'react-native'

const themeDict = {
	light: lightTheme,
	dark: darkTheme,
}

export const getTheme = (theme: ThemeType = 'light') => {
	return themeDict[theme]
}

export const ThemeContext = React.createContext<{
	theme: Partial<Theme>
	themeTitle: ThemeType
	changeTheme: any
	toggleTheme: () => void
}>({
	theme: null,
	themeTitle: null,
	changeTheme: (type: ThemeType) => {},
	toggleTheme: () => {},
})

export const ThemeProvider: React.FC = props => {
	const [theme, setTheme] = useState<ThemeType>()
	const isDarkMode = false //useColorScheme() === 'dark'

	useEffect(() => {
		getInitialTheme()
	}, [])

	useEffect(() => {
		saveTheme(theme)
	}, [theme])

	const getInitialTheme = async () => {
		const theme = await getThemeFromStore()

		if (!theme) {
			setTheme(isDarkMode ? 'dark' : 'light')
			return
		}
		setTheme(theme)
	}

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	const saveTheme = async (type: ThemeType) => {
		if (theme) await setThemeToStorage(type)
	}

	return (
		<ThemeContext.Provider
			value={{
				theme: getTheme(theme),
				changeTheme: setTheme,
				toggleTheme,
				themeTitle: theme,
			}}
			{...props}
		/>
	)
}
