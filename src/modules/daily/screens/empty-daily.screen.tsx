import { IRouteParams, RouteKey, ScreenLayout } from '@/shared'
import React, { FC } from 'react'

import { DailyHeader } from '../components'
import { MissingDataComponent } from '../components'
import { ArrowDownComponent, ImageManPhoneComponent } from '../atom'
import { Alert } from 'react-native'

interface IProps extends IRouteParams {}

export const EmptyDailyScreen: FC<IProps> = ({ navigation }) => {
	return (
		<ScreenLayout
			header={
				<DailyHeader
					onPressLeftIcon={() => {}}
					onPressUser={() => navigation.navigate(RouteKey.Profile)}
					onSelectDate={() => {}}
				/>
			}>
			<MissingDataComponent
				image={<ImageManPhoneComponent />}
				title={'Поки що немає транзакцій'}
				description={
					'Ви можете додати транзакцію, натиснувши кнопку + внизу'
				}
				arrowComponent={() => <ArrowDownComponent />}
			/>
		</ScreenLayout>
	)
}
