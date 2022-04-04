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
		this.result = [];
		this.section = section;
		const saving = document.querySelector('.saving');
		const reject = document.querySelector('.rejected');
		const ranges = document.querySelectorAll('.range-slider');
		saving.innerHTML = 0;
		reject.innerHTML = 0;
		ranges.forEach((range) => {
			const { key } = range.dataset;

			range.addEventListener(
				'input',
				() => {
					const rangesSlider = range.querySelector('.rs-range-line');
					const rangeBullet = range.querySelector('.rs-bullet');
					rangeBullet.innerHTML = rangesSlider.value;
					const bulletPosition = (rangesSlider.value / rangesSlider.max) * 100;
					const maxWidth = rangesSlider.clientWidth;
					rangeBullet.style.left = maxWidth * (bulletPosition / 100) + 'px';
					this.result[key] = rangesSlider.value;
					const operation = parseInt(this.result[0]) * parseInt(this.result[1]);
					console.log(operation);
					saving.innerHTML = operation;
				},
				false
			);
		});
	}

	updateValue() {}
}

export default Performances;
