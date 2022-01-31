import { IRouteParams, RouteKey, ScreenLayout } from '@/shared'
import React, { FC } from 'react'

import { MissingDataComponent } from '../components'
import { ArrowDownComponent, ImageManAtTableComponent } from '../atom'
import { StatHeader } from '@/modules/stat/components'

interface IProps extends IRouteParams {}

export const EmptyStatScreen: FC<IProps> = ({ navigation }) => {
	return (
		<ScreenLayout
			header={
				<StatHeader
					onPressLeftIcon={() => {}}
					onPressUser={() => navigation.navigate(RouteKey.Profile)}
					onSelectDate={() => {}}
				/>
			}>
			<MissingDataComponent
				image={<ImageManAtTableComponent />}
				title={'Ви повинні мати принаймні 1 місяць транзакцій'}
				description={
					'Ви можете додати транзакцію, натиснувши кнопку + внизу'
				}
				arrowComponent={() => <ArrowDownComponent />}
			/>
		</ScreenLayout>
	)
}
