import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Investment {
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
		const investmentWrapper = this.section.querySelector('.investment-wrapper');
		const title = investmentWrapper.querySelector('.section-part__title');
		const surtitle = investmentWrapper.querySelector('.section-part__surtitle');
		const description = investmentWrapper.querySelector('.section-part__description');
		const collabs = investmentWrapper.querySelector('.investment__list');
		const collab = collabs.querySelectorAll('.collaborator-wrapper');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(surtitle, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(description, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(collab, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3, duration: 0.35 });

		ScrollTrigger.create({
			trigger: investmentWrapper,
			start: 'top bottom-=5%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default Investment;
