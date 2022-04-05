import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class TextImage {
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
		const textImage = this.section.querySelector('.text-image-wrapper');
		const textPart = textImage.querySelector('.text-part__container');
		const title = textPart.querySelector('.text-part__title');
		const description = textPart.querySelector('.text-part__description');
		const enumerationWrapper = textPart.querySelector('.text-image__enumerations-container');
		if (enumerationWrapper) {
			const enumeration = enumerationWrapper.querySelectorAll('.enumeration-block');
		}
		// const descriptions = textImage.querySelector('.text-image__descriptions-container');
		// const block = descriptions.querySelectorAll('.enumeration-block');

		const ImagePart = textImage.querySelector('.text-image__image');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(
				description,
				{ scale: 0.8, y: 100, autoAlpha: 0 },
				{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.25 }
			)
			.fromTo(ImagePart, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.01, duration: 0.25 });
		// if (enumerationWrapper) {
		// 	const enumerationAnimation = gsap
		// 		.timeline()
		// 		.fromTo(enumeration, { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.55, duration: 0.35 });
		// 	.add(enumerationAnimation);
		// }
		// if (descriptions) {
		// 	const descriptionAnimation = gsap
		// 		.timeline()
		// 		.fromTo(block, { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.55, duration: 0.35 });
		// 	timeline.add(descriptionAnimation);
		// }

		ScrollTrigger.create({
			trigger: textImage,
			start: 'top bottom-=1%',
			toggleActions: 'play none none reverse',
			animation,
		});
	}
}

export default TextImage;
