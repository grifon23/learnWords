import { $size } from '@/shared'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import Line from '@/assets/images/horizontal-line.svg'

export const HorizontalLineIcon = () => {
	return (
		<SvgXml
			style={styles.icon}
			xml={Line as any}
			width={$size(200)}
			height={$size(5)}
		/>
	)
}
const styles = StyleSheet.create({
	icon: {
		backgroundColor: '#0000',
	},
})
