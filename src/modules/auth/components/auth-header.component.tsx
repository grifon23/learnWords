import { $size, PrimaryHeader, TouchableTxt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	title: string
	rightBtnLabel: string
	onPress: () => void
}

export const AuthHeader: FC<IProps> = ({ title, rightBtnLabel, onPress }) => {
	const { styles } = useTheme(createStyles)

	return (
		<PrimaryHeader
			title={{ value: title, weight: '300-italic', style: styles.title }}
			rightComponent={() => (
				<TouchableTxt
					weight="400"
					onPress={onPress}
					children={rightBtnLabel}
					style={styles.rightTxt}
				/>
			)}
		/>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		title: {
			fontSize: $size(20, 18),
		},
		rightTxt: {
			fontSize: $size(14, 12),
			color: theme.auth.header.$rightTxt,
		},
	})
