import React, { FC } from 'react'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { fontelloConfig } from '@/config/fontello.config'
import { ColorValue } from 'react-native'

const FontelloIcon = createIconSetFromFontello(fontelloConfig)

interface IProps {
	name: string
	size: number
	color?: ColorValue
	style?: any
}

export const Icon: FC<IProps> = props => {
	return <FontelloIcon {...props} />
}
