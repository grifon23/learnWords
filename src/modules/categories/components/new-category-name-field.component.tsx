import { $size, TextInput, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
	name: string
	onChange: (val: string) => void
}

export const NewCategoryFieldComponent: FC<IProps> = ({ name, onChange }) => {
	const { styles } = useTheme(createStyle)

	return (
		<View style={styles.container}>
			<Txt weight="300" style={styles.lable}>{`Ім'я категорії`}</Txt>
			<TextInput
				value={name}
				placeholder={'Назва категорії тут'}
				style={styles.input}
				onChange={val => onChange(val)}
			/>
		</View>
	)
}

const createStyle = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			marginTop: $size(34, 32),
			paddingHorizontal: $size(20, 15),
		},
		lable: {
			color: theme.$textSecondary,
		},
		input: {
			paddingBottom: $size(30, 25),
		},
	})
