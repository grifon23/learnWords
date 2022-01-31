import { $size, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useLineIndicatorAnim } from '../hooks'

interface IProps {
	current: number
	target: number
}

export const BudgetCardLineIndicator: FC<IProps> = ({ current, target }) => {
	const {
		styles,
		theme: {
			stat: {
				budgetCard: { lineIndicator },
			},
		},
	} = useTheme(createStyles)

	const { indicatorBg, indicatorWidth } = useLineIndicatorAnim({
		current,
		target,
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
	stat: {
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
