import { NavigationModuleKey } from '@/shared'
import { SetNavigationModule } from '@/store/shared'
import { simpleDispatch } from '@/store/store-helpers'

const setModule = (module: NavigationModuleKey) => {
	simpleDispatch(new SetNavigationModule({ module }))
}

export const NavigationService = {
	setModule,
}
