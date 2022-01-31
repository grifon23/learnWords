import { RootState } from '@/store'

export const selectActiveNavigationModule = (store: RootState) => {
	return store.shared.activeNavigationModule
}

export const selectIsForbidden = (store: RootState) => {
	return store.shared.isForbidden
}

export const selectIsExistUser = (store: RootState) => {
	return store.shared.isExistUser
}