import { $size, TextInput, useTheme, TextInputWithBtn } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	accountName: string
	amount: string
	isDisabledBtn: boolean
	onFocus: () => void
	onBlur: () => void
	onChange: (field: string, val: string) => void
	onSubmit: () => void
}

export const AddNewBankForm: FC<IProps> = ({
	accountName,
	amount,
	isDisabledBtn,
	onFocus,
	onBlur,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyles)
	console.log('value', amount)
	return (
		<>
			<TextInput
				label={"Ім'я банківського рахунку"}
				value={accountName}
				placeholder={'Назва нового рахунку'}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('accountName', val)}
			/>

			<TextInputWithBtn
				keyboardType="numeric"
				label={'Початкова сума'}
				value={amount}
				placeholder={'₴ 0,000.00'}
				mask={'₴[999999990]{.}[99]'}
				icon={{ name: 'next' }}
				isDisabledBtn={isDisabledBtn}
				style={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange('amount', val)}
				onPressBtn={onSubmit}
			/>
		</>
	)
}

const createStyles = () =>
	StyleSheet.create({
		input: {
			paddingBottom: $size(27, 25),
			paddingLeft: $size(27, 25),
			paddingRight: $size(27, 25),
		},
	})
