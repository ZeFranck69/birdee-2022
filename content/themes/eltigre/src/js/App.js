import Animations from './Animations';
import Sections from './Sections';
import Menu from './class/Menu';
// import Swup from 'swup';
import Intercom from './class/Intercom';
import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

import gsap from 'gsap';

import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { getQueryParam } from './utils/functions';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

require('./Polyfills');

export default class App {
	constructor() {
		this.keepUtmParams();
		new Sections();
		new Intercom();
		new Animations();
		this.menu = new Menu();

		try {
			const websiteCarbonCalculator = new WebsiteCarbonCalculator({
				pagespeedApiKey: 'AIzaSyCcFfoQmSB_pWdgMfcN9-kzYuVMmTo3OpY',
			});
			const result = websiteCarbonCalculator.calculateByURL('https://staging.birdee.co/');

			//   {
			//     url: 'yourwebsite.com',
			//     bytesTransferred: 123456,
			//     isGreenHost: true,
			//     co2PerPageview: 0.1234567,
			//   }
		} catch (error) {
			if (error instanceof WebsiteCarbonCalculatorError) {
				console.warn(error.message);
			}
			// Do something else...
		}
	}

	keepUtmParams() {
		const utmParams = {
			source: getQueryParam('utm_source'),
			medium: getQueryParam('utm_medium'),
			campaign: getQueryParam('utm_campaign'),
		};

		// console.log(utmParams);

		const UTM = Object.entries(utmParams)
			.map(([name, value]) => (value ? `utm_${name}=${value}` : null))
			.filter(Boolean);

		if (!UTM.length) return;

		const params = '?' + UTM.join('&');

		document
			.querySelectorAll('a[href*="' + window.location.hostname.replace(/^[^.]+\./g, '') + '"], a[href^="/"]')
			.forEach((el) => {
				if (!el.getAttribute('href').includes('umt_')) {
					const href = el.getAttribute('href');

					// Fix Multiple '?' in URL
					// Match all '?' in URL
					// Loop through matches and replace all '?' with '&' except the first match using counter++ (Increment counter after checking its value)
					let counter = 0;
					const url = `${href}${params}`.replace(/\?/g, (match) => (counter++ ? '&' : match));

					el.setAttribute('href', url);
				}
			});
	}
}

document.addEventListener('DOMContentLoaded', function (ev) {
	new App();
	// const swup = new Swup();
	// swup.on('contentReplaced', () => {
	// 	window.scrollTo(0, 0);
	// 	new App();
	// });
});
const menusFooter = document.querySelectorAll('.accordeon');
const columns = document.querySelectorAll('.footer__column');
menusFooter.forEach((menuFooter) => {
	menuFooter.addEventListener('click', () => menuFooter.classList.toggle('open'));
});
