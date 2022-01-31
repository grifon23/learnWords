import moment from 'moment'

export const startOfMonth = (date: Date) =>
	moment(date).startOf('month').format('YYYY-MM-DD')
export const endOfMonth = (date: Date) =>
	moment(date).endOf('month').format('YYYY-MM-DD')

export const currentLength = moment().date()

export const fromDate = (date: Date) =>
	moment(date).subtract(1, 'months').startOf('month').format('YYYY-MM-DD')

export const toDate = (date: Date) =>
	moment(date).add(1, 'M').startOf('month').format('YYYY-MM-DD')

export const getPrevMonthDaysArray = (date: Date) => {
	let daysInMonth = moment(date).subtract(1, 'months').daysInMonth()
	const arrDays = []

	while (daysInMonth) {
		const current = moment(date)
			.subtract(1, 'months')
			.date(daysInMonth)
			.format('YYYY-MM-DD')
		arrDays.push(current)
		daysInMonth--
	}
	return arrDays
}

export const daysInCurrentMonth = (date: Date) => {
	const count = moment(date).daysInMonth()
	let days = []
	for (let i = 1; i < count + 1; i++) {
		days.push(moment(date).date(i).format('YYYY-MM-DD'))
	}
	return days
}

export const daysInPrevMonth = () => {
	const count = moment().subtract(1, 'months').daysInMonth()
	const startOfLastMonth = moment().subtract(1, 'months').startOf('month')
	let days = []

	for (let i = 0; i < count; i++) {
		days.push(startOfLastMonth.format('YYYY-MM-DD'))
		startOfLastMonth.add(1, 'days')
	}
	return days
}
