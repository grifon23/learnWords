import { SelectCategorySmart } from '@/modules/categories/smart-components'
import { transactionService } from '@/services/domain'
import {
	$size,
	CategoriesEnum,
	getTransactionType,
	IRouteParams,
	PrimaryHeader,
	RouteKey,
	ScreenLayout,
	TouchableIcon,
	useTheme,
} from '@/shared'
import { selectTransaction } from '@/store/transaction'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import { TransactionFieldComponent } from '../components'

import { CategoryFieldComponent } from '../components'

interface IProps extends IRouteParams {}

export const SelectCategoryTransactionScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const newTransaction = useSelector(selectTransaction)
	const selectedCategoryId = newTransaction.categoryId

	const onSelect = (categoryId: number) => {
		transactionService.saveTransactionCategoryId(String(categoryId))
		navigation.navigate(RouteKey.AmountTransaction)
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
						<TransactionFieldComponent
							transactionFieldName="Тип транзакції"
							value={getTransactionType(
								newTransaction.transactionType,
							)}
							image={newTransaction.transactionType}
						/>

						<CategoryFieldComponent
							categoryFieldName="Назва платежу"
							value={newTransaction.payeeName}
							icon={CategoriesEnum.NOICON}
						/>
					</View>

					<SelectCategorySmart
						selectedCategoriesIds={selectedCategoryId}
						onSelect={onSelect}
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
			flexDirection: 'column',
			height: '95%',
			justifyContent: 'space-between',
		},

		fields: { paddingHorizontal: $size(25, 20) },
	})
