import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Quote {
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
		const quoteWrapper = this.section.querySelector('.quote__container');
		const quote = quoteWrapper.querySelector('.quote-content__title');
		const description = quoteWrapper.querySelector('.quote-content__description');
		const photo = quoteWrapper.querySelector('.quote__image-part');

		const animation = gsap
			.timeline()
			.fromTo(quote, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(description, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(photo, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3, duration: 0.35 });

		ScrollTrigger.create({
			trigger: quoteWrapper,
			start: 'top bottom-=1%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default Quote;
