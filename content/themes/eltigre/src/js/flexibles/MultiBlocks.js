import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class MultiBlocks {
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
		const multiBlocks = this.section.querySelector('.multi-block-wrapper');
		const title = multiBlocks.querySelector('.section-part__title');
		const blocks = multiBlocks.querySelector('.multi-block__wrapper-list');
		const block = blocks.querySelectorAll('.block');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(block, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3, duration: 0.35 });

		ScrollTrigger.create({
			trigger: multiBlocks,
			start: 'top bottom-=1%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default MultiBlocks;
