import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

interface IProps {
	title: string
	info: string
	style?: ViewStyle
}

export const SignUpInfoTxt: FC<IProps> = ({ title, info, style }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<Txt weight={'600'} style={styles.title}>
				{title}
			</Txt>

			<Txt weight={'400'} style={styles.info}>
				{info}
			</Txt>
		</View>
	)
}

const createStyles = (theme: PartialTheme) => {
	const {
		auth: { info },
	} = theme

	return StyleSheet.create({
		container: {
			alignItems: 'center',
		},
		title: {
			textAlign: 'center',
			color: info.$title,
			fontSize: $size(24, 22),
			marginBottom: $size(20, 18),
		},
		info: {
			color: info.$info,
			textAlign: 'center',
			fontSize: $size(16, 12),
		},
	})
}
