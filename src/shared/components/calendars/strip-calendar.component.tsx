import { $size, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import moment from 'moment'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
	Dimensions,
	LayoutRectangle,
	ScrollView,
	StyleSheet,
	ViewStyle,
} from 'react-native'
import { StripCalendarMonthItem } from './atoms'
import 'moment/locale/uk'
import _ from 'lodash'

const { width: screenWidth } = Dimensions.get('window')

interface IProps {
	onSelect: (date: Date | string) => void
	style?: ViewStyle
}

export const StripCalendar: FC<IProps> = ({ onSelect, style }) => {
	const { styles } = useTheme(createStyles)

	const [activeItem, setActiveItem] = useState<(number | string)[]>()
	const [activeNodeLayout, setNodeLayout] = useState<LayoutRectangle>()

	const scrollRef = useRef<ScrollView>(null)

	const months = moment.monthsShort()

	const currentYear = moment().year()

	const calendarData = [
		{ year: currentYear - 1, months },
		{ year: currentYear, months },
		{ year: currentYear + 1, months },
	]

	const getDate = (year: number, month: string): string =>
		moment()
			.year(year)
			.month(Number(moment().month(month).format('M')) - 1)
			.format('YYYY-MM-DD')

	useEffect(() => {
		const currentMonth = moment().month()
		setActiveItem([currentYear, months[currentMonth]])
	}, [])

	useEffect(() => {
		if (activeNodeLayout) {
			const { x, width } = activeNodeLayout

			const centerInScreenNodePos = x - screenWidth / 2 + width / 2

			scrollRef.current.scrollTo({ x: centerInScreenNodePos })
		}
	}, [activeNodeLayout])

	const calendarItems = useMemo(() => {
		const preparedToRender = calendarData.map(
			({ year, months }, yearIndex) =>
				months.map((month, monthIndex) => {
					const isActive = _.isEqual([year, month], activeItem)

					return (
						<StripCalendarMonthItem
							key={`${yearIndex}---${monthIndex}`}
							setLayout={layout => {
								if (isActive) setNodeLayout(layout)
							}}
							style={styles.item}
							year={year}
							month={month}
							isActive={isActive}
							onPress={() => {
								setActiveItem([year, month])
								onSelect(getDate(year, month))
							}}
						/>
					)
				}),
		)

		return preparedToRender
	}, [activeItem])

	return (
		<ScrollView
			style={[styles.container, style]}
			horizontal
			showsHorizontalScrollIndicator={false}
			ref={scrollRef}>
			{calendarItems}
		</ScrollView>
	)
}

const createStyles = ({ calendars }: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingBottom: $size(23, 18),
			backgroundColor: calendars.$bg,
		},
		item: {
			marginHorizontal: $size(7, 5),
		},
	})
