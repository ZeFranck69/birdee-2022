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
		const surtitle = textPart.querySelector('.text-part__surtitle');
		const button = textPart.querySelector('.text-image__cta-wrapper');
		const description = textPart.querySelector('.text-part__description');
		const enumerationWrapper = textPart.querySelector('.text-image__enumerations-container');
		const ImagePart = textImage.querySelector('.text-image__image');

		const animation = gsap.timeline();
		animation.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		if (surtitle) {
			animation.fromTo(surtitle, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		}
		if (button) {
			animation.fromTo(button, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 });
		}
		animation.fromTo(
			description,
			{ scale: 0.8, y: 100, autoAlpha: 0 },
			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.25 }
		);
		animation.fromTo(ImagePart, { y: 70, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.15, duration: 0.25 });
		if (enumerationWrapper) {
			const enumeration = enumerationWrapper.querySelectorAll('.enumeration-block');
			animation.fromTo(enumeration, { y: 150, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.55, duration: 0.35 });
		}

		ScrollTrigger.create({
			trigger: textImage,
			start: 'top bottom-=1%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default TextImage;
