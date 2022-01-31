import { ColorValue } from 'react-native'

export interface IStat {
	stat: {
		graph: {
			$txt: ColorValue
		}
		statTypeSelect: {
			$bg: ColorValue
			$shadow: ColorValue
			$txt: ColorValue
		}
	}
}
