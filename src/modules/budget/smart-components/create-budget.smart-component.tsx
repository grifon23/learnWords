import { SelectCategorySmart } from '@/modules/categories/smart-components'
import { getCurrencyFormattedSum, getParseNumFromCurrency } from '@/shared'
import React, { FC } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CreateBudgetFields } from '../components'
import { useCreateBudget } from '../hooks'

export const CreateBudgetSmart: FC = () => {
	const { createData, isDisabledBtn, onChange, onSubmit } = useCreateBudget()

	return (
		<>
			<SelectCategorySmart
				selectedCategoriesIds={createData.category}
				onSelect={id =>
					onChange(prevVal => {
						return {
							...prevVal,
							category: id,
						}
					})
				}
			/>
			<>
				<CreateBudgetFields
					name={createData.name}
					sum={
						createData.sum
							? getCurrencyFormattedSum(createData.sum)
							: null
					}
					isDisabledBtn={isDisabledBtn}
					onChange={(field, val) => {
						onChange(prevVal => {
							return {
								...prevVal,
								[field]:
									field === 'sum'
										? getParseNumFromCurrency(val)
										: val,
							}
						})
					}}
					onSubmit={onSubmit}
				/>
			</>
		</>
	)
}
