import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Wallets {
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
		const tabs = document.querySelectorAll('.theme-input-content');
		const radios = document.querySelectorAll('.theme-input');

		const yearsContent = document.querySelectorAll('.year__content');
		const years = document.querySelectorAll('.tab__year');

		radios.forEach((radio) => {
			radio.addEventListener('change', function () {
				tabs.forEach((tab) => {
					tab.classList.add('hidden');
					if (this.checked && tab.getAttribute('tabname') == this.value) {
						tab.classList.remove('hidden');
					}
				});
			});
		});
		years.forEach((year) => {
			year.addEventListener('click', function () {
				year.classList.remove('active');
				yearsContent.forEach((yearContent) => {
					yearContent.classList.add('hidden');
					const yearValue = year.dataset.year;
					if (yearContent.getAttribute('tabname') == yearValue) {
						yearContent.classList.remove('hidden');
						year.classList.add('active');
					}
					if (yearContent.getAttribute('tabname') != yearValue) {
						year.classList.remove('active');
					}
				});
			});
		});
	}
}

export default Wallets;
