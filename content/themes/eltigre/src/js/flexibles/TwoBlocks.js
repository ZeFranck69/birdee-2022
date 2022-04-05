import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class TwoBlocks {
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
		const TwoBlocks = this.section.querySelector('.two-blocks-wrapper');
		const title = TwoBlocks.querySelector('.text-part__title');
		const description = banner.querySelector('.text-part__description');
		const buttons = TwoBlocks.querySelector('.buttons-wrapper__list');
		const button = buttons.querySelectorAll('.cta-wrapper');
		const ImagePart = banner.querySelector('.picto-only');
		const operators = TwoBlocks.querySelector('.operators__list');
		// const operator = operators.querySelectorAll('.operator-wrapper');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(
				description,
				{ scale: 0.8, y: 100, autoAlpha: 0 },
				{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.25 }
			)
			.fromTo(button, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.01, duration: 0.35 })
			.fromTo(ImagePart, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.01, duration: 0.25 });
		if (operators) {
			const operatorAnimation = gsap
				.timeline()
				.fromTo(operators, 0.3, { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
			timeline.add(operatorAnimation);
		}
		ScrollTrigger.create({
			trigger: TwoBlocks,
			start: 'top bottom-=1%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default TwoBlocks;
