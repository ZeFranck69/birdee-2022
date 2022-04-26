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
			this.result[0] = 50;
			this.result[1] = 10;
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
					const initialDepot = Math.round(parseInt(this.result[0]) * Math.pow(1 + 0.0053, 180) * 100) / 100;
					const reccurentDepot =
						Math.round(parseInt(this.result[1]) * ((Math.pow(1 + 0.0053, 180) - 1) / 0.0053) * 100) / 100;

					const operation = initialDepot + reccurentDepot;
					saving.innerHTML = operation.toLocaleString();

					// Mettre l'operation de comparaison ici
					const initialDepotEpargne = Math.round(parseInt(this.result[0]) * Math.pow(1 + 0.00083, 180) * 100) / 100;
					const reccurentDepotEpargne =
						Math.round(parseInt(this.result[1]) * ((Math.pow(1 + 0.00083, 180) - 1) / 0.00083) * 100) / 100;
					const operationEpargne = initialDepotEpargne + reccurentDepotEpargne;
					console.log(reccurentDepotEpargne);
					comparison.innerHTML = operationEpargne.toLocaleString();
				},
				false
			);
			// Mettre l'operation ici
			const initialDepot = Math.round(parseInt(this.result[0]) * Math.pow(1 + 0.0053, 180) * 100) / 100;
			const reccurentDepot =
				Math.round(parseInt(this.result[1]) * ((Math.pow(1 + 0.0053, 180) - 1) / 0.0053) * 100) / 100;

			const operation = initialDepot + reccurentDepot;
			saving.innerHTML = operation.toLocaleString();

			// Mettre l'operation de comparaison ici
			const initialDepotEpargne = Math.round(parseInt(this.result[0]) * Math.pow(1 + 0.00083, 180) * 100) / 100;
			const reccurentDepotEpargne =
				Math.round(parseInt(this.result[1]) * ((Math.pow(1 + 0.00083, 180) - 1) / 0.00083) * 100) / 100;
			const operationEpargne = initialDepotEpargne + reccurentDepotEpargne;
			console.log(reccurentDepotEpargne);
			comparison.innerHTML = operationEpargne.toLocaleString();
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
