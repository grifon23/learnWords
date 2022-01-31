import { useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import React, { FC } from 'react'

import { StyleSheet } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
interface IProps {
	selected: Date
	onDayPress: any
}
export const HorizontalCalendar: FC<IProps> = ({ selected, onDayPress }) => {
	const { styles, theme } = useTheme(createStyles)
	return (
		<CalendarStrip
			daySelectionAnimation={{
				type: 'background',
				highlightColor: '#FF3378',
				duration: 30,
			}}
			scrollable
			scrollerPaging={true}
			selectedDate={selected}
			onDateSelected={day => onDayPress(day.format('YYYY-MM-DD'))}
			calendarHeaderFormat="MMMM"
			style={styles.container}
			calendarColor={'#FFFFFF'}
			calendarHeaderStyle={styles.header}
			calendarHeaderContainerStyle={{
				paddingBottom: 10,
			}}
			calendarHeaderPosition="below"
			dateNumberStyle={styles.dayNumber}
			dateNameStyle={styles.dayName}
			dayContainerStyle={styles.dayContainerStyle}
			highlightDateNameStyle={styles.highlightNameStyle}
			highlightDateNumberStyle={styles.highlightNumberStyle}
			highlightDateContainerStyle={styles.highlightDateContainerStyle}
			leftSelector={[]}
			rightSelector={[]}
			iconContainer={{ flex: 0.03 }}
		/>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		container: {
			height: 88,
			// paddingBottom: 10,
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20,
		},
		dayName: {
			color: '#AEB1B8',
			fontSize: 10,
			fontWeight: '500',
			fontFamily: 'GT Walsheim Pro',
		},
		dayNumber: {
			color: '#1C202E',

			fontSize: 12,
			fontWeight: '500',
		},
		header: {
			color: '#AEB1B8',
			fontFamily: 'GT Walsheim Pro',
			fontWeight: '500',
			fontSize: 16,
		},
		dayContainerStyle: {
			backgroundColor: '#F2F2F2',
			height: 40,
			width: 40,
		},
		highlightNumberStyle: {
			color: '#FFFF',
			fontSize: 12,
			fontWeight: '900',
		},
		highlightDateContainerStyle: {
			backgroundColor: '#FF3378',
		},
		highlightNameStyle: {
			color: '#FFFF',
			fontSize: 10,
			fontWeight: '900',
			fontFamily: 'GT Walsheim Pro',
		},
	})
