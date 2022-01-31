import { transactionService } from '@/services/domain'
import { $size, ThemeContext, Txt, useTheme } from '@/shared'
import { PartialTheme } from '@/shared/themes/interfaces'
import { months } from 'moment'
import React, { useState } from 'react'

import {
	Modal,
	View,
	TouchableOpacity,
	Platform,
	Dimensions,
	SafeAreaView,
	StyleSheet,
} from 'react-native'
import { Calendar, CalendarProps, LocaleConfig } from 'react-native-calendars'
import { SvgXml } from 'react-native-svg'
import { PrimaryHeader, TouchableIcon } from '..'
import { CheckIcon } from './atoms/check'

interface ICalendarProps {
	onChange: (val) => void
	value: any
	onClose: () => void
	isVisible: boolean
	title?: string
}

export const CalendarModalComponent = ({
	onChange,
	value,
	onClose,
	isVisible,
	title,
}: ICalendarProps) => {
	const { styles } = useTheme(createStyles)

	if (!isVisible) return null

	const [selected, setSelected] = useState(value)

	const onDayPress: CalendarProps['onDayPress'] = async day => {
		setSelected(day.dateString)
		await transactionService.saveTransactionDate(day.dateString)
	}

	const nameDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']
	LocaleConfig.locales['uk'] = {
		monthNames: [
			'Січень',
			'Лютий',
			'Березень',
			'Квітень',
			'Травень',
			'Червень',
			'Липень',
			'Серпень',
			'Вересень',
			'Жовтень',
			'Листопад',
			'Грудень',
		],
		dayNames: [
			'неділя',
			'понеділок',
			'вівторок',
			'середа',
			'четвер',
			"п'ятниця",
			'субота',
		],
		dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		today: 'Сьогодні',
	}
	LocaleConfig.defaultLocale = 'uk'

	return (
		<Modal visible={true} transparent style={{}}>
			<View style={styles.containerModal}>
				<View style={styles.content}>
					<View>
						<View style={styles.header}>
							<Txt style={styles.title}>{title}</Txt>

							<CheckIcon onPress={onClose} />
						</View>
						<View style={styles.line} />
						<View style={styles.nameDays}>
							{nameDay.map(_it => (
								<Txt style={{ color: '#AEB1B8' }}>{_it}</Txt>
							))}
						</View>

						<Calendar
							hideDayNames
							style={{
								width: '100%',
								flexDirection: 'column-reverse',
							}}
							monthFormat={'MMMM yyyy'}
							hideExtraDays={false}
							disableMonthChange={true}
							firstDay={1}
							onDayPress={onDayPress}
							day={value}
							onPressArrowLeft={subtractMonth => subtractMonth()}
							onPressArrowRight={addMonth => addMonth()}
							enableSwipeMonths={true}
							markedDates={{
								[selected]: {
									selected: true,
									disableTouchEvent: true,
									selectedColor: '#FF3378',
									selectedTextColor: '#FFFFFF',
								},
							}}
							theme={{
								arrowColor: '#1D1D1D',
								arrowStyle: styles.arrows,
								textMonthFontFamily: 'GT Walsheim Pro',
								textMonthFontWeight: '700',
								textMonthFontSize: $size(20, 18),
								textDayStyle: styles.calendarItem,
								textDayHeaderFontFamily: 'GT Walsheim Pro',
								textDayHeaderFontSize: $size(10, 8),
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		containerModal: {
			// flex: 1,
			backgroundColor: 'rgba(18, 24, 41, 0.6)',
			height: '100%',
			position: 'relative',
		},
		content: {
			borderRadius: 20,
			flexDirection: 'column',
			backgroundColor: '#FFFFFF',
			justifyContent: 'center',
			paddingHorizontal: 25,
			position: 'absolute',
			left: 20,
			top: 210,
			width: '90%',
			paddingTop: 30,
			paddingBottom: 30,
			...Platform.select({
				ios: {
					shadowOffset: {
						width: 0,
						height: 4,
					},
					shadowRadius: 20,
					shadowOpacity: 1,
				},

				android: {
					elevation: 2,
				},
			}),
		},
		header: {
			marginHorizontal: 18,
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: 30,
		},

		title: {
			fontSize: $size(20),
			lineHeight: 22,
			opacity: 0.9,
			color: theme.$textPrimary,
			fontWeight: '700',
		},
		nameDays: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingHorizontal: 19,
			paddingRight: 25,
		},

		arrows: {
			height: $size(12, 10),
			width: $size(8, 7),
			justifyContent: 'center',
			alignItems: 'center',
		},
		disabledText: {
			color: theme.$textSecondary,
		},
		calendarItem: {
			fontFamily: 'GT Walsheim Pro',
			fontWeight: '600',
			fontSize: $size(12, 10),
			padding: 2,
		},
		calendarActiveDay: {
			backgroundColor: theme.$primary,
			height: $size(30),
			width: $size(30),
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 25,
		},

		line: {
			borderBottomColor: '#1C202E',
			borderBottomWidth: 0.4,
			opacity: 0.12,
			marginHorizontal: $size(10),
			marginBottom: 20,
		},
	})
