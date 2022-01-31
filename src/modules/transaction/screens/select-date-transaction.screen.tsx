import { transactionApi } from '@/api'
import { transactionService } from '@/services/domain'
import {
	$size,
	getTransactionType,
	IRouteParams,
	PrimaryHeader,
	RouteKey,
	ScreenLayout,
	useTheme,
} from '@/shared'
import { selectCategories } from '@/store/category'

import { selectTransaction } from '@/store/transaction'
import moment from 'moment'
import React, { FC, useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import {
	AmountFieldComponent,
	CategoryFieldComponent,
	DatePickerForm,
	TransactionFieldComponent,
} from '../components'
import { getSelectedIconKey } from '../helpers'

interface IProps extends IRouteParams {}

export const SelectDateTransactionScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const [isError, setIsError] = useState<boolean>(null)

	const [date, setDate] = useState<string>()

	useEffect(() => {
		const newDate = moment(new Date()).format('YYYY-MM-DD')
		setDate(newDate)

		transactionService.saveTransactionDate(newDate)
	}, [])

	const newTransaction = useSelector(selectTransaction)
	const categories = useSelector(selectCategories)

	const selectedIconKey = getSelectedIconKey(
		newTransaction.categoryId,
		categories,
	)

	const onSubmit = async () => {
		try {
			setIsError(false)

			await transactionService.createTransaction(newTransaction)

			await navigation.navigate(RouteKey.Daily)
			await transactionService.resetTransactionData()
		} catch (error: any) {
			setIsError(true)
			Alert.alert('error creating transaction', `${error.message}`)
		}
	}

	return (
		<ScreenLayout
			header={
				<PrimaryHeader
					style={styles.header}
					title={{
						value: 'Додати транзакцію',
						weight: '600',
					}}
					leftIcon={{
						iconName: 'exit',
						size: $size(22, 20),
						onPress: navigation.goBack,
					}}
				/>
			}
			paddingHorizontal={0}>
			<>
				<View style={styles.container}>
					<View style={styles.fields}>
						<View style={styles.topfields}>
							<TransactionFieldComponent
								transactionFieldName="Тип транзакції"
								value={getTransactionType(
									newTransaction.transactionType,
								)}
								image={newTransaction.transactionType}
							/>

							<AmountFieldComponent
								amountField="Сума"
								value={`${newTransaction.currency} ${newTransaction.amount}`}></AmountFieldComponent>
						</View>

						<CategoryFieldComponent
							categoryFieldName="Назва платежу"
							value={newTransaction.payeeName}
							icon={selectedIconKey}
						/>
					</View>

					<DatePickerForm
						label={'Дата'}
						value={newTransaction.date}
						placeholder={''}
						onChange={() => {}}
						onPressBtn={onSubmit}></DatePickerForm>
				</View>
			</>
		</ScreenLayout>
	)
}

const createStyles = () =>
	StyleSheet.create({
		header: {
			marginBottom: $size(13, 10),
		},
		container: {
			paddingHorizontal: $size(25, 20),
			flexDirection: 'column',
			height: $size(400),
			justifyContent: 'space-between',
		},
		fields: {},
		topfields: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginRight: $size(30),
		},
	})
