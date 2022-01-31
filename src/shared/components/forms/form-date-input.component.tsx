import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { PartialTheme } from '@/shared/themes/interfaces'
import { useTheme } from '@/shared/hooks/use-theme.hook'
import { SvgXml } from 'react-native-svg'
import searchSvg from '../../../assets/images/search.svg'
import { Txt, $size } from '@/shared'
import moment from 'moment'
import { CalendarModalComponent } from '../calendars'

interface IProps {
	value: Date | string
	onPress: (val: Date | string) => void
	onChange: (v: any) => void
	title?: string
	style?: any
	needIcon?: boolean
	iconName?: string
	disabled?: boolean
	minDate?: Date
	maxDate?: Date
}

export const DateInputForm = ({
	value,
	needIcon = true,
	iconName,
	title,
	minDate,
	maxDate,
	onChange,
	...props
}: IProps) => {
	const { styles, theme } = useTheme(createStyles)

	const [showDatePicker, setShowDatePicker] = useState(false)

	const onClosePicker = () => {
		setShowDatePicker(false)
		if (!value) onChange(new Date())
	}

	return (
		<View style={[styles.wrapper]}>
			<Txt style={styles.title}>{title}</Txt>

			<TouchableOpacity
				disabled={props.disabled}
				style={[styles.input, props.style]}
				onPress={() => setShowDatePicker(true)}>
				{needIcon && (
					<SvgXml style={styles.icon} xml={searchSvg as any}></SvgXml>
				)}
				<Txt style={styles.date}>
					{value
						? moment(new Date(value)).format('DD-MM-YYYY')
						: null}
				</Txt>
			</TouchableOpacity>

			<CalendarModalComponent
				value={value || new Date()}
				onChange={onChange}
				title="Дата транзакції"
				isVisible={showDatePicker}
				onClose={onClosePicker}
			/>
		</View>
	)
}

const createStyles = (theme: PartialTheme) =>
	StyleSheet.create({
		wrapper: {
			width: '60%',
			borderBottomWidth: 0.4,
			borderColor: '#1C202E',
		},
		icon: {
			minWidth: $size(24, 20),
			minHeight: $size(32, 28),
		},
		title: {
			color: theme.$textSecondary,
			fontSize: $size(12, 11),
			fontWeight: '300',
		},
		input: {
			paddingVertical: $size(6),
			flexDirection: 'row',
			borderRadius: 8,
			alignItems: 'center',
		},
		date: {
			marginLeft: $size(12),
			fontSize: $size(20),
			fontWeight: '700', // 600
		},
	})
