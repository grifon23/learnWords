import { $size, TextInput, useTheme } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { ConnectToPrivatFormEnum } from '../enums'

type PrivatBankAccount = Record<ConnectToPrivatFormEnum, string>

interface IPrivatProps {
	values: PrivatBankAccount
	errors: Partial<Record<ConnectToPrivatFormEnum, string>>
	onChange: (key: ConnectToPrivatFormEnum, val: string) => void
}

export const ConnectPrivatBankForm: FC<IPrivatProps> = ({
	values: { merchantId, password, card },
	errors,
	onChange,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<>
			<TextInput
				keyboardType="number-pad"
				label={''}
				value={merchantId}
				placeholder={'Введіть id'}
				style={styles.input}
				error={errors[ConnectToPrivatFormEnum.MERCHANT_ID]}
				onChange={val =>
					onChange(ConnectToPrivatFormEnum.MERCHANT_ID, val)
				}
			/>
			<TextInput
				label={''}
				value={password}
				placeholder={'Введіть пароль мерчанту'}
				style={styles.input}
				error={errors[ConnectToPrivatFormEnum.PASSWORD]}
				onChange={val =>
					onChange(ConnectToPrivatFormEnum.PASSWORD, val)
				}
			/>
			<TextInput
				label={''}
				mask={'[0000] [0000] [0000] [0000]'}
				keyboardType={'numeric'}
				value={card}
				placeholder={'Введіть номер карти'}
				style={styles.input}
				error={errors[ConnectToPrivatFormEnum.CARD]}
				onChange={val => onChange(ConnectToPrivatFormEnum.CARD, val)}
			/>
		</>
	)
}

const createStyles = () =>
	StyleSheet.create({
		input: {
			marginBottom: $size(17, 15),
		},
	})
