import { storageService } from '@/services/system'
import { StorageKey } from '@/shared'
import { ThemeType } from '../interfaces'

export const getThemeFromStore = async (): Promise<ThemeType | null> => {
	return (await storageService.get(StorageKey.Theme)) as ThemeType
}

export const setThemeToStorage = async (theme: ThemeType) => {
	await storageService.set(StorageKey.Theme, theme)
}
