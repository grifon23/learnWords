import { transactionService } from '@/services/domain'
import {
	$size,
	CurrencyEnum,
	IRouteParams,
	PrimaryHeader,
	RouteKey,
	ScreenLayout,
	useTheme,
} from '@/shared'
import { selectCategories } from '@/store/category'
import { selectTransaction } from '@/store/transaction'
import React, { FC, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import {
	CategoryFieldComponent,
	TransactionAmountForm,
	TransactionFieldComponent,
} from '../components'
import { getSelectedIconKey } from '../helpers'

interface IProps extends IRouteParams {}

export const AmountInputTransactionScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const [amountValue, setAmountValue] = useState<number>()

	const isDisabledBtn = useMemo(() => {
		const amount = amountValue

		if (!amount) return true
		else return false
	}, [amountValue])

	const onSubmit = async () => {
		await transactionService.saveTransactionAmount(String(amountValue))
		await transactionService.saveTransactionCurrencyType(CurrencyEnum.UAH)
		await navigation.navigate(RouteKey.DateTransaction)
	}

	const newTransaction = useSelector(selectTransaction)
	const categories = useSelector(selectCategories)

	const selectedIconKey = getSelectedIconKey(
		newTransaction.categoryId,
		categories,
	)

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
						<TransactionFieldComponent
							transactionFieldName="Тип транзакції"
							value={newTransaction.transactionType}
							image={newTransaction.transactionType}
						/>

						<CategoryFieldComponent
							categoryFieldName="Назва платежу"
							value={newTransaction.payeeName}
							icon={selectedIconKey}
						/>
					</View>

					<TransactionAmountForm
						name={'next'}
						sum={`₴ ${amountValue}`}
						isDisabledBtn={isDisabledBtn}
						onChange={value => setAmountValue(Number(value))}
						onSubmit={onSubmit}
					/>
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
			height: $size(400),
			justifyContent: 'space-between',
		},
	})
