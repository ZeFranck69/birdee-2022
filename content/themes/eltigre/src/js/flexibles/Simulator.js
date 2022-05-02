import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Simulator {
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
		const simulatorRange = document.querySelector('.range-slider');
		const range = document.querySelector('.rs-range');
		const valueRangeV = document.querySelector('.valueRangeV');
		const rangeV = document.getElementById('rangeV');
		const topValue = Number(((range.value - range.min) * 100) / (range.max - range.min));
		const topPosition = 10 - topValue * 0.7;
		rangeV.style.left = `calc(${topValue}% + (${topPosition}px))`;

		// Calcul Economies réalisées
		var savingValue = 0;
		var economy = ((range.value * (2 / 100)) / 12 - (range.value * (1 / 100)) / 12) * 2;
		var rendement = Math.pow(1 + 5 / 100, 1 / 6) - 1;

		for (var periode = 0; periode < 60; periode++) {
			var projection = economy * Math.pow(1 + rendement, periode);
			savingValue = savingValue + projection;
		}

		const feesSaving = Math.round(savingValue);
		const feesSavingAmount = document.querySelector('.fees-saving');
		feesSavingAmount.innerHTML = feesSaving.toLocaleString() + '€';

		const setValue = () => {
			const newValue = Number(((range.value - range.min) * 100) / (range.max - range.min));
			const newPosition = 10 - newValue * 0.7;
			const newRangeValue = range.value;
			valueRangeV.innerHTML = newRangeValue + ' €';
			rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

			// Calcul Frais birdee
			const feesBirdee = Math.round((range.value * (1 / 100)) / 12);
			const feesBirdeeAmount = document.querySelector('.amount strong');
			feesBirdeeAmount.innerHTML = feesBirdee.toLocaleString() + '€';

			// Calcul Frais bancaire constaté
			const feesConstat = Math.round((range.value * (5 / 100)) / 12);
			const feesConstatAmount = document.querySelector('.fees-constat');
			feesConstatAmount.innerHTML = feesConstat.toLocaleString() + '€';

			// Calcul Economies réalisées
			var savingValue = 0;
			var economy = ((range.value * (2 / 100)) / 12 - (range.value * (1 / 100)) / 12) * 2;
			var rendement = Math.pow(1 + 5 / 100, 1 / 6) - 1;

			for (var periode = 0; periode < 60; periode++) {
				var projection = economy * Math.pow(1 + rendement, periode);
				savingValue = savingValue + projection;
			}

			const feesSaving = Math.round(savingValue);
			const feesSavingAmount = document.querySelector('.fees-saving');
			feesSavingAmount.innerHTML = feesSaving.toLocaleString() + '€';
		};

		document.addEventListener('DOMContentLoaded', setValue);

		range.addEventListener('input', setValue);
	}
}

export default Simulator;
