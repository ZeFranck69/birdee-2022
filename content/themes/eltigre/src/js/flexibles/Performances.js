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
		this.modalManager();
		const saving = document.querySelector('.saving');
		const reject = document.querySelector('.rejected');
		const comparison = document.querySelector('.comparison');
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

					// Mettre l'operation ici
					const operation = parseInt(this.result[0]) * parseInt(this.result[1]);
					// Mettre l'operation de comparaison ici
					saving.innerHTML = operation.toLocaleString();
				},
				false
			);
		});
	}
	modalManager() {
		const link = document.querySelector('.link');
		const modal = document.querySelector('.modal');
		const closeBtn = document.querySelector('.close');
		const closeWindow = document.querySelector('.modal.open');
		link.addEventListener('click', function () {
			modal.classList.add('open');
			if (modal.classList.contains('closed')) {
				modal.classList.remove('closed');
				modal.classList.add('open');
			} else if (modal.classList.contains('open')) {
				modal.classList.remove('open');
				modal.classList.add('closed');
			}
		});

		closeBtn.addEventListener('click', function () {
			modal.classList.remove('open');
			modal.classList.add('closed');
		});
		if (closeWindow) {
			window.addEventListener('click', function () {
				modal.classList.remove('open');
				modal.classList.add('closed');
			});
		}
	}
}

export default Performances;
