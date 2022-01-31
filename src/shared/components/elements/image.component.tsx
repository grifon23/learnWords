import { useTheme } from '@/shared/hooks/use-theme.hook'
import { PartialTheme } from '@/shared/themes/interfaces'
import React from 'react'
import { View, StyleSheet, Image as RNImage, ImageProps } from 'react-native'

interface IProps {
	style?: any
	maxWidth: number
	maxHeight: number
	imageProps: ImageProps
}

export const Image = (props: IProps) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={[styles.container, props.style]}>
			{!props.imageProps ? null : (
				<RNImage
					{...props.imageProps}
					style={{
						maxHeight: props.maxHeight,
						maxWidth: props.maxWidth,
					}}
				/>
			)}
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			position: 'relative',
		},
	})
