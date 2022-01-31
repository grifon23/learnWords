import {
	$size,
	currentMonthGraphData,
	daysInCurrentMonth,
	fromDate,
	getPrevMonthDaysArray,
	IRouteParams,
	prevMonthGraphData,
	RouteKey,
	ScreenLayout,
	toDate,
	useFlatList,
	useTheme,
} from '@/shared'
import { selectActiveBankAccount } from '@/store/bankAccount'

import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import { StatHeader, StatTransactionType } from '../components'
import { StatGraphComponent } from '../components/stat-graph.component'
import { statTransactionType } from '../configs'

import { transactionApi } from '@/api'
import _ from 'lodash'
import { MissingDataComponent } from '@/modules/daily/components'
import {
	ArrowDownComponent,
	ImageManAtTableComponent,
} from '@/modules/daily/atom'

interface IProps extends IRouteParams {}

export const StatScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const currentBankAccount = useSelector(selectActiveBankAccount)
	const defaultbalance = Number(currentBankAccount.amount)

	const [newMonth, setNewMonth] = useState<Date>(new Date())

	const prevMonthdays = getPrevMonthDaysArray(newMonth)
	const currMonthDays = daysInCurrentMonth(newMonth)

	const selectedMonth = (date: Date) => {
		setNewMonth(date)
	}

	const { items, setLoadParams } = useFlatList({
		fetchItems: transactionApi.getTransactionsStatistic,
		needInit: false,
		loadParams: {
			fromDate: new Date(),
			toDate: new Date(),
			bankAccountId: currentBankAccount.id,
		},
		limit: 50,
	})

	useEffect(() => {
		setLoadParams({
			fromDate: fromDate(newMonth),
			toDate: toDate(newMonth),
			bankAccountId: currentBankAccount.id,
		})
	}, [newMonth, currentBankAccount])

	return (
		<ScreenLayout
			header={
				<StatHeader
					onPressUser={() => navigation.navigate(RouteKey.Profile)}
					onSelectDate={selectedMonth}
				/>
			}
			paddingHorizontal={0}>
			{!_.isEmpty(items) ? (
				<>
					<View style={styles.graphcontainer}>
						<StatGraphComponent
							currentMonthData={currentMonthGraphData(
								newMonth,
								currMonthDays,
								items,
								defaultbalance,
							)}
							prevMonthData={prevMonthGraphData(
								prevMonthdays,
								items,
								defaultbalance,
							)}
							label="Поточний баланс"
							value={currentBankAccount.amount}
							onPress={() => {}}
						/>
					</View>
					<View style={styles.container}>
						<StatTransactionType
							date={newMonth}
							items={items}
							onSelect={() => {}}
							transactionTypes={statTransactionType}
						/>
					</View>
				</>
			) : (
				<MissingDataComponent
					image={<ImageManAtTableComponent />}
					title={'Ви повинні мати принаймні 1 місяць транзакцій'}
					description={
						'Ви можете додати транзакцію, натиснувши кнопку + внизу'
					}
					arrowComponent={() => <ArrowDownComponent />}
				/>
			)}
		</ScreenLayout>
	)
}

const createStyles = () =>
	StyleSheet.create({
		graphcontainer: {},
		container: {
			paddingHorizontal: $size(25, 20),
			paddingVertical: $size(23, 21),
		},
	})
