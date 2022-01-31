import moment from 'moment'

export const parseDate = (date?: any, format?: string) => {
	return moment(date).format(format ? format : 'D MMM YYYY')
}
