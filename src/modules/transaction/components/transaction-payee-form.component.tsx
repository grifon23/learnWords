import { $size, Button, TextInputWithBtn, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	payeeName: string
	isDisabledBtn: boolean
	isError: boolean
	onChange: (val: string) => void
	onFocus: () => void
	onBlur: () => void
	onSubmit: () => void
}

export const TransactionPayeeForm: FC<IProps> = ({
	payeeName,
	isDisabledBtn,
	isError,
	onFocus,
	onBlur,
	onChange,
	onSubmit,
}) => {
	const { styles } = useTheme(createStyles)
	return (
		<>
			<TextInputWithBtn
				label={'Назва платежу'}
				value={payeeName}
				placeholder={'Введіть назву платежу'}
				icon={{ name: 'next' }}
				style={styles.input}
				isDisabledBtn={isDisabledBtn}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={val => onChange(val)}
				onPressBtn={onSubmit}
				keyboardType="default"
			/>
			{isError ? (
				<Txt style={styles.warningInput}>
					{'Назва занадто довга'}
				</Txt>
			) : null}
		</>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		input: {
			paddingBottom: $size(17, 15),
		},
		warningInput: {
			color: theme.auth.header.$rightTxt,
			textAlign: 'center',
			marginBottom: $size(60, 57),
		},
	})
