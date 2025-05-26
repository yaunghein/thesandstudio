<script lang="ts">
	import { onMount } from 'svelte'
	import { page } from '$app/state'

	onMount(async () => {
		if (page.url.pathname.startsWith('/interiors')) return

		var options = {
			animate: true,
			patternWidth: 500,
			patternHeight: 500,
			grainOpacity: 0.075,
			grainDensity: 1,
			grainWidth: 1,
			grainHeight: 1
		}

		window.grained('#grain', options)
	})
</script>

<div class="pointer-events-none fixed inset-0 z-[10000000000] h-full w-full select-none">
	<div id="grain" class="absolute inset-0 h-full w-full"></div>
</div>
