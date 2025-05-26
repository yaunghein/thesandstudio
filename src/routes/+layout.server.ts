export const trailingSlash = 'always'

import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
	// const { getSession } = event.locals;

	const userAgent = event.request.headers.get('user-agent') as string
	const macRegex = /macintosh|mac os x/i
	const isMac = macRegex.test(userAgent)

	const mobileRegex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
	const isMobile = mobileRegex.test(userAgent)

	// has some exclude path
	const excludePath = ['/interiors']
	if (
		isMobile &&
		!event.url.pathname.startsWith('/mobile') &&
		!excludePath.includes(event.url.pathname)
	) {
		throw redirect(302, `/mobile${event.url.pathname}`)
	}

	const checkLoadingScreen = () => {
		if (event.url.pathname === '/' || event.url.pathname === '/mobile/') {
			const showedLoadingScreen = event.cookies.get('sand-showed-loading-screen')
			return showedLoadingScreen === 'yes' ? false : true
		}
		return false
	}

	return {
		// session: await getSession(),
		isMac,
		isMobile,
		shouldShowLoadingScreen: checkLoadingScreen()
	}
}
