import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import millify from 'millify'

import {
	VictoryAxis,
	VictoryChart,
	VictoryGroup,
	VictoryLine,
	VictoryScatter,
	VictoryTheme,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from 'victory-native'
import moment from 'moment'

interface IProps {
	currentMonthData: any
	prevMonthData: any
	label: string
	value: number
	isActive?: boolean
	onPress?: () => void
	style?: ViewStyle
}

export const StatGraphComponent: FC<IProps> = ({
	label,
	value,
	currentMonthData,
	prevMonthData,
}) => {
	const { styles } = useTheme(createStyles)

	const getYs = () => {
		const allData = [...prevMonthData, ...currentMonthData]
		return allData.map(d => d.balance)
	}
	const getMinY = () => {
		return Math.min(...getYs()) > 0
			? Math.min(...getYs()) - 0.2 * Math.min(...getYs())
			: Math.min(...getYs()) + 0.2 * Math.min(...getYs())
	}
	const getMaxY = () => {
		return Math.max(...getYs()) > 0
			? Math.max(...getYs()) + 0.2 * Math.max(...getYs())
			: Math.max(...getYs()) - 0.2 * Math.max(...getYs())
	}

	return (
		<View style={styles.container}>
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
			<View>
				<VictoryChart
					minDomain={{
						y: getMinY(),
					}}
					maxDomain={{
						y: getMaxY(),
						x: 33,
					}}
					padding={{ top: 10, bottom: 50, right: 10 }}
					width={$size(320)}
					height={$size(200)}
					containerComponent={
						<VictoryVoronoiContainer
							voronoiDimension="x"
							// onActivated={value => setCursorValue(value)}
							onTouchEnd={() => {}}
						/>
					}
					theme={VictoryTheme.material}>
					<VictoryAxis
						domainPadding={{ x: [0, 20] }}
						tickCount={4}
						padding={{ left: 20 }}
						domain={[-3, 3]}
						tickValues={[1, 11, 21, 31]}
						style={graphStyles.AxisXStyle}></VictoryAxis>
					<VictoryAxis
						dependentAxis
						offsetX={60}
						tickCount={4}
						tickFormat={t => `${Math.round(t / 1000)}k`}
						style={graphStyles.AxisYStyle}
					/>
					<VictoryGroup
						color="#FF3378"
						labels={({ datum }) => `₴: ${millify(datum.balance)}`}
						data={currentMonthData}
						x="day"
						y="balance"
						labelComponent={
							<VictoryTooltip
								cornerRadius={3}
								pointerLength={4}
								dy={-6}
								flyoutWidth={40}
								flyoutStyle={{
									stroke: '#FFFFFF',
									fill: '#121829',
								}}
								style={graphStyles.TooltipStyle}
							/>
						}>
						<VictoryLine
							interpolation="natural"
							style={graphStyles.CurrentLineStyle}
							animate={{
								duration: 2000,
								onLoad: { duration: 1000 },
							}}></VictoryLine>

						<VictoryScatter
							size={({ active }) => (active ? 6 : 0)}
							style={graphStyles.DotScatterStyle}
							data={currentMonthData}
							// containerComponent={}
						/>
					</VictoryGroup>

					<VictoryLine
						interpolation="natural"
						style={graphStyles.PrevLineStyle}
						animate={{
							duration: 2000,
							onLoad: { duration: 1000 },
						}}
						data={prevMonthData.reverse()}
						x="day"
						y="balance"></VictoryLine>
				</VictoryChart>
			</View>
		</View>
	)
}

const createStyles = ({ stat }: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: $size(325, 320),
			// height: $size(325, 320),
			marginLeft: $size(25, 20),
			marginTop: $size(18, 16),

			borderRadius: 20,
			backgroundColor: stat.statTypeSelect.$bg,
			shadowColor: stat.statTypeSelect.$shadow,
			shadowOpacity: 0.05,
			shadowRadius: 10,
		},
		valuesContainer: {
			paddingTop: $size(20, 18),
			paddingLeft: $size(30, 28),
			justifyContent: 'space-between',
		},
		typetxt: {
			fontSize: $size(12, 10),
			opacity: 0.5,
		},
		txt: {
			fontSize: $size(36, 34),
			marginTop: $size(7, 6),
			color: stat.graph.$txt,
			opacity: 0.9,
		},
	})

const graphStyles = {
	AxisXStyle: {
		grid: { opacity: 0 },
		axis: { stroke: '#CCCCCC', strokeWidth: 0.2 },
		ticks: { stroke: 'grey', size: 0, opacity: 0 },
		tickLabels: {
			fontSize: 12,
			fontFamily: 'GT Walsheim Pro',
			fontWeight: '300',
			padding: 15,
			color: '#AEB1B8',
		},
	},
	AxisYStyle: {
		grid: { opacity: 0 },
		axis: { stroke: '#CCCCCC', opacity: 0 },
		ticks: { stroke: 'grey', size: 0, opacity: 0 },
		tickLabels: {
			fontSize: 12,
			fontFamily: 'GT Walsheim Pro',
			fontWeight: '300',
			color: '#AEB1B8',
		},
	},
	TooltipStyle: {
		fontSize: 8,
		fontFamily: 'GT Walsheim Pro',
		fontWeight: 700,
		fill: '#FFFFFF',
	},
	CurrentLineStyle: {
		data: {
			stroke: '#FF3378',
			strokeWidth: 3,
		},
	},
	PrevLineStyle: {
		data: {
			stroke: '#C1CEEC', // 7E93CF
			opacity: 0.2,
			strokeWidth: 4,
		},
	},
	DotScatterStyle: {
		data: {
			fill: '#FF3378',
			stroke: '#FFF',
			strokeWidth: 4,
		},
	},
}
