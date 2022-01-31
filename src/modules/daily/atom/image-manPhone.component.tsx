import NoTrasaction from '@/assets/images/disable-man-with-phone.svg'
import { $size } from '@/shared'
import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import { StyleSheet } from 'react-native'
export const ImageManPhoneComponent: FC = () => {
	return (
		<SvgXml
			style={styles.icon}
			xml={NoTrasaction as any}
			width={$size(172)}
			height={$size(238)}
		/>
	)
}
const styles = StyleSheet.create({
	icon: {
		marginTop: $size(49),
		marginBottom:$size(55)
	}
})