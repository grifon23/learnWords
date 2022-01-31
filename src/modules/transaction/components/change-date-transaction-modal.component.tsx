import React, { FC, useEffect, useState } from 'react'
// import { $size, BottomModal, Button } from '@/shared'
import RBSheet from 'react-native-raw-bottom-sheet'
import { StyleSheet, View } from 'react-native'
import { PartialTheme } from '@/shared/themes/interfaces'
import { useTheme } from '@/shared/hooks/use-theme.hook'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

interface IProps {
	sheetRef: React.LegacyRef<RBSheet>
	title: string
	onChange: (newDate: Date) => void
	date: Date
}

export const ChangeDateTransactionModal: FC<IProps> = ({
	sheetRef,
	title,
	onChange,
	date,
}) => {
	const { styles, theme } = useTheme(createStyles)
	const [newDate, setNewDate] = useState<Date>(new Date())

	useEffect(() => {
		setNewDate(date)
	}, [date])

	return (
		
			<View style={styles.container}>
				<DatePicker
					date={newDate}
					onDateChange={setNewDate}
					locale={'uk'}
					mode={'date'}
					maximumDate={new Date()}
				/>
				
			</View>
		
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
