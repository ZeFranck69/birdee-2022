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
		const result = [];
		const saving = document.querySelector('.saving');
		const reject = document.querySelector('.rejected');
		var ranges = document.querySelectorAll('.range-slider');
		ranges.forEach((range) => {
			var rangesSlider = range.querySelector('.rs-range-line');
			var rangeBullet = range.querySelector('.rs-bullet');
			range.addEventListener('input', showSliderValue, false);

			function showSliderValue() {
				rangeBullet.innerHTML = rangesSlider.value;

				var bulletPosition = rangesSlider.value / rangesSlider.max;
				rangeBullet.style.left = bulletPosition * 578 + 'px';
			}
		});
	}
}

export default Performances;
