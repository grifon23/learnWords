import React, { FC } from 'react'
import { TabBar } from '../components'

interface IProps {
	state: { index: number; routeNames: string[] }
	navigate: (routeName: string) => void
}

export const TabBarSmart: FC<IProps> = ({
	state: { index, routeNames },
	navigate,
}) => {
	const onPressItem = (routeIndex: number, routeName: string) => {
		if (index !== routeIndex) navigate(routeName)
	}

	return (
		<TabBar
			activeIndex={index}
			onPressItem={onPressItem}
			items={routeNames}
		/>
	)
}
