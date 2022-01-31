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
	current: number
	target: number
	style?: ViewStyle
}

export const BudgetCardInfo: FC<IProps> = ({ current, target, style }) => {
	const { styles } = useTheme(createStyles)

	const percent = getPercentageDiff(current, target)

	return (
		<View style={[styles.container, style]}>
			<View style={styles.leftWrap}>
				<Txt weight={'600'} style={styles.current}>
					{getFormattedMoneySum(current)}
				</Txt>

				<Txt style={styles.percent}>{`${percent}%`}</Txt>
			</View>

			<Txt style={styles.target}>{getFormattedMoneySum(target)}</Txt>
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
		target: {
			color: $textSecondary,
		},
	})
