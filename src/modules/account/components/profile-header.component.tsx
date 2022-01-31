import { $size, TouchableIcon, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'
import {
    Platform,
	SafeAreaView,
	StyleSheet,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native'

interface IProps {
	leftIcon: {
		iconName: string
		size: number
		onPress: () => void
	}
    title: {
		value: string
		weight?: '300-italic' | '300' | '400' | '500' | '600'
		style?: TextStyle
	}
	style?: ViewStyle
	rightComponent: () => JSX.Element
}

export const ProfileHeader: FC<IProps> = ({ leftIcon, title, style, rightComponent }) => {
	const { styles, theme } = useTheme(createStyles)

	return (
		<View style={[styles.container, style]}>
			<SafeAreaView style={styles.areaView}>
                
				<View style={styles.leftWrap}>
					{leftIcon ? (
						<TouchableIcon
							{...leftIcon}
							color={theme.primaryHeader.$icon}
						/>
					) : null}
                    <Txt
						weight={'600'}
						style={styles.title}>
						{title.value}
					</Txt>
                    </View>
                    
                    {rightComponent()}
			</SafeAreaView>
            
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			paddingVertical: $size(15),
			paddingHorizontal: $size(25, 23),
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			backgroundColor: theme.primaryHeader.$bg,
			shadowColor: theme.primaryHeader.$shadow,
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			shadowOpacity: 0.1,
			shadowRadius: 20,
			shadowOffset: {
				width: 0,
				height: 5,
			},
			...Platform.select({
				android: {
					borderWidth: 1,
					borderTopWidth: 0,
					borderColor: 'rgba(0,0,0,.1)',
				},
			}),
            zIndex: 999,    
		},
        areaView: {
            width:'100%'
        },
		leftWrap: {
			flexDirection: 'row',
			alignItems: 'center',    
		},
        title: {
            fontSize: $size(24),
            marginLeft: $size(21)
        }
	})
