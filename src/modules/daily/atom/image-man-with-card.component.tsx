import ManWithCard from '@/assets/images/disable-man-with-card.svg'
import { $size } from '@/shared'
import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import { StyleSheet } from 'react-native'
export const ImageManWithCardComponent: FC = () => {
	return (
		<SvgXml
			style={styles.icon}
			xml={ManWithCard as any}
			width={$size(172)}
			height={$size(203)}
		/>
	)
}
const styles = StyleSheet.create({
	icon: {
		marginTop: $size(65),
		marginBottom: $size(74),
	
	}
})