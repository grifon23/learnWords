import { useState, useRef, useEffect } from 'react'

interface IProps<T> {
	limit?: number
	page?: number
	fetchItems: (...arr: any[]) => any
	serrializatorResponse?: <S>(data: S) => S
	serrializatorItems?: (items: ReturnType<IProps<T>['fetchItems']>) => T[]
	loadParams?: { [key: string]: any }
	needInit: boolean
}

const defaultProps: IProps<any[]> = {
	limit: 20,
	page: 1,
	fetchItems: () => {} /*  axios request */,
	serrializatorResponse: (data: any) => data,
	serrializatorItems: (items: any) => items,
	loadParams: {},
	needInit: true,
}

const getDefaultProps = () => {
	return Object.assign({}, defaultProps)
}

export const useFlatList = <T>(props: IProps<T>) => {
	if (!props.fetchItems)
		throw new Error('Use flat list need a fetchItems function')

	props = Object.assign(getDefaultProps(), props)

	const loadParams = useRef({
		limit: props.limit,
		page: props.page,
		count: undefined,
		...props.loadParams,
	})

	const blockLoadingRef = useRef(false)

	const [items, setItems] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [isLoadingNext, setIsLoadingNext] = useState(false)
	const [isInit, setIsInit] = useState(false)

	const fetchItems = async (firstFetch = false) => {
		const { count, page, limit } = loadParams.current

		if (firstFetch) {
			setLoading(true)
			loadParams.current.page = defaultProps.page
			loadParams.current.count = undefined
		} else if (blockLoadingRef.current) return
		else if (count && page > Math.ceil(count / limit)) return

		setIsLoadingNext(true)

		blockLoadingRef.current = true
		try {
			const response = props.serrializatorResponse(
				await props.fetchItems({ params: loadParams.current }),
			)
			if (!response) throw {}

			loadParams.current = {
				...props.loadParams,
				limit: loadParams.current.limit,
				page: loadParams.current.page + 1,
				count: response.data.count,
			}
			const fetchedItems = props.serrializatorItems(response.data.items)
			if (firstFetch) setItems(fetchedItems)
			else setItems([...items, ...fetchedItems])

			if (!isInit) setIsInit(true)
		} catch (e) {
			console.log(e)
			setItems([])
		}

		setTimeout(() => {
			blockLoadingRef.current = false
			setLoading(false)
			setIsLoadingNext(false)
		}, 200)
	}

	const resetFlatList = () => {
		fetchItems(true)
	}

	const loadMore = () => {
		fetchItems(false)
	}

	const setLoadParams = (params: Record<string, any>) => {
		loadParams.current = {
			...loadParams.current,
			...params,
		}
		fetchItems(true)
	}

	useEffect(() => {
		if (props.needInit) fetchItems(true)
	}, [])

	return {
		items,
		isEmpty: !items || !items.length,
		isLoading,
		isLoadingNext,
		loadParams,
		resetFlatList,
		loadMore,
		setLoadParams,
		isInit,
		_setItems: setItems,
	}
}
