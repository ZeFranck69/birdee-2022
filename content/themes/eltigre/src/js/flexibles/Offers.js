import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Offers {
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

		const titlesJob = document.querySelectorAll('.dropdown-toggle');

		titlesJob.forEach((titleJob) => {
			titleJob.addEventListener('click', () => {
				titleJob.classList.toggle('active');
			});
		});

		// this.animate();
	}
	// animate() {
	// 	const collabWrapper = this.section.querySelector('.collaborators-container');
	// 	const title = collabWrapper.querySelector('.section-part__title');
	// 	const description = collabWrapper.querySelector('.section-part__description');
	// 	const collabs = collabWrapper.querySelector('.collaborators__list');
	// 	const block = collabs.querySelectorAll('.collaborator-wrapper');

	// 	const animation = gsap
	// 		.timeline()
	// 		.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
	// 		.fromTo(description, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
	// 		.fromTo(block, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3, duration: 0.35 });

	// 	ScrollTrigger.create({
	// 		trigger: collabWrapper,
	// 		start: 'top bottom-=1%',
	// 		toggleActions: 'play none none reverse',
	// 		animation,
	// 	});
	// }
}

export default Offers;
