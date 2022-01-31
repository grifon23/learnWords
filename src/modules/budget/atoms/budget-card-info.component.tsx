import {
	$size,
	getFormattedMoneySum,
	getPercentageDiff,
	Txt,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

interface IProps {
	expanded: number
	amount: number
	style?: ViewStyle
}

export const BudgetCardInfo: FC<IProps> = ({ expanded, amount, style }) => {
	const { styles } = useTheme(createStyles)

	const percent = getPercentageDiff(amount, expanded)
	const sumCurrentFormat = getFormattedMoneySum(amount - expanded)
	return (
		<View style={[styles.container, style]}>
			<View style={styles.leftWrap}>
				<Txt weight={'600'} style={styles.current}>
					{sumCurrentFormat}
				</Txt>

				<Txt style={styles.percent}>{`${percent}%`}</Txt>
			</View>

			<Txt style={styles.amount}>{`₴${amount}`}</Txt>
		</View>
	)
}

const createStyles = ({ $textPrimary, $textSecondary }: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-end',
		},
		leftWrap: {
			flexDirection: 'row',
			alignItems: 'flex-end',
		},
		current: {
			color: $textPrimary,
			fontSize: $size(21, 18),
			marginRight: $size(5, 3),
			marginBottom: -2,
		},
		percent: {
			color: $textSecondary,
		},
		amount: {
			color: $textSecondary,
		},
	})
