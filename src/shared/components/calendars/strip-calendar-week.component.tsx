import React, { FC, useEffect, useMemo, useState } from 'react'
import { ScrollView, StyleSheet, ViewStyle } from 'react-native'
import moment from 'moment'
import { $size, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { StripCalendarDayItem } from './atoms'
import { getCurrentWeekDays } from '@/modules/daily/helpers/getCurrentWeeksDays'

interface IProps {
	onSelect: any
	style?: ViewStyle
	selected: any
}

export const StripCalendarWeek: FC<IProps> = ({
	onSelect,
	style,
	selected,
}) => {
	const { styles } = useTheme(createStyles)

	const [activeItemIndex, setIndex] = useState<number>()
	useEffect(() => {
		const currentDay = moment(selected).weekday()

		setIndex(currentDay)
	}, [selected])
	const currDate = moment().format('YYYY-MM-DD')
	const getCurrentWeekDays = () => {
		console.log('selected', Number(selected.substring(8)))
		const days = () => {
			const days = []
			for (let i = 0; i <= 6; i++) {
				days.push(
					moment(selected)
						.startOf('week')
						.add(i, 'days')
						.format('llll')
						.split(' ')
						.slice(0, 2),
				)
			}

			return days
		}

		const daysWeek = days()
		let weekDaysName = daysWeek.map(item => {
			const nameDay = item[0].substring(0, 2)
			const day = {
				name: nameDay,
				numberDay: item[1],
			}
			return day
		})
		return weekDaysName
	}
	const calendarItems = useMemo(() => {
		const arr = getCurrentWeekDays()

		const preparedToRender = arr.map((it, i) => {
			return (
				<StripCalendarDayItem
					style={styles.item}
					dayNumber={it.numberDay}
					dayOfWeek={it.name}
					isActive={i === activeItemIndex}
					onPress={() => {
						setIndex(i)
						onSelect(it.numberDay)
					}}
				/>
			)
		})

		return preparedToRender
	}, [activeItemIndex])

	return (
		<ScrollView
			style={[styles.container, style]}
			horizontal
			showsHorizontalScrollIndicator={false}>
			{calendarItems}
		</ScrollView>
	)
}

const createStyles = ({ calendars }: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingBottom: $size(23, 18),
			backgroundColor: calendars.$bg,
			overflow: 'hidden',
		},
		item: {
			marginHorizontal: $size(10, 8),
		},
	})
