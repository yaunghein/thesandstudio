import { onMount } from 'svelte'

export default function updateMetaColor(color: string) {
	onMount(() => {
		let meta = document.querySelector('meta[name="theme-color"]')

		if (!meta) {
			meta = document.createElement('meta')
			// @ts-ignore
			meta.name = 'theme-color'
			document.head.appendChild(meta)
		}

		meta.setAttribute('content', color)
	})
}
