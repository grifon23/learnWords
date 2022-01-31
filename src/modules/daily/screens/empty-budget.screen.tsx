import { IRouteParams, RouteKey, ScreenLayout } from '@/shared'
import React, { FC } from 'react'

import { MissingDataComponent } from '../components'
import { ImageManWithCardComponent } from '../atom'
import { BudgetHeader } from '@/modules/budget/components'

interface IProps extends IRouteParams {}

export const EmptyBudgetScreen: FC<IProps> = ({ navigation }) => {
	return (
		<ScreenLayout
			header={
				<BudgetHeader
					onPressLeftIcon={() => {}}
					onPressPlus={() =>
						navigation.navigate(RouteKey.CreateBudget)
					}
					onPressUser={() => navigation.navigate(RouteKey.Profile)}
					onSelectDate={() => {}}
				/>
			}>
			<MissingDataComponent
				image={<ImageManWithCardComponent />}
				title={'Ще немає бюджету'}
				description={
					'Ви можете додати бюджет, натиснувши кнопку + угорі'
				}
			/>
		</ScreenLayout>
	)
}
