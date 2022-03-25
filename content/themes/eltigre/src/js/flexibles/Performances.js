import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Performances {
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
		var rangesSlider = document.querySelectorAll('.rs-range-line');
		var rangeBullet = document.querySelectorAll('.rs-bullet');
		rangesSlider.forEach((range) => {
			range.addEventListener('input', showSliderValue, false);
		});

		function showSliderValue() {
			rangesSlider.forEach((slider) => {
				rangeBullet.forEach((bullet) => {
					bullet.innerHTML = slider.value;
					var bulletPosition = slider.value / slider.max;
					bullet.style.left = bulletPosition * 578 + 'px';
				});
			});
		}
	}
	// animate() {
	// 	const themesSection = this.section.querySelector('.performances .main-wrapper');
	// 	const themes = themesSection.querySelector('.simple-title');
	// 	const animation = gsap
	// 		.timeline()
	// 		.fromTo(
	// 			themes,
	// 			{ y: 100, scale: 0.7, autoAlpha: 0 },
	// 			{ y: 0, scale: 1, autoAlpha: 1, stagger: 0.3, duration: 0.3 }
	// 		);
	// 	ScrollTrigger.create({
	// 		trigger: themesSection,
	// 		start: 'top bottom-=5%',
	// 		toggleActions: 'play none none reverse',
	// 		animation,
	// 	});
	// }
}

export default Performances;
