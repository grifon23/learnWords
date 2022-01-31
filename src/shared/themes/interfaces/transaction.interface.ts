import { ColorValue } from 'react-native'

export interface ITransaction {
	transaction: {
		$expense: ColorValue
		$income: ColorValue
		total: {
			$income: ColorValue
			$expense: ColorValue
		}
	}
}
