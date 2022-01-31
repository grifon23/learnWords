import { $size, TouchableIcon, useTheme, Txt, PrimaryHeader } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'

import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	title: string
	letfBtnIcon: string
	onPress?: () => void
}

export const TransactionHeader: FC<IProps> = ({
	letfBtnIcon,
	title,
	onPress,
}) => {
	return (
		<PrimaryHeader
			title={{ value: title, weight: '600' }}
			leftIcon={{
				iconName: letfBtnIcon,
				size: 25,
				onPress: onPress,
			}}></PrimaryHeader>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F2F2F2',
		shadowOpacity: $size(0),
	},
})
