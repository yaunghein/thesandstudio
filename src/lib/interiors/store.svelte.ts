import { setContext, getContext } from 'svelte'

class InteriorsStore {
	logoSpinDegree: number = $state(0)
}

const INTERIORS_STORE_KEY = 'interiors-store'

export const setInteriorsStore = (): void => {
	setContext<InteriorsStore>(INTERIORS_STORE_KEY, new InteriorsStore())
}

export const getInteriorsStore = (): InteriorsStore => {
	return getContext<InteriorsStore>(INTERIORS_STORE_KEY)
}
