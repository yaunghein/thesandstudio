import { type ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = (event) => {
	const { pathname } = event.url
	const isInteriorsContactPage = pathname === '/interiors/contact/'
	return { isInteriorsContactPage }
}
