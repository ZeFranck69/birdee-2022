import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Labels {
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
		const labelWrapper = this.section.querySelector('.labels-wrapper');
		const title = labelWrapper.querySelector('.section-part__title');
		const description = labelWrapper.querySelector('.section-part__description');
		const labels = labelWrapper.querySelector('.labels__list');
		const label = labels.querySelectorAll('.label-wrapper');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(description, { y: -80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.35 })
			.fromTo(label, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.25, duration: 0.35 });

		ScrollTrigger.create({
			trigger: labelWrapper,
			start: 'top bottom-=1%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default Labels;
