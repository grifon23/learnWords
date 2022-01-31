import { loadBudgets } from '@/services/domain'
import { selectActiveBankAccount } from '@/store/bankAccount/selectors'
import { useSelector } from 'react-redux'
import { ICreateBudget } from '@/api/budget'
import { createBudget } from '@/api/budget'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { endOfMonth, RouteKey, startOfMonth } from '@/shared'
import moment from 'moment'

interface createData {
	name: string
	sum: number
	category: number
}

export const useCreateBudget = () => {
	const [createData, setData] = useState<createData>({
		name: null,
		sum: null,
		category: null,
	})

	const [isDisabledBtn, setBtn] = useState<boolean>()

	useEffect(() => {
		if (!createData.name || !createData.sum || !createData.category)
			return setBtn(true)

		setBtn(false)
	}, [createData])

	const navigation = useNavigation()

	const activeBank = useSelector(selectActiveBankAccount)
	const currDate = moment().toDate()
	const startDate = startOfMonth(currDate)
	const endDate = endOfMonth(currDate)

	const onSubmit = async () => {
		const params: ICreateBudget = {
			title: createData.name,
			amount: createData.sum,
			bankAccountId: activeBank.id,
			categoryId: createData.category,
		}
		try {
			await createBudget(params)
		} catch (e) {
			console.log('error', e)
		}
		loadBudgets({
			bankAccountId: activeBank.id,
			fromDate: startDate,
			toDate: endDate,
		})
		setData({
			name: null,
			sum: null,
			category: null,
		})
		onSuccess()
	}

	const onSuccess = () => {
		navigation.navigate(RouteKey.Budget as any)
	}

	return {
		createData,
		isDisabledBtn,
		onChange: setData,
		onSubmit,
	}
}
