import { ImageManWithCardComponent } from '@/modules/daily/atom'
import { MissingDataComponent } from '@/modules/daily/components'
import { loadBudgets } from '@/services/domain'
import {
	endOfMonth,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	startOfMonth,
} from '@/shared'
import { selectActiveBankAccount } from '@/store/bankAccount'
import { selectBudgets } from '@/store/budget'
import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BudgetCardList, BudgetHeader } from '../components'

interface IProps extends IRouteParams {}

export const BudgetScreen: FC<IProps> = ({ navigation }) => {
	const [selectedDate, setDate] = useState<Date>(new Date())
	const [isLoading, setLoad] = useState<boolean>(false)

	const { id: bankAccountId } = useSelector(selectActiveBankAccount)
	const onMonthPress = month => setDate(month)

	const fetchBudgets = async () => {
		setLoad(true)

		const fromDate = startOfMonth(selectedDate)
		const toDate = endOfMonth(selectedDate)

		await loadBudgets({ bankAccountId, fromDate, toDate })

		setLoad(false)
	}

	useEffect(() => {
		fetchBudgets()
	}, [selectedDate])

	const budgets = useSelector(selectBudgets)

	return (
		<ScreenLayout
			header={
				<BudgetHeader
					onPressLeftIcon={() => {}}
					onPressPlus={() =>
						navigation.navigate(RouteKey.CreateBudget, {
							date: selectedDate,
						})
					}
					onPressUser={() => navigation.navigate(RouteKey.Profile)}
					onSelectDate={onMonthPress}
				/>
			}
			paddingHorizontal={0}>
			<>
				{budgets.length ? (
					<BudgetCardList
						refreshing={isLoading}
						budgets={budgets}
						onRefresh={fetchBudgets}
					/>
				) : (
					<MissingDataComponent
						image={<ImageManWithCardComponent />}
						title={'Ще немає бюджету'}
						description={
							'Ви можете додати бюджет, натиснувши кнопку + угорі'
						}
					/>
				)}
			</>
		</ScreenLayout>
	)
}
