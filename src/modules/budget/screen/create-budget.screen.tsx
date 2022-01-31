import {
	$size,
	IRouteParams,
	PrimaryHeader,
	ScreenLayout,
	useTheme,
} from '@/shared'
import React, { FC } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { CreateBudgetSmart } from '../smart-components'

interface IProps extends IRouteParams {}

export const CreateBudgetScreen: FC<IProps> = ({ navigation: { goBack } }) => {
	const { styles } = useTheme(createStyles)

	return (
		<ScreenLayout
			header={
				<PrimaryHeader
					style={styles.header}
					title={{
						value: 'Створення бюджету',
						weight: '600',
					}}
					leftIcon={{
						iconName: 'back-arrow',
						size: $size(22, 20),
						onPress: goBack,
					}}
				/>
			}
			paddingHorizontal={0}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={80}
				behavior="position"
				style={{
					flexGrow: 1,
				}}>
				<CreateBudgetSmart />
			</KeyboardAvoidingView>
		</ScreenLayout>
	)
}

const createStyles = () =>
	StyleSheet.create({
		header: {
			marginBottom: $size(30, 25),
		},
	})
