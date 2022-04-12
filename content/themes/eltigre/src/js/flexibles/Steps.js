import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Steps {
	constructor(className) {
		this.sections = document.querySelectorAll(`.${className}`);
		this.sections.forEach((section) => {
			new Section(section);
		});
	}
}
class Section {
	constructor(section) {
		this.section = section;
		this.animate();
	}
	animate() {
		const steps = this.section.querySelector('.steps-container');
		const title = steps.querySelector('.steps__section-title');
		const description = steps.querySelector('.steps__section-description');
		const blocks = steps.querySelector('.steps-wrapper');
		const block = blocks.querySelectorAll('.step__container');
		const button = steps.querySelector('.section-steps__cta-wrapper');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(
				description,
				{ scale: 0.8, y: 100, autoAlpha: 0 },
				{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
			)
			.fromTo(block, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.6, duration: 0.35 })
			.fromTo(
				button,
				{ scale: 0.8, y: 15, autoAlpha: 0 },
				{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
			);
		ScrollTrigger.create({
			trigger: steps,
			start: 'top bottom-=1%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default Steps;
