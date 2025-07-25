import { browser } from '$app/environment'
import { getInteriorsStore } from '$lib/interiors/store.svelte'

export default function (node: HTMLElement, options: { extra?: number } = {}) {
	if (!browser) return

	// Get the interiors store for logo spin degree
	const interiorsStore = getInteriorsStore()

	const handleScroll = () => {
		const scrollLeft = node.scrollLeft
		interiorsStore.logoSpinDegree = scrollLeft * 0.1
	}

	node.addEventListener('scroll', handleScroll, { passive: true })

	return {
		destroy() {
			node.removeEventListener('scroll', handleScroll)
		}
	}
}
