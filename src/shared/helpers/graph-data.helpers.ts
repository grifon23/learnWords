import _ from 'lodash'
import moment from 'moment'
import { ITransaction } from '..'
import { TransactionsEnum } from '../enums'

export const currentMonthGraphData = (
	date: Date,
	days: any[],
	transactions: ITransaction[],
	defaultbalance: number,
) => {
	let data = []
	const initData = [
		{
			date: moment(date).date(-2).format('YYYY-MM-DD'),
			day: -3,
			balance: defaultbalance,
		},
		{
			date: moment(date).date(-1).format('YYYY-MM-DD'),
			day: -2,
			balance: defaultbalance,
		},
		{
			date: moment(date).date(0).format('YYYY-MM-DD'),
			day: -1,
			balance: defaultbalance,
		},
		{
			date: moment(date).date(1).format('YYYY-MM-DD'),
			day: 0,
			balance: defaultbalance,
		},
	]

	if (_.isEmpty(transactions)) return data

	data = [...initData]

	const currentDay = moment().isSame(date, 'year')
		? moment().date()
		: moment(date).daysInMonth()

	days.forEach((item, index) => {
		if (index < currentDay) {
			const daySummary = transactions
				.filter(x => x.date === item)
				.reduce(
					(a, b) =>
						b.transactionType === TransactionsEnum.Income
							? a + Number(b.amount)
							: a - Number(b.amount),
					0,
				)

			defaultbalance += daySummary

			data.push({
				date: item,
				day: index + 1,
				balance: defaultbalance,
			})
		}
	})
	return data
}

export const prevMonthGraphData = (
	days: any[],
	transactions: ITransaction[],
	defaultbalance: number,
) => {
	let data = []
	if (_.isEmpty(transactions)) return data
	days.forEach((item, index) => {
		const daySummary = transactions
			.filter(x => x.date === item)
			.reduce(
				(a, b) =>
					b.transactionType === TransactionsEnum.Income
						? a - Number(b.amount)
						: a + Number(b.amount),
				0,
			)

		defaultbalance += daySummary
		data.push({
			date: item,
			// day: index + 1,
			balance: defaultbalance,
		})
	})
	return data
}
