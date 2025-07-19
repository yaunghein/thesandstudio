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
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive space to connect, learn, and thrive within a vibrant community.'
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
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive space to connect, learn, and thrive within a vibrant community.'
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
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive space to connect, learn, and thrive within a vibrant community.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cyc/detail/new-2.1.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.5]'
					}
				],
				title: 'Site Analysis',
				body: [
					'The existing site is an underdeveloped public park, named Kan Thar Yar Park, adjacent to Inya Park premises and it is located at the corner of two main roads used in the city. The front façade of Kantharyar Park, facing southeast, is optimally positioned to capture the morning sunlight.',
					'This aspect ensures a cooler solar exposure during the early hours of the day, making it ideal for morning activities. Alternately, the park’s back façade, facing northwest and Inya Lake, receives the more intense afternoon sun.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cyc/detail/new-3.1.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/1.32] scale-[0.75]'
					},
					{
						path: '/interiors/projects/cyc/detail/cyc-detail-2.1.webp',
						layoutClasses: 'w-full sm:col-span-2 self-center aspect-[1/0.72]'
					},
					{
						path: '/interiors/projects/cyc/detail/new-3.3.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.56] -mt-5 sm:mt-0'
					}
				],
				title: 'Site Analysis',
				body: [
					"Drawing inspiration from a butterfly's metamorphosis, this concept highlights the profound changes young people experience as they grow from teenagers to adults. Just as a butterfly emerged from its cocoon, transformed and ready to soar, the youth at this center are envisioned on a similar transformative path.",
					'This concept not only signifies physical growth but also an evolution of identity, perspective, and emotional maturity. In this sense, the center acts as both a cocoon and a nest, providing a nurturing space where youth can safely transform and flourish.'
				],
				contentClasses: 'self-start sm:mt-[13rem] sticky'
			},
			{
				images: [
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
					'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.',
					'The volume is split into three layers, establishing functional zoning and a clear spatial hierarchy. A central void acts as a connective element, unifying the two primary masses, ensuring spatial continuity. Incorporation of green voids integrate nature into the interior, creating communal spaces that are naturally inviting.'
				],
				contentClasses: 'sticky self-start sm:mt-[13rem]'
			}
		]
	},
	{
		name: 'Unseen Battle: PTSD Awareness Exhibition',
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
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.62]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-3.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/2.08]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.85] self-end'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.85]'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-6.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.28] self-center'
			},
			{
				path: '/interiors/projects/ptsd/showcase/ptsd-7.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-square'
			}
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-1.1.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.52]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-1.2.webp',
						layoutClasses: 'w-[85%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.56]'
					}
				],
				title: 'Abstract',
				body: [
					'Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event. The aim of this exhibition is to increase awareness and understanding of Post-Traumatic Stress Disorder (PTSD), creating a supportive community for affected individuals.',
					'The exhibition is designed to illuminate the healing process, highlighting various pathways to recoveryand showcasing the resilience and strength that can emerge from navigating the challenges of PTSD.'
				],
				contentClasses: 'sticky self-start sm:mt-[10rem]'
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.1.webp',
						layoutClasses: 'w-[65%] sm:w-[75%] mx-auto sm:col-span-2 aspect-[1/1.55] self-center'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-2.2.webp',
						layoutClasses:
							'w-[70%] sm:w-[75%] mx-auto sm:col-span-2 aspect-[1/2.06] sm:scale-[0.75]'
					}
				],
				title: 'What is PTSD?',
				body: [
					'Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event. Symptoms include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event. Triggers can include sights, sounds, smells, or thoughts that remind the person of the traumatic event.',
					'Addressing PTSD is rare yet it affects millions worldwide, influencing mental health, daily functioning, and overall well-being. Raising awareness helps reduce stigma, encourages early intervention, and promotes access to support and treatment.',
					'References:<br/> PMC Article - <a class="underline underline-offset-2" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6034513" target="_blank">https://pmc.ncbi.nlm.nih.gov/articles/PMC6034513</a><br /> PTSD VA - <a class="underline underline-offset-2" href="https://www.ptsd.va.gov/PTSD/professional/articles/article-pdf/" target="_blank">https://www.ptsd.va.gov/PTSD/professional/articles/article-pdf/</a>'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-3.1.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.77]'
					}
				],
				title: 'Site Analysis',
				body: [
					'BITEC, one of Bangkok’s major convention and exhibition centers, is a key hub for large-scale events, business, and cultural gatherings. Its north-facing facade reduces direct sunlight exposure but increases reliance on air conditioning in Bangkok’s tropical climate.',
					'The south-to-north prevailing winds offer opportunities for passive cooling, though artificial cooling remains essential for maintaining thermal comfort, stable lighting, and controlled humidity in exhibition spaces.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-4.1.webp',
						layoutClasses: 'w-full sm:col-span-3 aspect-[1/0.76]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-4.2.webp',
						layoutClasses:
							'w-full self-center aspect-[1/1.34] sm:translate-x-[4rem] scale-[0.75] sm:scale-[1]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-4.3-new.webp',
						layoutClasses:
							'w-full sm:col-span-2 self-center aspect-[1/1.01] scale-[0.5] sm:scale-[0.75] -mt-[7.5rem] sm:mt-0'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-4.4-new.webp',
						layoutClasses:
							'w-full sm:col-span-2 aspect-[1/1.3] origin-center sm:origin-right self-end scale-[0.75] sm:scale-[1] -mt-[7.5rem] sm:mt-0'
					}
				],
				title: 'Concept Development',
				body: [
					'Primarily drawing inspiration from Japanese Kintsugi philosophy, which highlights the art of mending broken pottery with gold, emphasizing that flaws and fractures are not meant to be hidden but celebrated as part of an object’s history. This philosophy reasonates with the journey of mental health and PTSD recovery, where healing is not about erasing scars but embracing them as a testament to resilience and growth.',
					'This approach is centered on navigating the intricate mental state of PTSD, acknowledging the fragility of the human experience while reinforcing resilience through design and spatial storytelling. It aims to dismantle stigma, educate the public, and cultivate an environment of empathy for those'
				],
				contentClasses: 'sticky self-start sm:mt-[5rem]'
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-5.1.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.96] sm:scale-[0.75]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-5.2.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.84] sm:scale-[0.75]'
					}
				],
				title: 'Space Planning',
				body: [
					'The space planning diagram illustrates a structured flow of movement from entry to exit, ensuring a logical and intuitive experience for users. Circulation is designed to be fluid, with clear movement pathways guiding users from high-activity zones to more transitional spaces, ensuring a smooth flow toward the exit zone. The adjacency strategy maintains logical spatial relationships, positioning active zones near engagement areas while separating less active spaces for a balanced environment.'
				],
				contentClasses: 'sticky self-start sm:mt-[5rem]'
			},
			{
				images: [
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-6.1.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.79] sm:scale-[0.9]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-6.2.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.85]'
					},
					{
						path: '/interiors/projects/ptsd/detail/ptsd-detail-6.3.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.85]'
					}
				],
				title: 'Exhibition Experience Mapping',
				body: [],
				contentClasses: 'sticky self-start sm:mt-[36rem]'
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
						layoutClasses: 'w-full sm:col-span-3 order-1 sm:order-2 aspect-[1/0.81]'
					}
				],
				title: 'Abstract',
				body: [
					'In collaboration with Thammasat University, this public space project aims to address urban challenges in the surrounding area by enhancing greenery, pedestrian accessibility, and community engagement. The dense urban fabric, dominated by buildings and concrete, lacks substantial green spaces, limiting social interaction and environmental benefits.',
					'Additionally, poor pedestrian infrastructure, characterized by narrow pathways and congested streets, restricts safe and comfortable movement, diminishing urban quality. Through landscape interventions, widened walkways, and inclusive urban design, the project seeks to create a more livable, sustainable, and pedestrian-friendly environment for both the university community and the broader public.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-2.1.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.87] sm:scale-[0.75]'
					}
				],
				title: 'Site Analysis',
				body: [
					'Suchat Market, situated in the Thanyaburi District of Pathum Thani near Bangkok, lies in a dynamic region marked by its blend of residential and commercial shophouses, contributing to a vibrant community atmosphere.',
					'The surrounding medium to high-density development, featuring a mix of multi-story residential buildings and commercial establishments, reflects an integrated and culturally rich urban fabric.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-3.1.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.92]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-3.2.webp',
						layoutClasses: 'w-full sm:col-span-2 aspect-[1/0.88] self-center sm:scale-[0.75]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-3.3.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.2275]'
					}
				],
				title: 'Concept Development',
				body: [
					'The concept is inspired by the idea of a ‘junction of journeys’, symbolizing the convergence of diverse backgrounds and paths. This envisions the market as a central hub, akin to how markets traditionally evolve around religious structures like temples, fostering community growth and interaction.',
					'Adding a layer of local cultural context, the inspiration was drawn from the intricate layouts and designs of Thai ancient temple compounds. '
				],
				contentClasses: 'sticky self-start sm:mt-[5rem]'
			},
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-4.1.webp',
						layoutClasses: 'w-[60%] mx-auto sm:col-span-4 aspect-[1/0.68]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-4.2.webp',
						layoutClasses: 'w-[60%] mx-auto sm:col-span-4 aspect-[1/0.68]'
					}
				],
				title: 'Space Planning',
				body: [
					'Ground Level serves as a commercial and social hub, with a central outdoor market linking the food court, indoor market, pet area, and kids’ area. Multiple outdoor seating areas enhance interaction, while entry points and circulation paths ensure smooth movement. Amenities such as toilets, lounges, and admin areas are strategically placed for convenience.',
					'Upper Level shifts focus to community engagement, featuring outdoor gathering areas that connect to the community hall and library + coworking space. These spaces encourage learning, collaboration, and events, with stairs and lifts ensuring seamless vertical access.'
				],
				contentClasses: 'sticky self-start sm:mt-[5rem]'
			},
			{
				images: [
					{
						path: '/interiors/projects/cm/detail/cm-detail-5.1.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-4 aspect-[1/0.35]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-5.2.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[0.71/1]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-5.3.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[0.71/1]'
					},
					{
						path: '/interiors/projects/cm/detail/cm-detail-5.4.webp',
						layoutClasses: 'w-full sm:col-span-4 aspect-[1/0.3]'
					}
				],
				title: 'Experience Mapping',
				body: [],
				contentClasses: 'sticky self-start sm:mt-[12rem]'
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
				path: '/interiors/projects/fth/showcase/fth-3-new.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.58]'
			}
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-3.webp',
			// 	layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.56]'
			// },
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-4.webp',
			// 	layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.12] self-center'
			// },
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-5.webp',
			// 	layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/1.12]'
			// }
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-6.webp',
			// 	layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			// },
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-7.webp',
			// 	layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			// },
			// {
			// 	path: '/interiors/projects/fth/showcase/fth-8.webp',
			// 	layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.34]'
			// }
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/fth/detail/fth-detail-1.1.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[1/0.68]'
					},
					{
						path: '/interiors/projects/fth/detail/fth-detail-1.2.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[1/0.68]'
					},
					{
						path: '/interiors/projects/fth/detail/fth-detail-1.3.webp',
						layoutClasses: 'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[1/0.68] sm:-mt-[7.5rem]'
					},
					{
						path: '/interiors/projects/fth/detail/fth-detail-1.4.webp',
						layoutClasses:
							'w-[90%] sm:w-full mx-auto sm:col-span-2 aspect-[1/0.68] sm:-mt-[7.5rem] pb-5 sm:pb-0'
					}
				],
				title: 'Description',
				body: [
					'The Factory Townhouse Project is a residential development located within a factory compound, designed to seamlessly integrate living spaces within an industrial environment. The architectural language embraces industrial aesthetics, incorporating raw materials, clean lines, and practical layouts that complement the surrounding factory structures.',
					'The project involved comprehensive 3D modeling and visualization, ensuring an accurate representation of spatial compositions, materiality, and daylight penetration.',
					'Client: NC Architects'
				],
				contentClasses: ''
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
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/ba/detail/ba-detail-1.1.webp',
						layoutClasses: 'w-[90%] sm:w-[60%] mx-auto sm:col-span-4 aspect-[1/1.25]'
					}
				],
				title: 'Abstract',
				body: [
					'The Bauhaus movement (1919) aimed to combine fine arts and crafts with technology and industry. Bauhaus tried to bring together various forms of art, such as architecture, painting, interior design, and typography, in order to break down barriers between art disciplines.',
					'The project involves designing a functional, aesthetic, and inviting Airbnb holiday home influenced by Bauhaus principles of simplicity and functionality within a compact 26 square meter (7.2 m x 3.6 m) space with a height of 3 meters. This consists of a living room, a kitchen, a bedroom with an open floor plan, and a private bathroom.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ba/detail/ba-detail-2.1.webp',
						layoutClasses:
							'w-full mx-auto sm:col-span-4 aspect-[1/0.37] -translate-x-4 sm:translate-x-0'
					},
					{
						path: '/interiors/projects/ba/detail/ba-detail-2.2.webp',
						layoutClasses:
							'w-[75%] sm:w-full mx-auto sm:col-span-2 aspect-[1/1.61] sm:scale-[0.75] origin-right'
					},
					{
						path: '/interiors/projects/ba/detail/ba-detail-2.3.webp',
						layoutClasses:
							'w-[75%] sm:w-full mx-auto sm:col-span-2 aspect-[1/1.36] self-end sm:scale-[0.75] origin-left pb-5 sm:pb-0'
					}
				],
				title: 'Concept & Direction',
				body: [
					'Bauhaus design emphasizes balance, function, and minimalism, utilizing a colour palette of industrial shades like white, grey, and beige. It often coporates primary colors in interior design in intentional ways, while promoting simplicity and industrialism by limiting materials to essentials such as glass, plywood, concrete, and steel.'
				],
				contentClasses: 'sticky self-start sm:mt-[10rem]'
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
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/ymb/detail/ymb-detail-1.1.webp',
						layoutClasses:
							'w-[90%] sm:w-[50%] mx-auto sm:col-span-4 aspect-[1/1.05] sm:translate-x-[8rem]'
					}
				],
				title: 'Description',
				body: [
					'Yuki Mugi Bakery & Café embodies a fusion of Japanese minimalism and Scandinavian warmth, creating a serene yet inviting atmosphere. The design concept focuses on simplicity, functionality, and natural materials, reflecting the bakery’s commitment to authentic craftsmanship and quality ingredients. The space is designed to be both calm and welcoming, evoking a sense of purity and refinement through its carefully curated material palette and lighting.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ymb/detail/ymb-detail-2.1.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.77]'
					}
				],
				title: 'Ground Floor',
				body: [
					'The ground floor serves as the heart of the bakery, combining a functional kitchen, bakery display, and shopfloor into a seamless retail experience. Warm wood tones contrast with crisp white walls, creating a clean and inviting environment.',
					'The display areas are designed for maximum visibility and accessibility, showcasing freshly baked goods while maintaining an airy, uncluttered space. The integration of soft lighting and natural textures enhances the sensory experience.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ymb/detail/ymb-detail-3.1.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1/0.78] pb-5 sm:pb-0'
					}
				],
				title: 'First Floor',
				body: [
					'The first floor transitions into a relaxed café setting, providing a tranquil retreat for customers. A mix of communal tables, lounge seating, and bar counters encourages a variety of dining experiences, from quiet moments to social gatherings. staff room and restroom are discreetly integrated to support operational efficiency without disrupting the café’s open, airy feel.'
				],
				contentClasses: ''
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
		],
		details: [
			{
				images: [
					{
						path: '/interiors/projects/ac/detail/ac-detail-1.1.webp',
						layoutClasses:
							'w-[90%] sm:w-[50%] mx-auto sm:col-span-4 aspect-[1/1] sm:translate-x-[8rem]'
					}
				],
				title: 'Description',
				body: [
					'Reimagined with textured materials and a subdued palette, Another Club at Central Boulevard offers a balance of sophistication and modern comfort. The design integrates black industrial elements and brand’s personalities, creating a contemporary yet timeless atmosphere.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ac/detail/ac-detail-2.1.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1.81/1]'
					}
				],
				title: 'Ground Floor',
				body: [
					'The ground floor features an open lounge area with leather sofas, a sleek bar counter, and high bar seating, establishing a dynamic yet intimate setting.'
				],
				contentClasses: ''
			},
			{
				images: [
					{
						path: '/interiors/projects/ac/detail/ac-detail-3.1.webp',
						layoutClasses: 'w-[90%] sm:w-[75%] mx-auto sm:col-span-4 aspect-[1.82/1] pb-5 sm:pb-0'
					}
				],
				title: 'First Floor',
				body: [
					'The first floor expands into additional lounge spaces, providing exclusivity, while the overall design enhances seamless circulation and spatial depth, elevating the social dining experience.'
				],
				contentClasses: ''
			}
		]
	}
]
// h-[46vh] sm:h-[60vh]
// h-[30.67vh] sm:h-[40vh]
// h-[15.33vh] sm:h-[20vh]
