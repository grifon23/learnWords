import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { TransactionPreviewRow } from '@/modules/transaction/components'
import { $size, ITransaction } from '@/shared'
import moment from 'moment'
import { checkIconKey } from '../helpers'

interface IProps {
	transactionsList: ITransaction[]
}

export const TransactionsList: FC<IProps> = ({ transactionsList }) => {
	return (
		<View style={styles.list}>
			{transactionsList.map(item => (
				<TransactionPreviewRow
					transaction={item}
					key={item.id}
					icon={checkIconKey(item?.category?.iconKey)}
					payeeName={item.payeeName}
					dateTransaction={moment(item.date).format(
						'dddd MM/DD/YYYY',
					)}
					amount={item.amount}
				/>
			))}
		</View>
	)
}
const styles = StyleSheet.create({
	list: {
		marginTop: $size(15),
		marginBottom: $size(21),
	},
})
