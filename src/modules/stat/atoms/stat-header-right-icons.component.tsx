import { TouchableIcon, useTheme } from '@/shared'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

interface IProps {
	onPressUser: () => void
}

export const StatHeaderRightIcons: FC<IProps> = ({ onPressUser }) => {
	const { styles } = useTheme(createStyles)

	return (
		<View style={styles.container}>
			<TouchableIcon size={22} iconName="user" onPress={onPressUser} />
		</View>
	)
}

const createStyles = () =>
	StyleSheet.create({
		container: {
			flexDirection: 'row',
			// width: '20%',
			justifyContent: 'space-between',
		},
	})
