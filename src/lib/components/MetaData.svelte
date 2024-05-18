<script lang="ts">
  export let pageTitle: string = "";
  export let title: string = "";
  export let description: string = "";
  const keywords =
    "The Sand Studio, Visual Identity, Motion Graphics, Animation, Packaging Design, Web Design, Web Development, Webflow Development, Web Maintenance, Web Support, E-commerce Solutions, Architectural Design, Interior Design, 3D Modeling, 3D Visualization, Branding Services, Creative Studio, Design Studio, Digital Solutions, Graphic Design, Motion Design, UI/UX Design, Logo Design, Brand Identity, Interactive Design, Website Redesign, Online Store Development, Architectural Visualization, Interior Visualization, Custom Packaging, Digital Animation, Multimedia Solutions, Visual Communication, Creative Agency";
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
  <meta name="keywords" content={keywords} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="" />
</svelte:head>
