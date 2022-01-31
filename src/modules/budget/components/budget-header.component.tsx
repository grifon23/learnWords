import { HeaderWithStripCalendar } from '@/shared'
import React, { FC } from 'react'
import { StatHeaderRightIcons } from '../atoms'

interface IProps {
	onPressLeftIcon?: () => void
	onPressPlus: () => void
	onPressUser: () => void
	onSelectDate: (date: Date | string) => void
}

export const BudgetHeader: FC<IProps> = ({
	onPressPlus,
	onPressUser,
	onSelectDate,
}) => {
	return (
		<HeaderWithStripCalendar
			title={{
				value: 'Бюджет',
				weight: '600',
			}}
			rightComponent={() => (
				<StatHeaderRightIcons
					onPressPlus={onPressPlus}
					onPressUser={onPressUser}
				/>
			)}
			onSelectDate={onSelectDate}
		/>
	)
}
