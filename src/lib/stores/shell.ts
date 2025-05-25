import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

import type { File } from './finder'

export type AppId = 'sand-scan' | 'finder' | 'child' | 'copyright' | 'schat' | 'launch-skit'

// TODO: change shell naming to window
export type OpenShell = {
	id: AppId | string
	zIndex: number
	file?: File
}

type OpenShells = OpenShell[]

export const OpenShells: Writable<OpenShells> = writable([])

export const addShell = (shell: OpenShell) => {
	OpenShells.update((shells) => {
		const filteredShells = shells.filter((s) => s.id !== shell.id)
		const updatedShells = filteredShells.map((s, index) => ({
			...s,
			zIndex: 10 * (index + 1)
		}))
		return [...updatedShells, shell]
	})
}

export const removeShell = (id: AppId | string) => {
	OpenShells.update((shells) => {
		return shells.filter((shell) => shell.id !== id)
	})
}
