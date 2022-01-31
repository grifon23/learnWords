import { $size, HeaderWithStripCalendar } from '@/shared'
import React, { FC } from 'react'
import { StatHeaderRightIcons } from '../atoms'

interface IProps {
	onPressLeftIcon?: () => void
	onPressUser: () => void
	onSelectDate: (date: Date) => void
}

export const StatHeader: FC<IProps> = ({ onPressUser, onSelectDate }) => {
	return (
		<HeaderWithStripCalendar
			title={{
				value: 'Статистика',
				weight: '600',
			}}
			rightComponent={() => (
				<StatHeaderRightIcons onPressUser={onPressUser} />
			)}
			onSelectDate={onSelectDate}
		/>
	)
}
