import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Simple {
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
		const simple = this.section.querySelector('.simple-wrapper');
		const title = simple.querySelector('.section-part__title');
		const description = simple.querySelector('.section-part__description');
		const button = simple.querySelector('.simple__cta-wrapper');
		const labels = simple.querySelector('.simple__labels-wrapper');

		const animation = gsap.timeline();
		animation.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		animation.fromTo(
			description,
			{ scale: 0.8, y: 100, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
		);
		animation.fromTo(button, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.27, duration: 0.45 });
		if (labels) {
			const label = labels.querySelectorAll('.label-picto');
			animation.fromTo(label, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.01, duration: 0.25 });
		}
		ScrollTrigger.create({
			trigger: simple,
			start: 'top bottom-=5%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default Simple;
