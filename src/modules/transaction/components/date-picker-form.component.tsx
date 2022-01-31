import {
	$size,
	DateInputForm,
	Icon,
	SquareBtnWithIcon,
	SvgIcon,
	TextInput,
	useTheme,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { KeyboardTypeOptions, StyleSheet, View, ViewStyle } from 'react-native'
import { FinishButton } from '../atoms'

interface IProps {
	label: string
	value: string
	placeholder: string

	keyboardType?: KeyboardTypeOptions
	isDisabledBtn?: boolean
	style?: ViewStyle
	onFocus?: () => void
	onBlur?: () => void
	onChange: (val: string) => void
	onPressBtn: () => void
}

export const DatePickerForm: FC<IProps> = ({
	label,
	value,
	placeholder,
	keyboardType,
	isDisabledBtn,
	style,
	onFocus,
	onBlur,
	onChange,
	onPressBtn,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={styles.container}>
			<DateInputForm
				title={label}
				value={value}
				onPress={() => {}}
				onChange={onChange}
			/>
			<View style={styles.button}>
				<FinishButton onPress={onPressBtn} title={'Завершити'} />
			</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'flex-end',
			// width: '100%',
			marginHorizontal: $size(6),
		},
		searchSection: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			borderBottomWidth: 1,
		},
		searchIcon: {
			padding: 10,
		},
		input: {
			flex: 1,
			paddingRight: 10,
			paddingLeft: 0,
		},
		button: {
			// paddingTop: 10,
		},
	})
