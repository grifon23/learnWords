import { $size } from '@/shared'
import { Picker } from '@react-native-picker/picker'
import React, { FC, useMemo } from 'react'
import { ViewStyle } from 'react-native'

type DataType = {
	label: string
	value: string
}

interface IProps {
	data: DataType[]
	onChange: (val: string) => void
	style?: ViewStyle
	selectedValue?: string
}

export const PickerComponent: FC<IProps> = ({
	data,
	onChange,
	selectedValue,
	style,
}) => {
	const pickerItems = useMemo(
		() => data?.map(item => <Picker.Item {...item} />),
		[data],
	)

	return (
		<Picker
			selectedValue={selectedValue}
			style={{ width: $size(250, 230), ...style }}
			onValueChange={(itemValue: string) => onChange(itemValue)}
		>
			{pickerItems}
		</Picker>
	)
}
