import { $size, TextInput, TextInputWithBtn, useTheme } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
	name: string
	sum: string
	isDisabledBtn: boolean
	onChange: (field: string, val: string) => void
	onSubmit: () => void
}

export const CreateBudgetFields: FC<IProps> = ({
	name,
	sum,
	isDisabledBtn,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyle)

	return (
		<View style={styles.container}>
			<TextInput
				value={name}
				placeholder={'Введiть назву бюджету'}
				style={styles.input}
				onChange={val => onChange('name', val)}
				// keyboardType=""
			/>
			<TextInputWithBtn
				label={'Введiть суму бюджету'}
				value={sum}
				placeholder={'₴ 0,000.00'}
				icon={{ name: 'next' }}
				style={styles.input}
				isDisabledBtn={isDisabledBtn}
				onChange={val => onChange('sum', val)}
				onPressBtn={onSubmit}
				keyboardType={'numeric'}
			/>
		</View>
	)
}

const createStyle = () =>
	StyleSheet.create({
		container: {
			paddingHorizontal: $size(25, 20),
		},
		input: {
			paddingBottom: $size(27, 25),
		},
	})
