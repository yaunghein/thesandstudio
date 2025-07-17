<script lang="ts">
	interface Props {
		pageTitle?: string
		title?: string
		description?: string
		ogImage?: string
		ogType?: string
		canonicalUrl?: string
		structuredData?: object
		keywords?: string
	}

	const keywordsx =
		'The Sand Studio, Visual Identity, Motion Graphics, Animation, Packaging Design, Web Design, Web Development, Webflow Development, Web Maintenance, Web Support, E-commerce Solutions, Architectural Design, Interior Design, 3D Modeling, 3D Visualization, Branding Services, Creative Studio, Design Studio, Digital Solutions, Graphic Design, Motion Design, UI/UX Design, Logo Design, Brand Identity, Interactive Design, Website Redesign, Online Store Development, Architectural Visualization, Interior Visualization, Custom Packaging, Digital Animation, Multimedia Solutions, Visual Communication, Creative Agency'

	let {
		pageTitle = '',
		title = '',
		description = '',
		ogImage = '/og-image.jpg',
		ogType = 'website',
		canonicalUrl = '',
		structuredData = undefined,
		keywords = keywordsx
	}: Props = $props()
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="keywords" content={keywords} />

	<!-- Canonical URL -->
	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Sand Interiors" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={ogImage} />

	<!-- Additional SEO -->
	<meta name="author" content="Sand Interiors" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#000000" />

	<!-- Structured Data -->
	{#if structuredData}
		<script type="application/ld+json">
			{JSON.stringify(structuredData)}
		</script>
	{/if}
</svelte:head>
