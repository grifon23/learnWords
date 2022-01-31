import { ColorValue } from 'react-native'

export interface IBudget {
	budget: {
		budgetCard: {
			$bg: ColorValue
			lineIndicator: {
				$bg: ColorValue
				$start: ColorValue
				$end: ColorValue
			}
		}

		categoryBtn: {
			$bg: ColorValue
			$activeBorder: ColorValue
			$txt: ColorValue
			$activeTxt: ColorValue
			$shadow: ColorValue
		}

        transactionSelect: {
            $bg: ColorValue
            $shadow: ColorValue
            $txt: ColorValue
        }
	}
}
