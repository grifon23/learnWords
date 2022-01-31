import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { $size } from '@/shared/helpers'
import { RouteKey } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { useTheme } from '@/shared/hooks/use-theme.hook'
import { CreatePromotionBtn, TabBarItem } from '../atoms'
import { icons } from '../configs'

const labels = {
	[RouteKey.Daily]: 'Щоденно',
	[RouteKey.Stat]: 'Статистика',
	[RouteKey.BankAccounts]: 'Рахунки',
	[RouteKey.Budget]: 'Бюджети',
}

interface IProps {
	items: string[]
	onPressItem: (index: number, routeName: string) => void
	activeIndex: number
}
export const TabBar: FC<IProps> = ({ items, activeIndex, onPressItem }) => {
	const { styles } = useTheme(createStyles)

	const itemsToRender = items.map((route, index) => {
		console.log(route)
		const preparedRouteName = labels[route]
		const isActive = activeIndex === index

		if (route === RouteKey.CreateTransaction) {
			return (
				<CreatePromotionBtn
					key={`${route}---${index}`}
					iconName={icons[route]}
					style={styles.createPromotionBtn}
					onPress={() => onPressItem(index, route)}
				/>
			)
		}

		return (
			<TabBarItem
				key={`${route}---${index}`}
				iconName={icons[route]}
				label={preparedRouteName}
				isActive={isActive}
				onPress={() => onPressItem(index, route)}
			/>
		)
	})

	return <View style={styles.container}>{itemsToRender}</View>
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			backgroundColor: theme.$layoutBg,
			// backgroundColor: '#000',
			paddingBottom: $size(20),
			paddingHorizontal: $size(20),
		},
		createPromotionBtn: {
			bottom: $size(30, 25),
		},
	})
