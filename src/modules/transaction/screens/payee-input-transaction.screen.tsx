import { transactionService } from '@/services/domain'
import {
	$size,
	IRouteParams,
	PrimaryHeader,
	RouteKey,
	ScreenLayout,
	useTheme,
	getTransactionType,
} from '@/shared'
import { selectTransaction } from '@/store/transaction'
import React, { FC, useMemo, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { TransactionFieldComponent, TransactionPayeeForm } from '../components'

interface IProps extends IRouteParams {}

export const PayeeInputTransactionScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const [payeeValue, setPayeeValue] = useState('')
	const [error, setError] = useState(null)
	const [onFocusField, setFocus] = useState(false)

	const isDisabledBtn = useMemo(() => {
		const payee = payeeValue

		if (!payee) return true
		else return false
	}, [payeeValue])

	const onSubmit = async () => {
		await transactionService.saveTransactionPayee(payeeValue)
		await navigation.navigate(RouteKey.CategoryTransaction)
	}

	const newTransaction = useSelector(selectTransaction)

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
					<TransactionFieldComponent
						transactionFieldName="Тип транзакції"
						value={getTransactionType(
							newTransaction.transactionType,
						)}
						image={newTransaction.transactionType}
					/>

					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? null : 'height'}
						style={{ flex: 1, justifyContent: 'center' }}
						keyboardVerticalOffset={
							Platform.OS === 'ios' ? null : -50
						}>
						<TransactionPayeeForm
							payeeName={payeeValue}
							isDisabledBtn={isDisabledBtn}
							isError={false}
							onChange={value => {
								setPayeeValue(value)
							}}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							onSubmit={onSubmit}
						/>
					</KeyboardAvoidingView>
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
			height: $size(500),
			justifyContent: 'space-between',
		},
	})
