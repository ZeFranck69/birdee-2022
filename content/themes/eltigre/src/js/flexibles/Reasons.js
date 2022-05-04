import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Reasons {
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
		const reasons = this.section.querySelector('.reasons-wrapper');
		const title = reasons.querySelectorAll('.text-part__title');
		const blocks = reasons.querySelector('.reasons-list');
		const block = blocks.querySelectorAll('.reason');
		const textImagePart = reasons.querySelector('.reasons__text-image');

		const button = reasons.querySelector('.reasons__cta-wrapper');
		const animation = gsap.timeline();
		animation.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		animation.fromTo(
			block,
			{ scale: 0.8, y: 100, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
		);
		if (textImagePart) {
			const leftPart = textImagePart.querySelector('.reasons__text-image--left-part');
			animation.fromTo(
				leftPart,
				{ scale: 0.8, x: -100, autoAlpha: 0 },
				{ scale: 1, x: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
			);
		}
		if (textImagePart) {
			const rightPart = textImagePart.querySelector('.reasons__text-image--right-part');
			animation.fromTo(
				rightPart,
				{ scale: 0.8, x: 100, autoAlpha: 0 },
				{ scale: 1, x: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
			);
		}
		animation.fromTo(
			button,
			{ scale: 0.8, y: 15, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
		);
		ScrollTrigger.create({
			trigger: reasons,
			start: 'top bottom-=-4%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default Reasons;
