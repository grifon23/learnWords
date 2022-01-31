import ManAtTable from '@/assets/images/disable-man-with-table.svg'
import { $size } from '@/shared'
import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import { StyleSheet } from 'react-native'

export const ImageManAtTableComponent: FC = () => {
	return (
		<SvgXml
			style={styles.icon}
			xml={ManAtTable as any}
			width={$size(212)}
			height={$size(193)}
		/>
	)
}
const styles = StyleSheet.create({
	icon: {
		marginTop: $size(55),
		marginBottom: $size(65),
	},
})
