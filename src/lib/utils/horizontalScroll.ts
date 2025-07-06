import { browser } from '$app/environment'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function (node: HTMLElement, options: { extra?: number } = {}) {
	if (!browser) return
	gsap.registerPlugin(ScrollTrigger)

	const parent = node
	const container = parent.children[0] as HTMLElement
	const wrapper = container.children[0] as HTMLElement
	container.style.height = `${wrapper.scrollWidth + (options.extra ?? 0)}px`
	node.style.overscrollBehavior = 'none'

	const getScrollAmount = () => {
		let wrapperWidth = wrapper.scrollWidth
		return -(wrapperWidth - window.innerWidth)
	}

	const tween = gsap.to(wrapper, {
		x: getScrollAmount,
		duration: 3,
		ease: 'none'
	})

	const scrollTrigger = ScrollTrigger.create({
		scroller: parent,
		trigger: container,
		start: 'top top',
		end: () => `+=${getScrollAmount() * -1}`,
		animation: tween,
		scrub: 1,
		invalidateOnRefresh: true
	})

	return {
		destroy() {
			tween.kill()
			scrollTrigger.kill()
		}
	}
}
