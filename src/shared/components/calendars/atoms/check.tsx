import { $size } from '@/shared'
import React, { FC } from 'react'
import { SvgXml } from 'react-native-svg'
import check from '@/assets/images/check.svg'
import { TouchableOpacity } from 'react-native'
interface IProps {
	onPress: () => void
}
export const CheckIcon: FC<IProps> = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<SvgXml
				width={$size(15, 12)}
				height={$size(11, 8)}
				xml={check as any}
			/>
		</TouchableOpacity>
	)
}
