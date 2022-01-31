import { $size, PrimaryHeader, Txt, useTheme, TouchableIcon } from '@/shared'
import React, { FC, useState } from 'react'
import { Modal, Platform, StyleSheet, View } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { PartialTheme } from '@/shared/themes/interfaces'
interface IProps {
	value: any
	isShow: boolean
	onClosePicker: () => void
	onDayPress: any
	selected: any
}
export const TransactionCalendar: FC<IProps> = ({
	value,
	isShow,
	onClosePicker,
	onDayPress,
	selected,
}) => {
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
		<Modal visible={isShow} transparent animationType="none">
			<View
				style={{
					backgroundColor: 'rgba(18, 24, 41, 0.6)',
					height: '1000%',
				}}>
				<View
					style={{
						borderBottomLeftRadius: 20,
						backgroundColor: '#FFFFFF',
						borderBottomRightRadius: 20,
						paddingHorizontal: 15,
						zIndex: 9999,
						paddingBottom: 20,
					}}>
					<PrimaryHeader
						title={{ value: 'Щодeнна транзакція' }}
						rightComponent={() => (
							<TouchableIcon
								size={22}
								iconName="exit"
								onPress={onClosePicker}
							/>
						)}
						style={styles.primaryHeader}
					/>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingHorizontal: 22,
							paddingRight: 25,
							position: 'relative',
						}}>
						{nameDay.map(_it => (
							<Txt style={{ color: '#AEB1B8' }}>{_it}</Txt>
						))}
					</View>
					<View>
						<Calendar
							style={{ flexDirection: 'column-reverse' }}
							monthFormat={'MMMM yyyy'}
							hideExtraDays={false}
							hideDayNames
							disableMonthChange={true}
							firstDay={1}
							onDayPress={item => onDayPress(item.dateString)}
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
const styles = StyleSheet.create({
	content: {
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		paddingHorizontal: 20,

		...Platform.select({
			ios: {
				// shadowColor: 'rgba(0, 0, 0, 0.11)',
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
	primaryHeader: {
		shadowOpacity: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		// justifyContent: 'space-between',
	},
	line: {
		borderBottomColor: '#1C202E',
		borderBottomWidth: 2,
		opacity: 1,
		marginHorizontal: $size(20),
		marginVertical: 25,
	},
	calendarItem: {
		fontFamily: 'GT Walsheim Pro',
		fontWeight: '600',
		fontSize: $size(12, 10),
		padding: 2,
	},
})
