import { $size, TransactionsEnum, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { TransactionIcon } from '../atoms'

interface IProps {
	icon: TransactionsEnum
	label: string
	isActive: boolean
	onPress: () => void
	style?: ViewStyle
}

export const TransactionTypeBtn: FC<IProps> = ({
	icon,
	label,
	isActive,
	onPress,
	style,
}) => {
	const {
		styles,
		theme: {
			budget: { transactionSelect },
		},
	} = useTheme(createStyles)

	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<TransactionIcon icon={icon} />

			<Txt style={styles.txt} weight={'600'}>
				{label}
			</Txt>
		</TouchableOpacity>
	)
}

const createStyles = ({ budget: { transactionSelect } }: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: $size(150, 140),
			height: $size(170, 160),
			padding: $size(25, 20),
			borderRadius: 20,
			backgroundColor: transactionSelect.$bg,
			justifyContent: 'space-between',
			shadowColor: transactionSelect.$shadow,
			shadowOpacity: 0.05,
			shadowRadius: 10,
		},
		txt: {
			fontSize: $size(20, 18),
		},
	})
