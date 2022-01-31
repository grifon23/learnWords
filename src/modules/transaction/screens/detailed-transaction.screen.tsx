import {
	$size,
	getCurrencyFormattedSum,
	getParseNumFromCurrency,
	IRouteParams,
	ITransaction,
	ScreenLayout,
} from '@/shared'
import React, { FC, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
	TransactionAmountForm,
	TransactionHeader,
} from '@/modules/transaction/components'
import DashedLine from 'react-native-dashed-line'
import { AmountTransaction, TypeTransaction } from '@/modules/transaction/atoms'
import { transactionService } from '@/services/domain'

interface IProps extends IRouteParams {
	route: {
		params: {
			transaction: ITransaction
		}
	}
}

export const DetailedTransaction: FC<IProps> = ({ route, navigation }) => {
	const { transaction } = route.params
	const { amount, payeeName, transactionType, date, id, bankAccountId } =
		transaction

	const [isEdit, setIsEdit] = useState(false)
	const [amountValue, setAmountValue] = useState<number>(amount)

	const isDisabledBtn = useMemo(() => {
		const amount = amountValue

		if (!amount) return true
		else return false
	}, [amountValue])

	const onEdit = () => {
		setIsEdit(!isEdit)
	}

	const onEditedSave = async () => {
		setIsEdit(!isEdit)

		await transactionService.updateTransaction({
			transactionId: id,
			amount: amountValue,
			bankAccountId,
		})

		navigation.goBack()
	}

	return (
		<ScreenLayout
			header={
				<TransactionHeader
					title={'Транзакція'}
					letfBtnIcon={'back-arrow'}
					onPress={navigation.goBack}
				/>
			}>
			<View style={styles.container}>
				<TypeTransaction
					payee={payeeName}
					transactionType={transactionType}
					date={date}
				/>
				<View style={styles.line}>
					<DashedLine
						dashLength={7}
						dashThickness={0.5}
						dashGap={7}
						dashColor={'#1C202E'}
						dashStyle={{ opacity: 0.4 }}
					/>
				</View>
				{isEdit ? (
					<TransactionAmountForm
						name={'done'}
						sum={String(amountValue)}
						isDisabledBtn={isDisabledBtn}
						onChange={value => {
							setAmountValue(Number(value))
						}}
						onSubmit={onEditedSave}
					/>
				) : (
					<AmountTransaction amount={amountValue} onEdit={onEdit} />
				)}
			</View>
		</ScreenLayout>
	)
}
const styles = StyleSheet.create({
	container: {
		paddingTop: $size(64),
		paddingLeft: $size(35),
		paddingRight: $size(25),
	},
	line: {
		marginBottom: $size(38),
	},
})
