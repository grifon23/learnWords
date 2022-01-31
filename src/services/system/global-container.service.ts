const globalData: {
	store?: any
	internetConnect?: boolean
} = {
	store: null,
	internetConnect: true,
}

const set = (key: string, value: any) => {
	globalData[key] = value
}

const get = (key: string) => globalData[key]

export const GlobalContainerService = {
	set,
	get,
}
