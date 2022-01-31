import { config } from '@/config'
import { Dimensions } from 'react-native'

const screenHeight = Dimensions.get('screen').height
const BASIC_HEIGHT = 812
const coff = (screenHeight / BASIC_HEIGHT) * 100

export const $size = (size: number, min?: number) => {
	const res = size * (coff / 100)
	if (min) return res > min ? res : min
	else return res
}

export const getFont = <T extends typeof config.fonts, K extends keyof T>(
	font: K,
	weight: '400' | '500' | '600' | '700',
): string => {
	return config.fonts[font as any][weight]
}
