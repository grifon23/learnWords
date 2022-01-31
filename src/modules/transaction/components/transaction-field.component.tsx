import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { PartialTheme } from '@/shared/themes/interfaces'
import { $size, Txt, useTheme } from '@/shared'
import { TransactionIcon } from '../atoms'

interface ITransactionFieldProps {
	transactionFieldName: string
	value: string
	image: any
}

export const TransactionFieldComponent: FC<ITransactionFieldProps> = ({
	transactionFieldName,
	value,
	image,
}) => {
	const { styles } = useTheme(createStyles)
	return (
		<View style={styles.container}>
			<View style={styles.fieldcontainer}>
				<View style={styles.image}>
					<TransactionIcon icon={image} />
				</View>
				<View>
					<Txt style={styles.fieldText} weight="300">
						{transactionFieldName}
					</Txt>
					<Txt style={styles.valueText} weight="600">
						{value}
					</Txt>
				</View>
			</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'column',
			marginVertical: $size(19)
		},
		fieldcontainer: {
			flexDirection: 'row',
		},
		image: {
			justifyContent: 'center',
			marginRight: $size(20)
		},
		fieldText: {
			color: theme.$textPrimary,
			fontSize: $size(12),
			marginBottom: $size(8),
			opacity: 0.6
		},
		valueText: {
			color: '#1C202E',
			fontSize: $size(20),
		},
	})
