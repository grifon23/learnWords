import { $size, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'

interface IDataProps {
	image: any
	title: string
	description: string
	arrowComponent?: () => JSX.Element
}

export const MissingDataComponent: FC<IDataProps> = ({
	image,
	title,
	description,
	arrowComponent,
}) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={styles.container}>
			<View>{image}</View>
			<View>
				<Txt weight="600" style={styles.title}>
					{title}
				</Txt>

				<Txt style={styles.description}>{description}</Txt>
			</View>

			{arrowComponent ? arrowComponent() : null}
		</View>
	)
}
const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			display: 'flex',
			alignItems: 'center',
			// alignContent: 'space-between',
		},
		title: {
			fontSize: $size(24, 22),
			color: theme.$textPrimary,
			marginBottom: $size(18, 16),
			textAlign: 'center',
		},
		description: {
			textAlign: 'center',
			paddingRight: $size(15, 13),
			paddingLeft: $size(15, 13),
			fontSize: $size(14, 12),
			lineHeight: $size(22, 20),
			color: theme.$textPrimary,
			opacity: $size(0.6),
			marginBottom: $size(13, 11),
		},
	})
