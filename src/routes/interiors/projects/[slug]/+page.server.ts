import { error } from '@sveltejs/kit'
import projects from '$lib/interiors/fixtures/projects'

export const load = async ({ params }) => {
	const { slug } = params
	const project = projects.find((project) => project.slug === slug)

	if (!project) {
		throw error(404, 'Project not found')
	}

	return { project }
}
