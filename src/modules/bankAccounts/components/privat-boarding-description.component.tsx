import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
	title: string
	descriptionComponent: JSX.Element
}

export const PrivatBoardingDescriptionComponent: FC<IProps> = ({
	title,
	descriptionComponent,
}) => {
	const { styles, theme } = useTheme(createStyles)

	return (
		<View style={styles.container}>
			<Txt
				numberOfLines={1}
				adjustsFontSizeToFit
				style={styles.title}
				weight={'600'}>
				{title}
			</Txt>
			<View style={styles.description}>{descriptionComponent}</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			fontSize: $size(18, 16),
		},
		title: {
			fontSize: $size(24, 18),
			lineHeight: $size(28, 24),
		},
		description: {
			flexDirection: 'column',
			alignContent: 'center',
			opacity: 0.6,
			paddingTop: $size(18, 16),
		},
	})
