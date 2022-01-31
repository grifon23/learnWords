import React, { FC, useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import {
	IRouteParams,
	RouteKey,
	ScreenLayout,
	TransactionsEnum,
	useEventsListener,
	useFlatList,
} from '@/shared'
import { DailyHeader, MissingDataComponent } from '@/modules/daily/components'
import { TransactionsTotalAtom } from '@/modules/transaction/atoms'
import { TransactionsList } from '@/modules/transaction/components'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { TransactionCalendar } from '../atom/transactions-calendar.component'
import { ArrowDownComponent, ImageManPhoneComponent } from '../atom'
import { selectActiveBankAccount } from '@/store/bankAccount'
import { transactionApi } from '@/api'
import _ from 'lodash'

interface IProps extends IRouteParams {}

export const DailyTransaction: FC<IProps> = ({ navigation }) => {
	const idBankAccount = useSelector(selectActiveBankAccount)
	const currDate = moment().format('YYYY-MM-DD')

	const [isShow, setIsShow] = useState(false)
	const [selected, setSelected] = useState(currDate)

	const onDayPress = day => setSelected(day)

	const openCalendar = day => {
		setIsShow(true)
		setSelected(day)
	}

	const { items, setLoadParams, resetFlatList } = useFlatList({
		fetchItems: transactionApi.getTransactions,

		needInit: true,
		loadParams: {
			sort: 'DESC',
			sortField: 'id',
			bankAccountId: idBankAccount.id,
			fromDate: new Date(selected),
			toDate: new Date(selected),
		},
		limit: 50,
	})

	const getSum = (key: TransactionsEnum) => {
		const filteredItems = items.filter(
			({ transactionType }) => transactionType === key,
		)

		const sum = filteredItems.reduce(
			(acc, { amount }) => acc + Number(amount),
			0,
		)

		return sum
	}

	useEffect(() => {
		setLoadParams({
			fromDate: new Date(selected),
			toDate: new Date(selected),
			bankAccountId: idBankAccount.id,
		})
	}, [selected, idBankAccount])

	useEventsListener('onTransactionCreated', data => resetFlatList())
	useEventsListener('onTransactionUpdated', data => resetFlatList())

	return (
		<ScreenLayout
			header={
				<View>
					<DailyHeader
						onPressLeftIcon={() => openCalendar(currDate)}
						onPressUser={() =>
							navigation.navigate(RouteKey.Profile)
						}
						onSelectDate={() => {}}
						selected={selected as any}
						onDayPress={onDayPress}
					/>
					<TransactionCalendar
						value={currDate || new Date()}
						isShow={isShow}
						onClosePicker={() => setIsShow(false)}
						onDayPress={onDayPress}
						selected={selected}
					/>
				</View>
			}>
			{!_.isEmpty(items) ? (
				<ScrollView showsVerticalScrollIndicator={false}>
					<TransactionsList transactionsList={items} />

					<TransactionsTotalAtom
						income={getSum(TransactionsEnum.Income)}
						expense={getSum(TransactionsEnum.Expense)}
					/>
				</ScrollView>
			) : (
				<MissingDataComponent
					image={<ImageManPhoneComponent />}
					title={'Поки що немає транзакцій'}
					description={
						'Ви можете додати транзакцію, натиснувши кнопку + внизу'
					}
					arrowComponent={() => <ArrowDownComponent />}
				/>
			)}
		</ScreenLayout>
	)
}
