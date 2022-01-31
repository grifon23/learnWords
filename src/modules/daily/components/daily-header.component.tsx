import { $size, CalendarModalComponent, HeaderWithStripWeek } from '@/shared'
import moment from 'moment'
import React, { FC, useState } from 'react'
import { DailyHeaderRightIcon } from '../atom'
import { CalendarIcon } from '../atom/calendarIcon'
import { TransactionCalendar } from '../atom/transactions-calendar.component'

interface IProps {
	onPressLeftIcon: () => void
	onPressUser: () => void
	onSelectDate: any
	selected: Date
	onDayPress: any
}

export const DailyHeader: FC<IProps> = ({
	onPressLeftIcon,
	onPressUser,
	onSelectDate,
	selected,
	onDayPress,
}) => {
	return (
		<>
			<HeaderWithStripWeek
				title={{
					value: 'Щоденна транзакція',
					weight: '600',
				}}
				selected={selected}
				leftComponent={() => <CalendarIcon onPress={onPressLeftIcon} />}
				rightComponent={() => (
					<DailyHeaderRightIcon onPressUser={onPressUser} />
				)}
				onDayPress={onDayPress}
				onSelectDate={onSelectDate}
			/>
		</>
	)
}
