import { $size, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useLineIndicatorAnim } from '../hooks'

interface IProps {
	amount: number
	expanded: number
}

export const BudgetCardLineIndicator: FC<IProps> = ({ amount, expanded }) => {
	const {
		styles,
		theme: {
			budget: {
				budgetCard: { lineIndicator },
			},
		},
	} = useTheme(createStyles)

	const { indicatorBg, indicatorWidth } = useLineIndicatorAnim({
		current: expanded,
		target: amount,
		startColor: lineIndicator.$start,
		endColor: lineIndicator.$end,
	})

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.indicatorLine,
					{
						backgroundColor: indicatorBg,
						width: indicatorWidth,
					},
				]}
			/>
		</View>
	)
}

const createStyles = ({
	budget: {
		budgetCard: { lineIndicator },
	},
}: PartialTheme) =>
	StyleSheet.create({
		container: {
			height: $size(4, 3),
			backgroundColor: lineIndicator.$bg,
			borderRadius: 3,
			overflow: 'hidden',
		},
		indicatorLine: {
			height: '100%',
		},
	})
