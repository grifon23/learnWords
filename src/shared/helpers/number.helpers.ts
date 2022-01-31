export const getPercentageDiff = (from: number, to: number): string => {
	const decreaseValue = from - to;

	return ((decreaseValue / from) * 100).toFixed(2)
}

export const getFormattedMoneySum = (sum: number) => {
	return `₴${sum}`
}

export const getCurrencyFormattedSum = (sum: number): string => {
	return `₴ ${sum.toLocaleString('en-US')}`
}

export const getParseNumFromCurrency = (str: string): number => {
	const preparedToNumber = str.replace(new RegExp(/[₴,]/gi), '')

	return Number(preparedToNumber)
}
