import ArrowDown from '@/assets/images/arrow-down.svg'
import { $size } from '@/shared'
import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import { StyleSheet } from 'react-native'

export const ArrowDownComponent: FC = () => {
	return (
		<SvgXml
			// style={styles.image}
			xml={ArrowDown as any}
			width={$size(50)}
			height={$size(50)}
		
		/>
	)
}
