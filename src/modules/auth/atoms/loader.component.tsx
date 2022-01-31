import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

interface IProps {
	title: string
	isLoading: boolean
	style?: ViewStyle
}

export const Loader: FC<IProps> = ({ title, isLoading }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={styles.container}>
			<Spinner
				visible={isLoading}
				textContent={title}
				textStyle={styles.spinnerTextStyle}
			/>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		spinnerTextStyle: {
			color: theme.$primary,
		},
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.$primary,
		},
	})
