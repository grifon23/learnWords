export type IStack = Record<
	string,
	{ Screen: (...props: any[]) => JSX.Element }
>

export interface IRouteParams {
	navigation: {
		navigate: (to: string, params?: any) => any
		goBack: () => any
		getParam: (key: string) => any
		addListener: (type: string, callback: () => any) => void
	}
	route: any
}

export type RootStackParamList = {
	UserInfo: { userId: number }
}
