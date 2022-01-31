import { $size, PrimaryHeader, TouchableTxt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

interface IProps {
	title: string
	letfBtnIcon: string
	onPress: () => void
}

export const BaseHeader: FC<IProps> = ({ title, letfBtnIcon, onPress }) => {
	const { styles } = useTheme(createStyles)

	return (
		<PrimaryHeader
			title={{ value: title, weight: '600', style: styles.title }}
			leftIcon={
				letfBtnIcon
					? {
							iconName: letfBtnIcon,
							size: 25,
							onPress: onPress,
					  }
					: null
			}
		/>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		title: {
			fontSize: $size(24, 18),
		},
	})
