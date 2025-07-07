import { slugify } from '$lib/utils/slugify'

export default [
	{
		name: 'The Ostel Hostel',
		slug: slugify('The Ostel Hostel'),
		year: 2025,
		type: 'Bachelor Thesis',
		coverImage: {
			path: '/interiors/projects/list-page/oh.webp',
			layoutClasses: 'row-span-2',
			layoutClassesMobile: 'w-[9rem] row-span-2'
		},
		location: 'Bangkok, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/oh/showcase/OH-1.gif',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.4]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-6.webp',
				layoutClasses: 'h-[15.33vh] sm:h-[20vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/1.27]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-8.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-9.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/2.06]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-10.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-11.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-12.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/1.15]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-13.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-14.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-15.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-16.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-17.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-18.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-19.gif',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-20.gif',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.64]'
			}
			// {
			// 	path: '/interiors/placeholders/cyc-1.jpg',
			// 	layoutClasses: 'w-[12.38rem] sm:w-[42rem] aspect-[1/1.33]'
			// },
			// {
			// 	path: '/interiors/placeholders/cyc-2.jpg',
			// 	layoutClasses: 'w-[14.92em] sm:w-[49rem] aspect-[1/0.75] self-end'
			// },
			// {
			// 	path: '/interiors/placeholders/cyc-3.jpg',
			// 	layoutClasses: 'w-[14.25rem] sm:w-[47rem] aspect-[1/0.75] self-start'
			// },
			// {
			// 	path: '/interiors/placeholders/cyc-1.jpg',
			// 	layoutClasses: 'w-[12.38rem] sm:w-[42rem] aspect-[1/1.33]'
			// },
			// {
			// 	path: '/interiors/placeholders/cyc-2.jpg',
			// 	layoutClasses: 'w-[14.92rem] sm:w-[49rem] aspect-[1/0.75] self-end'
			// },
			// {
			// 	path: '/interiors/placeholders/cyc-3.jpg',
			// 	layoutClasses: 'w-[14.25rem] sm:w-[47rem] aspect-[1/0.75] self-start'
			// }
		],
		details: [
			{
				images: [
					{
						path: '/interiors/placeholders/cyc-4.jpg',
						layoutClasses: 'w-full sm:w-[49.75rem] aspect-[1/0.72]'
					},
					{
						path: '/interiors/placeholders/cyc-5.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/0.97]'
					}
				],
				title: 'Abstract',
				body: [
					'In the city of Yangon, Myanmar, the youth represent a dynamic part of the population filled with potential and aspirations. The geopolitical and social setting of Yangon, along with the challenges and opportunities that arise amid the pandemic, make an urgent need for spaces that serve as anchors for the youth.',
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive spaceto connect, learn, and thrive within a vibrant community.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/placeholders/cyc-6.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-square place-self-end self-center'
					},
					{
						path: '/interiors/placeholders/cyc-7.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/1.28]'
					}
				],
				title: 'Design Process',
				body: [
					'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/placeholders/cyc-4.jpg',
						layoutClasses: 'w-full sm:w-[49.75rem] aspect-[1/0.72]'
					},
					{
						path: '/interiors/placeholders/cyc-5.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/0.97]'
					}
				],
				title: 'Abstract',
				body: [
					'In the city of Yangon, Myanmar, the youth represent a dynamic part of the population filled with potential and aspirations. The geopolitical and social setting of Yangon, along with the challenges and opportunities that arise amid the pandemic, make an urgent need for spaces that serve as anchors for the youth.',
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive spaceto connect, learn, and thrive within a vibrant community.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/placeholders/cyc-6.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-square place-self-end self-center'
					},
					{
						path: '/interiors/placeholders/cyc-7.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/1.28]'
					}
				],
				title: 'Design Process',
				body: [
					'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.'
				],
				contentClasses: ''
			}
		]
	},
	{
		name: 'Creative Youth Centre',
		slug: slugify('Creative Youth Centre'),
		year: 2024,
		type: 'Bachelor Thesis',
		coverImage: {
			path: '/interiors/projects/list-page/cyc.webp',
			layoutClasses: 'h-[25rem] col-span-3',
			layoutClassesMobile: 'w-[30rem] col-span-3'
		},
		location: 'Yangon, Myanmar',
		showcaseImages: [
			{
				path: '/interiors/projects/cyc/showcase/cyc-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.6]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75] self-end'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-3.webp',
				layoutClasses: 'h-[23vh] sm:h-[30vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-4.webp',
				layoutClasses: 'h-[23vh] sm:h-[30vh] aspect-[1/0.75] self-end'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-6.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75] self-center'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-8.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-9.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.59]'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-10.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75] self-end'
			},
			{
				path: '/interiors/projects/cyc/showcase/cyc-11.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.15]'
			}
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-1.1.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.6]'
					}
				],
				title: 'Abstract',
				body: [
					'In the city of Yangon, Myanmar, the youth represent a dynamic part of the population filled with potential and aspirations. The geopolitical and social setting of Yangon, along with the challenges and opportunities that arise amid the pandemic, make an urgent need for spaces that serve as anchors for the youth.',
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive spaceto connect, learn, and thrive within a vibrant community.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-2.1.webp',
						layoutClasses: 'w-full sm:col-span-3 aspect-[1/0.72]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-2.2.webp',
						layoutClasses:
							'w-full sm:col-span-1 aspect-[1/1.19] self-center sm:translate-x-[1.75rem]'
					}
				],
				title: 'Concept',
				body: [
					"Drawing inspiration from a butterfly's metamorphosis, this concept highlights the profound changes young people experience as they grow from teenagers to adults. Just as a butterfly emerged from its cocoon, transformed and ready to soar, the youth at this center are envisioned on a similar transformative path.",
					'This concept not only signifies physical growth but also an evolution of identity, perspective, and emotional maturity. In this sense, the center acts as both a cocoon and a nest, providing a nurturing space where youth can safely transform and flourish.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.1.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.55] self-center'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.2.gif',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/1.25]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.3.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/1.25]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.4.gif',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/1.25]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.5.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/1]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.6.gif',
						layoutClasses: 'w-full sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/1.25]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-3.7.gif',
						layoutClasses: 'w-full sm:w-[50%] mx-auto sm:col-span-4 aspect-[1/1.25]'
					}
				],
				title: 'Design Process',
				body: [
					'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.'
				],
				contentClasses: 'sticky self-start'
			}
		]
	},
	{
		name: 'Unseen Battle PTSD Awareness Exhibition',
		slug: slugify('Unseen Battle PTSD Awareness Exhibition'),
		year: 2024,
		type: 'Exhibition Design',
		coverImage: {
			path: '/interiors/projects/list-page/ptsd.webp',
			layoutClasses: 'h-[25rem] aspect-[1/1] col-start-2',
			layoutClassesMobile: 'w-[9rem] col-start-2 row-start-2 aspect-[1/1] col-span-3'
		},
		location: 'BITEC, Bangkok, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.65]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.28]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-square self-end'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-square'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-5.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-square'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-6.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.28] self-center'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.85] self-end'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-8.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.85]'
			}
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-1.1.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.52]'
					}
				],
				title: 'Abstract',
				body: [
					'Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event. The aim of this exhibition is to increase awareness and understanding of PTSD, creating a supportive community for affected individuals.',
					"The objectives include educating the public about PTSD's causes, symptoms, and effects, and providing helpful resources and strategies for support and healing for both sufferers and their families."
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.1.webp',
						layoutClasses: 'w-full sm:col-span-3 aspect-[1/0.75]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.2.webp',
						layoutClasses:
							'w-[50%] sm:w-full sm:col-span-1 aspect-[1/1.34] self-center sm:translate-x-[1.75rem]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.3.webp',
						layoutClasses: 'w-[50%] sm:w-[75%] mx-auto sm:col-span-2 aspect-[1/1.02] self-end'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.4.webp',
						layoutClasses: 'w-[50%] mx-auto sm:w-full sm:col-span-2 aspect-[1/1.3]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.5.webp',
						layoutClasses: 'w-[50%] mx-auto sm:mx-0 sm:w-[80%] sm:col-span-2 aspect-[1/1.1]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.6.webp',
						layoutClasses:
							'w-[50%] mx-auto sm:mx-0 sm:w-[80%] sm:col-span-2 aspect-[1/1.1] sm:-translate-x-[1.75rem]'
					},
					{
						path: '',
						layoutClasses:
							'w-[50%] mx-auto sm:mx-0 sm:w-full sm:col-span-2 aspect-[1/1.1] opacity-0 visible-none h-0'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.7.webp',
						layoutClasses:
							'w-[50%] mx-auto sm:mx-0 sm:w-full sm:col-span-2 aspect-[1/0.64] sm:scale-[1.1]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.8.webp',
						layoutClasses: 'w-[90%] mx-auto sm:mx-0 sm:w-full sm:col-span-4 aspect-[1/0.79]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.9.webp',
						layoutClasses: 'w-[90%] sm:w-[80%] mx-auto sm:col-span-4 aspect-[1/0.84]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.10.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.85]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.11.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.85]'
					}
				],
				title: 'Concept',
				body: [
					'Primarily draws inspiration from Japanese Kintsugi philosophy, symbolizing the transformative power of healing and the beauty in embracing one’s imperfections and struggles.',
					'This approach is centered on navigating the intricate mental state of PTSD, aims to dismantle stigma, educate the public, and cultivate an environment of empathy for those affected by PTSD.'
				],
				contentClasses: 'sticky self-start'
			}
		]
	},
	{
		name: 'Community Market',
		slug: slugify('Community Market'),
		year: 2024,
		type: 'Public Space Design',
		coverImage: {
			path: '/interiors/projects/list-page/coma.webp',
			layoutClasses: 'col-start-3 col-span-2',
			layoutClassesMobile: 'w-[19.5rem] row-start-2 col-start-4'
		},
		location: 'Thanyaburi, Pathum Thani, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/cm/showcase/cm-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.22]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-end'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-end'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-6.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-center'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-8.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-center'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-9.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-end'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-10.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-11.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/cm/showcase/cm-12.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-center'
			}
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-1.1.webp',
						layoutClasses:
							'w-[90%] sm:w-full mx-auto sm:mx-0 order-2 sm:order-1 sm:col-span-1 aspect-[1/0.4] sm:scale-[1.75] origin-left -translate-y-[1.5rem] sm:translate-y-[40rem]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-1.2.webp',
						layoutClasses: 'w-full sm:col-span-3 aspect-[1/0.81]'
					}
				],
				title: 'Abstract',
				body: [
					'Around the site area, the contrasting absence of large green spaces, coupled with inadequate walkability, presents significant urban challenges. The dense urban fabric, predominantly filled with buildings and concrete, lacks substantial green areas.',
					'Moreover, the insufficient pedestrian infrastructure, characterized by limited pathways and congested streets, severely restricts safe and comfortable pedestrian movement, diminishing the quality of urban life.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.1.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.92]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.2.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.88] self-center'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.3.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.87]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.4.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.23]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.5.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[0.71/1]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.6.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[0.71/1]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.7.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.3]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.8.webp',
						layoutClasses: 'w-[90%] mx-auto sm:mx-0 sm:w-full sm:col-span-2 aspect-[1/0.68]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.9.webp',
						layoutClasses: 'w-[90%] mx-auto sm:mx-0 sm:w-full sm:col-span-2 aspect-[1/0.68]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.10.webp',
						layoutClasses:
							'w-[90%] mx-auto sm:mx-0 pb-5 sm:pb-0 sm:w-full sm:col-span-4 aspect-[1/0.36]'
					}
				],
				title: 'Concept',
				body: [
					"The concept for the market place and community gathering space at Suchat Market is inspired by the idea of a 'junction of journeys', symbolizing the convergence of diverse backgrounds and paths.",
					'This approach is centered on navigating the intricate mental state of PTSD, aims to dismantle stigma, educate the public, and cultivate an environment of empathy for those affected by PTSD.'
				],
				contentClasses: 'sticky self-start'
			}
		]
	},
	{
		name: 'Factory Town House',
		slug: slugify('Factory Town House'),
		year: 2023,
		type: 'Residential Design',
		coverImage: {
			path: '/interiors/projects/list-page/ft.webp',
			layoutClasses: 'col-span-2 row-start-1 col-start-5',
			layoutClassesMobile: 'w-[19.5rem] col-span-2'
		},
		location: 'Uthai Thani, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/fth/showcase/fth-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56] self-center'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-3.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.12] self-center'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.12]'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-6.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-7.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			},
			{
				path: '/interiors/projects/fth/showcase/fth-8.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			}
		]
	},
	{
		name: 'Bauhaus Airbnb',
		slug: slugify('Bauhaus Airbnb'),
		year: 2024,
		type: 'Residential Design',
		coverImage: {
			path: '/interiors/projects/list-page/airbnb.webp',
			layoutClasses: '',
			layoutClassesMobile: ''
		},
		location: 'Bangkok, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/ba/showcase/ba-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1]'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1.3/1] self-center'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-3.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.38]'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.25] self-end'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.25]'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-6.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.56]'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-7.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.25]'
			},
			{
				path: '/interiors/projects/ba/showcase/ba-8.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.25]'
			}
		]
	},
	{
		name: 'Yuki Mugi Bakery',
		slug: slugify('Yuki Mugi Bakery'),
		year: 2022,
		type: 'Retail Design',
		coverImage: {
			path: '/interiors/projects/list-page/ykmg.webp',
			layoutClasses: '',
			layoutClassesMobile: ''
		},
		location: 'Central Boulevard, Yangon, Myanmar',
		showcaseImages: [
			{
				path: '/interiors/projects/ymb/showcase/ymb-1.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.04]'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75] self-end'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75] self-end'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-6.webp',
				layoutClasses: 'h-[15.33vh] sm:h-[20vh] aspect-[1/0.75] self-center'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-7.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.75]'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-8.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/2.45]'
			},
			{
				path: '/interiors/projects/ymb/showcase/ymb-9.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1.41/1]'
			}
		]
	},
	{
		name: 'Another Club',
		slug: slugify('Another Club'),
		year: 2021,
		type: 'Retail Design',
		coverImage: {
			path: '/interiors/projects/list-page/ac.webp',
			layoutClasses: '',
			layoutClassesMobile: 'w-[9rem]'
		},
		location: 'Central Boulevard, Yangon, Myanmar',
		showcaseImages: [
			{
				path: '/interiors/projects/ac/showcase/ac-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1]'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1]'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1] self-end'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1] self-end'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1]'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-6.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1] self-center'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1] self-end'
			},
			{
				path: '/interiors/projects/ac/showcase/ac-8.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.49] self-end'
			}
		]
	}
]
// h-[46vh] sm:h-[60vh]
// h-[30.67vh] sm:h-[40vh]
// h-[15.33vh] sm:h-[20vh]
