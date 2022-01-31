import { $size, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'

interface IProps {
	animatedStyle: {
		width: Animated.AnimatedInterpolation
		height: Animated.AnimatedInterpolation
		marginBottom: Animated.AnimatedInterpolation
	}
	svg: any
}

export const AnimatedSvgImg: FC<IProps> = ({ animatedStyle, svg }) => {
	const { styles } = useTheme(createStyles)

	return (
		<Animated.View style={[animatedStyle, styles.img]}>
			<SvgXml xml={svg} width={'100%'} height={'100%'} />
		</Animated.View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		img: {
			marginTop: $size(40, 35),
		},
	})
