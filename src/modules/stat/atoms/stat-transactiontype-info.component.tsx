import { $size, TransactionsEnum, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { statTransactionSVG } from '@/config/stat-svg.config'

interface IProps {
	icon: TransactionsEnum
	label: string
	value: string | number
	onPress: () => void
	style?: ViewStyle
}

export const StatTransactionTypeInfoBtn: FC<IProps> = ({
	icon,
	label,
	value,
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
			<View>
				<SvgXml
					width={$size(36, 33)}
					height={$size(36, 33)}
					xml={statTransactionSVG[icon] as any}
				/>
			</View>
			<View style={styles.valuesContainer}>
				<Txt style={styles.typetxt} weight={'300'}>
					{label}
				</Txt>
				<Txt
					numberOfLines={1}
					adjustsFontSizeToFit
					style={styles.txt}
					weight={'600'}>
					{`₴${value}`}
				</Txt>
			</View>
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
		valuesContainer: {
			// padding: $size(5, 4),
			// paddingVertical: 5,
			justifyContent: 'space-between',
		},
		typetxt: {
			fontSize: $size(12, 10),
			opacity: 0.5,
		},
		txt: {
			fontSize: $size(18, 18),
			marginTop: $size(10, 9),
		},
	})
