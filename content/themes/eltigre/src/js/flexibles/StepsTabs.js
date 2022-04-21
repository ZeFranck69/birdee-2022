import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class StepsTabs {
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
		console.log('ici');
		const stepstabs = this.section.querySelector('.steps-tabs .steps-tabs-container');
		const title = stepstabs.querySelector('.steps-tabs__section-title');
		const description = stepstabs.querySelector('.steps__section-description');
		const blocks = stepstabs.querySelector('.tabs');
		const block = blocks.querySelectorAll('.tab .tab-label');
		const button = stepstabs.querySelector('.section-steps__cta-wrapper');

		const animation = gsap.timeline();
		animation.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		animation.fromTo(
			description,
			{ scale: 0.8, y: 100, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
		);
		animation.fromTo(block, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.6, duration: 0.35 });
		animation.fromTo(
			button,
			{ scale: 0.8, y: 15, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
		);
		ScrollTrigger.create({
			trigger: stepstabs,
			start: 'top bottom-=3%',
			toggleActions: 'play none none reset',
			animation,
		});
	}
}

export default StepsTabs;
