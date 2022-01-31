import { IRouteParams, RouteKey, ScreenLayout, Txt } from '@/shared'
import store from '@/store'
import _ from 'lodash'
import React, { FC, useEffect } from 'react'

interface IProps extends IRouteParams {}

export const EmptyScreen: FC<IProps> = ({ navigation }) => {
	useEffect(() => {
		const bankAccounts = store.getState().bankAccounts.bankAccounts

		if (_.isEmpty(bankAccounts)) {
			setTimeout(() => {
				navigation.navigate(RouteKey.NewBankAccount, {
					blockReturn: true,
				})
			}, 0)
		} else {
			setTimeout(() => {
				navigation.navigate(RouteKey.Tab)
			}, 0)
		}
	}, [navigation])

	return (
		<ScreenLayout>
			<></>
		</ScreenLayout>
	)
}
