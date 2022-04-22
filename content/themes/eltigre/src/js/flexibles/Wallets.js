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
		this.animate();
		const wallets = document.querySelectorAll('.wallet-block');

		wallets.forEach((wallet) => {
			const radios = wallet.querySelectorAll('.wallet-theme .theme-input');
			const tabs = wallet.querySelectorAll('.theme-input-content');

			const yearsContent = wallet.querySelectorAll('.year__content');
			const years = wallet.querySelectorAll('.tab__year');
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
					const yearsActive = wallet.querySelectorAll('.tab__year.active');
					yearsActive.forEach((yearActive) => {
						if (yearActive.classList.contains('active')) {
							yearActive.classList.remove('active');
						}
					});
					this.classList.add('active');

					yearsContent.forEach((yearContent) => {
						yearContent.classList.add('hidden');
						const yearValue = year.dataset.year;
						if (yearContent.getAttribute('tabname') == yearValue) {
							yearContent.classList.remove('hidden');
						}
					});
				});
			});
		});
	}
	animate() {
		const walletsWrapper = this.section.querySelector('.wallet-container');
		const title = walletsWrapper.querySelector('.wallet__section-title');
		const wallets = walletsWrapper.querySelector('.wallet-wrapper');
		const wallet = wallets.querySelectorAll('.wallet-block');

		const animation = gsap
			.timeline()
			.fromTo(title, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
			.fromTo(wallet, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.45, duration: 0.35 });

		ScrollTrigger.create({
			trigger: walletsWrapper,
			start: 'top bottom-=1%',
			toggleActions: 'play none none none',
			animation,
		});
	}
}

export default Wallets;
