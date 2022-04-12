import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class PreFooter {
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
		const preFooter = this.section.querySelector('.prefooter__container');
		const title = this.section.querySelector('.prefooter-content__title');
		const textPart = preFooter.querySelector('.prefooter__content');
		const description = textPart.querySelector('.prefooter-content__description');
		const apps = textPart.querySelector('.prefooter-content__cta-wrapper');
		const app = apps.querySelectorAll('.prefooter-app');
		const imagePart = preFooter.querySelector('.prefooter__image-part');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(
				description,
				{ scale: 0.8, y: 100, autoAlpha: 0 },
				{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
			)
			.fromTo(imagePart, { y: 150, autoAlpha: 0 }, { y: 1, autoAlpha: 1, stagger: 0.27, duration: 0.45 })
			.fromTo(app, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.35, duration: 0.25 });
		ScrollTrigger.create({
			trigger: preFooter,
			start: 'top bottom-=1%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default PreFooter;
