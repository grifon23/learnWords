import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { PartialTheme } from '@/shared/themes/interfaces'
import { $size, IUser, Txt, useTheme } from '@/shared'



interface IProfileProps  {
	firstName: string
	lastName?: string
	email:string
	letter: string
}


export const ProfileCardComponent: FC<IProfileProps> = ({
	firstName, lastName, email, letter
}) => {
	const { styles } = useTheme(createStyles)


	
	console.log(letter);



	return (
		<View style={styles.container}>
			<View style={styles.profileContentHead}>
				<View style={styles.profiContainer}>
				<Txt
					style={styles.profileLetter}
					>{letter}</Txt>
				</View>
				
				<View style={styles.profileName}>
					<Txt style={styles.valueName} weight="600">
						{firstName}
					</Txt>
					<Txt style={styles.valueName} weight="600">
						{lastName}
					</Txt>
				</View>
			</View>
			<View style={styles.email}>
				<View>
					<Txt style={styles.emailText} weight="300">
						Email
					</Txt>
					<Txt style={styles.valueEmail} weight="600">
						{email}
					</Txt>
				</View>
			</View>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			flexDirection: 'column',
		},
		profileContentHead: {
			alignItems: 'center',
			flexDirection: 'row',
		},
		profileName: {
			marginTop: $size(10),
			marginLeft: $size(15),
			display: 'flex',
			flexDirection: 'row'
			
		},
		profileLetter: {
			color: 'rgba(28, 32, 46, 0.5)',
			fontSize: $size(80),
			
			
		},
		email: {marginLeft: $size(20)},
		emailText: {
			color: theme.$textSecondary,
			fontSize: $size(12),
			marginBottom: $size(8),
		},
		valueName: {
			color: '#1C202E',
			fontSize: $size(20),
			marginLeft: $size(10)
		},
		valueEmail: {
			color: '#1C202E',
			fontSize: $size(20),
			opacity: 0.8
		}, 
		profiContainer: {
			display: 'flex',
			alignItems: "center", 
			width: $size(100),
			height:$size(100), 	
			justifyContent: 'center',
			marginTop: $size(35),
			marginLeft: $size(20),
			marginBottom: $size(20), 
			borderRadius: $size(100),
			backgroundColor: "rgba(28, 32, 46, 0.1)"

			
		}
	})
