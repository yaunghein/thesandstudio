import { error } from '@sveltejs/kit'
import projects from '$lib/interiors/fixtures/projects'

export async function GET() {
	const baseUrl = 'https://thesandstudio.com'

	// Static pages
	const staticPages = [
		{ url: '/', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: '1.0' },
		{
			url: '/interiors/',
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: '0.9'
		},
		{
			url: '/interiors/projects/',
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: '0.8'
		},
		{
			url: '/interiors/contact/',
			lastmod: new Date().toISOString(),
			changefreq: 'monthly',
			priority: '0.7'
		}
	]

	// Project pages
	const projectPages = projects.map((project) => ({
		url: `/interiors/projects/${project.slug}/`,
		lastmod: new Date().toISOString(),
		changefreq: 'monthly',
		priority: '0.8'
	}))

	const allPages = [...staticPages, ...projectPages]

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	})
}
