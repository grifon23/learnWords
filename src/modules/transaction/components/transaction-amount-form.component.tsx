import { $size, TextInputWithBtn, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
	name: string
	sum: string
	isDisabledBtn: boolean
	onChange: (val: string) => void
	onSubmit: () => void
}

export const TransactionAmountForm: FC<IProps> = ({
	name,
	sum,
	isDisabledBtn,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyle)

	return (
		<View style={styles.container}>
			<TextInputWithBtn
				label={'Сума'}
				value={sum}
				placeholder={'₴ 0,000.00'}
				mask={'₴[999999990]{.}[99]'}
				icon={{ name }}
				style={styles.input}
				isDisabledBtn={isDisabledBtn}
				onChange={val => onChange(val)}
				onPressBtn={onSubmit}
				keyboardType={'numeric'}
			/>
		</View>
	)
}

const createStyle = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingBottom: $size(17, 15),
		},
		input: {
			paddingBottom: $size(27, 25),
		},
		warningInput: {
			color: theme.auth.header.$rightTxt,
			textAlign: 'center',
			marginBottom: $size(60, 57),
		},
	})
