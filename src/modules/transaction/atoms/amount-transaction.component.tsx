import React, { FC } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Txt, Button, $size } from '@/shared'

interface IProps {
	amount: number
	onEdit: () => void
}

export const AmountTransaction: FC<IProps> = ({ amount, onEdit }) => {
	return (
		<View style={styles.container}>
			<View>
				<Txt style={styles.title}>Сума</Txt>
				<Txt style={styles.price}>{`₴${amount}`}</Txt>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					title={'Редагувати'}
					type="border"
					style={styles.button}
					textStyle={{ color: '#FF3378' }}
					onPress={onEdit}
				/>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		opacity: 0.4,
		fontSize: $size(12, 10),
		marginBottom: $size(12),
	},
	price: {
		fontWeight: 'bold',
		fontSize: $size(36, 33),
		lineHeight: $size(38),
		opacity: 0.9,
	},
	buttonContainer: {
		width: $size(96, 94),
	},
	button: {
		borderColor: '#FF3378',
	},
})
