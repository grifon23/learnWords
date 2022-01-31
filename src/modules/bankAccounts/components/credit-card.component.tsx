import React, { FC } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { PartialTheme } from '@/shared/themes/interfaces'
import { $size, Icon, Txt, useTheme } from '@/shared'

interface IProps {
	bankName: string
	startedAmount: string
	date: string
	isActive?: boolean
	gradientColors: string[]
	onPress: () => void
}

export const CreditCardComponent: FC<IProps> = ({
	bankName,
	startedAmount,
	date,
	gradientColors = [],
	isActive,
	onPress,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<View
			style={[styles.container, { backgroundColor: gradientColors[0] }]}>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.cardContent}>
					<View style={styles.headContent}>
						<View style={styles.bankName}>
							<Txt style={styles.titleText} weight="300-italic">
								Назва банку
							</Txt>

							<Txt style={styles.valueText} weight="600">
								{bankName}
							</Txt>
						</View>

						<View>
							<Image
								style={styles.bankImage}
								source={require('@/assets/images/bank.png')}></Image>
						</View>
					</View>
					<View
						style={
							isActive
								? styles.primaryActiveIcon
								: styles.primaryHidenIcon
						}>
						<Icon size={20} name={'done'} color="#1DBF22"></Icon>
					</View>
				</View>

				<View style={styles.cardContent}>
					<View>
						<Txt style={styles.titleText} weight="300-italic">
							Початкова сума
						</Txt>

						<Txt style={styles.valueText} weight="600">
							{startedAmount}
						</Txt>
					</View>

					<View style={styles.verticleLine} />

					<View>
						<Txt style={styles.titleText} weight="300-italic">
							Дата
						</Txt>

						<Txt style={styles.valueText} weight="600">
							{date}
						</Txt>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: $size(330),
			height: $size(190),
			borderRadius: $size(10),
		},
		cardContent: {
			height: '50%',
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
			paddingHorizontal: $size(37),
		},
		headContent: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: '100%',
			alignItems: 'center',
		},
		bankName: {
			marginTop: $size(10),
		},
		bankImage: {
			opacity: 0.1882,
			height: $size(80),
			width: $size(80),
			marginTop: $size(15),
		},
		primaryActiveIcon: {
			justifyContent: 'center',
			marginVertical: $size(15, 12),
			marginHorizontal: $size(4, 3),
			alignSelf: 'flex-start',
			borderColor: '#1DBF22',
			borderRadius: 20,
			borderWidth: 1,
			backgroundColor: 'white',
			color: 'green',
			opacity: 0.8,
		},
		primaryHidenIcon: {
			justifyContent: 'center',
			marginVertical: $size(15, 12),
			marginHorizontal: $size(4, 3),
			alignSelf: 'flex-start',
			borderRadius: 20,
			borderWidth: 1,
			opacity: 0,
		},
		titleText: {
			color: '#FFFFFF',
			opacity: 0.4,
			fontSize: $size(12),
			marginBottom: $size(6),
		},
		valueText: {
			color: '#FFFFFF',
			fontSize: $size(20),
		},
		verticleLine: {
			height: '30%',
			width: $size(0.5),
			backgroundColor: theme.$textSecondary,
		},
	})
