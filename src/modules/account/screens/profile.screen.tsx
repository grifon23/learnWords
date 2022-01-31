import React, { FC, useEffect } from 'react'
import {
	ScreenLayout,
	$size,
	useTheme,
	IRouteParams,
	Txt,
	Button,
} from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { StyleSheet, View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { selectAccount } from '@/store/account'
import { accountService, authService } from '@/services/domain'

import { ProfileCardComponent, ProfileHeader } from '../components'

interface IProps extends IRouteParams {}

export const ProfileScreen: FC<IProps> = ({ navigation }) => {
	const { styles } = useTheme(createStyles)

	const profileUser = useSelector(selectAccount)

	const letter = profileUser.firstName.substring(0, 1)

	useEffect(() => {
		accountService.loadAccount()
	}, [])

	return (
		<ScreenLayout
			needScroll={true}
			header={
				<ProfileHeader
					style={styles.header}
					leftIcon={{
						iconName: 'back-arrow',
						size: 22,
						onPress: navigation.goBack,
					}}
					title={{
						value: 'Профiль',
						weight: '600',
						style: styles.title,
					}}
					rightComponent={() => (
						<ProfileCardComponent
							firstName={profileUser.firstName}
							letter={letter}
							lastName={profileUser.lastName}
							email={profileUser.email}></ProfileCardComponent>
					)}
				/>
			}>
			<>
				<View style={styles.container}>
					<View style={styles.settingContainer}>
						<View style={styles.description}>
							<Image
								style={styles.image}
								source={require('@/assets/images/settings-image.png')}></Image>
							<View style={styles.settingsText}>
								<Txt style={styles.textTitle} weight={'600'}>
									Деталi про додаток
								</Txt>
								<Txt style={styles.textStatus} weight={'300'}>
									Статус налаштування
								</Txt>
							</View>
						</View>
						<View style={styles.rightContainer}>
							<Txt style={styles.textStatus} weight={'300'}>
								v2.0.21
							</Txt>
						</View>
					</View>
					<Button
						title="Вийти"
						style={{ marginTop: 50 }}
						onPress={() => authService.logout()}
					/>
				</View>
			</>
		</ScreenLayout>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		header: {
			flexWrap: 'wrap',
			flexDirection: 'column',
			paddingBottom: $size(33),
		},
		container: {
			marginVertical: $size(16),
		},
		settingContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginVertical: $size(16),
		},
		toggleContainer: {
			// flexDirection: 'column',
			justifyContent: 'center',
		},
		description: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
		},
		settingsText: {
			marginLeft: $size(19),
			justifyContent: 'space-between',
		},
		textTitle: {
			opacity: 0.8,
		},
		textStatus: {
			color: theme.$textSecondary,
			fontSize: $size(12),
		},
		toggle: {
			backgroundColor: '#E5E5E5',
			width: $size(40),
			height: $size(16),
			borderRadius: $size(8),
			justifyContent: 'center',
		},
		toggleOn: {
			width: $size(27),
			height: $size(22),
			backgroundColor: '#FF3378',
			marginHorizontal: $size(16),
			borderRadius: $size(10),
			borderColor: '#FFFFFF',
			borderWidth: $size(5),
			marginVertical: $size(-3),
		},
		toggleOff: {
			width: $size(27),
			height: $size(22),
			backgroundColor: '#C9C9C9',
			marginHorizontal: $size(-2),
			borderRadius: $size(10),
			borderColor: '#FFFFFF',
			borderWidth: $size(5),
			marginVertical: $size(-3),
		},
		rightContainer: {
			justifyContent: 'center',
		},
		title: {
			// backgroundColor: 'red'
			// width:'100%'
		},
		txt: {
			alignContent: 'center',
			alignItems: 'center',
			alignSelf: 'center',
			backgroundColor: 'red',
		},
		line: {
			borderBottomColor: '#1C202E',
			borderBottomWidth: $size(0.4),
			opacity: 0.2,
			marginLeft: $size(66),
			maxWidth: $size(257),
		},
	})
