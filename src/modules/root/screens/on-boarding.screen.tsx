import React, { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { accountService } from '@/services/domain'
import { $size, Button, IRouteParams, ScreenLayout, Txt } from '@/shared'
import { SvgXml } from 'react-native-svg'
import { OnBoardData } from '../configs'

interface IProps extends IRouteParams {}

interface OnBoardScreenProps {
	title: string
	description: string
	imagePath: string
}

export const OnBoardScreen: FC<IProps> = ({ navigation }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const onPressItem = () => {
		const nextIndex = currentIndex + 1
		if (nextIndex < OnBoardData.length) {
			setCurrentIndex(nextIndex)
		} else finish()
	}

	const finish = async () => {
		await accountService.finishOnboarding()
	}

	return (
		<ScreenLayout
			style={styles.mainContainer}
			paddingHorizontal={$size(40)}
			contentContainerStyle={styles.contentContainerStyle}>
			<View style={styles.container}>
				<View>
					<View>
						<Txt style={styles.title} weight={'600'}>
							{OnBoardData[currentIndex].title}
						</Txt>
						<Txt style={styles.description}>
							{OnBoardData[currentIndex].description}
						</Txt>
					</View>
					<View style={styles.iconsContainer}>
						{OnBoardData.map((dataitem, index) => (
							<View
								key={`${dataitem.title}---${index}`}
								style={
									index === currentIndex
										? styles.activeBoardIcon
										: styles.notActiveBoardIcon
								}></View>
						))}
					</View>
				</View>

				<SvgXml
					style={styles.image}
					xml={OnBoardData[currentIndex].imagePath as any}
					width={$size(250)}
					height={$size(250)}
				/>

				<Button
					style={styles.button}
					title={'Далі'}
					onPress={onPressItem}></Button>
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
		justifyContent: 'space-between',
		color: '#1C202E',
		alignItems: 'flex-start',
	},
	contentContainerStyle: {
		flex: 1,
		paddingHorizontal: 40,
		paddingVertical: $size(75),
	},
	title: {
		fontSize: $size(24, 18),
		lineHeight: $size(28, 24),
	},
	description: {
		opacity: 0.6,
		fontSize: $size(14, 10),
		lineHeight: $size(20, 16),

		paddingTop: $size(18),
	},
	iconsContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-start',
		marginTop: $size(35),
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
	image: {
		alignSelf: 'center',
		alignItems: 'center',
		resizeMode: 'contain',
		marginTop: $size(70),
		height: $size(280),
		width: $size(250),
	},
	button: {
		alignSelf: 'center',
		borderRadius: 10,
		marginTop: 80,
		width: 255,
		maxHeight: 48,
	},
})
