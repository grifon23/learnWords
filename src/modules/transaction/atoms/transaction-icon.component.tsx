
import { transactionSVG } from '@/config/transaction-svg.config'

import { $size, TransactionsEnum, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface IProps {
	icon: TransactionsEnum
	isActive?: boolean
	touchable?: boolean
	onPress?: () => void
	style?: ViewStyle
}

export const TransactionIcon: FC<IProps> = ({ icon, style }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View
			style={[styles.wrapper, style]}>
			<SvgXml
				width={$size(36, 33)}
				height={$size(36, 33)}
				xml={transactionSVG[icon] as any}
			/>
		</View>
	)
}

const createStyles = ({ iconSvg }: PartialTheme) =>
	StyleSheet.create({
		wrapper: {
			width: $size(36, 35),
			height: $size(36, 35),
			alignItems: 'center',
			justifyContent: 'center'
		},
	})
