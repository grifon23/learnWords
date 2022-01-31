import React, { FC, useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
	$size,
	Button,
	// Image,
	IRouteParams,
	RouteKey,
	ScreenLayout,
	TouchableIcon,
} from '@/shared'
import { SvgXml } from 'react-native-svg'

import { PrivatBoardingDescriptionComponent } from '../components'

import { PrivatOnBoardImageData } from '../configs'
import {
	PrivatStepFive,
	PrivatStepFour,
	PrivatStepOne,
	PrivatStepThree,
	PrivatStepTwo,
} from '../atoms'

export const PrivatBoardData = [
	{
		title: 'Авторизація',
		description: <PrivatStepOne />,
	},
	{
		title: 'Створення мерчанту',
		description: <PrivatStepTwo />,
	},
	{
		title: 'Заповнення даних',
		description: <PrivatStepThree />,
	},
	{
		title: 'Завершення налаштувань',
		description: <PrivatStepFour />,
	},
	{
		title: 'Вітаємо! Ви це зробили',
		description: <PrivatStepFive />,
	},
]

interface IProps extends IRouteParams {}

export const PrivatBoardScreen: FC<IProps> = ({ navigation, route }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const onPressItem = () => {
		const nextIndex = currentIndex + 1
		if (nextIndex < PrivatBoardData.length) {
			setCurrentIndex(nextIndex)
		} else onClose()
	}

	const onPressItemBack = () => {
		const prevIndex = currentIndex - 1
		if (prevIndex >= 0) {
			setCurrentIndex(prevIndex)
		} else onClose()
	}

	const { bankId } = route.params

	const onClose = async () =>
		await navigation.navigate(RouteKey.ConnectToPrivat, {
			bankId: bankId,
		})

	return (
		<ScreenLayout
			style={styles.mainContainer}
			paddingHorizontal={$size(40)}
			contentContainerStyle={styles.contentContainerStyle}>
			<View style={styles.container}>
				<View style={styles.icons}>
					<TouchableIcon
						size={22}
						iconName="back-arrow"
						onPress={onPressItemBack}
					/>
					<TouchableIcon
						size={22}
						iconName="exit"
						onPress={onClose}
					/>
				</View>
				<View style={styles.content}>
					<View>
						<PrivatBoardingDescriptionComponent
							title={PrivatBoardData[currentIndex].title}
							descriptionComponent={
								PrivatBoardData[currentIndex].description
							}
						/>
						{PrivatOnBoardImageData[currentIndex].pngPath ? (
							<View style={styles.pngimage}>
								<Image
									style={styles.image}
									source={
										PrivatOnBoardImageData[currentIndex]
											.pngPath
									}
								/>
							</View>
						) : null}
					</View>

					{PrivatOnBoardImageData[currentIndex].svgPath ? (
						<SvgXml
							style={styles.image}
							xml={
								PrivatOnBoardImageData[currentIndex]
									.svgPath as any
							}
							width={$size(320)}
							height={$size(250)}
						/>
					) : null}
					<View style={styles.navigationContainer}>
						<View style={styles.iconsContainer}>
							{PrivatBoardData.map((dataitem, index) => (
								<View
									key={`${dataitem.title}---${index}`}
									style={
										index === currentIndex
											? styles.activeBoardIcon
											: styles.notActiveBoardIcon
									}></View>
							))}
						</View>

						<Button
							style={styles.button}
							title={
								currentIndex === PrivatBoardData.length - 1
									? 'Готово'
									: 'Наступний крок'
							}
							onPress={onPressItem}></Button>
					</View>
				</View>
			</View>
		</ScreenLayout>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignSelf: 'center',
		color: '#1C202E',
	},
	contentContainerStyle: {
		flex: 1,
		paddingHorizontal: 40,
		paddingVertical: $size(35),
	},
	icons: {
		flexDirection: 'row',
		// backgroundColor: 'red',
		alignItems: 'center',
		maxWidth: $size(327, 325),
		justifyContent: 'space-between',
	},
	content: {
		marginTop: $size(30, 28),
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: $size(327, 325),
	},
	navigationContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		marginBottom: $size(30, 28),
	},
	iconsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		marginBottom: $size(30, 28),
	},
	activeBoardIcon: {
		width: $size(10),
		height: $size(4),
		backgroundColor: 'rgba(255, 51, 120, 1)',
		marginHorizontal: 3,
		borderRadius: 2,
	},
	notActiveBoardIcon: {
		width: $size(4),
		height: $size(4),
		backgroundColor: 'rgba(0, 0, 0, 0.08)',
		marginHorizontal: 3,
		borderRadius: 2,
	},
	pngimage: {
		marginTop: $size(15, 13),
		alignSelf: 'center',
	},
	image: {
		alignSelf: 'center',
		resizeMode: 'contain',
		maxHeight: $size(280),
		maxWidth: $size(327, 325),
	},
	button: {
		alignSelf: 'center',
		borderRadius: 10,
		width: 255,
		maxHeight: 48,
	},
})
