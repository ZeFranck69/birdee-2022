import Animations from './Animations';
import Sections from './Sections';
import Menu from './class/Menu';
// import Swup from 'swup';

import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

require('./Polyfills');

export default class App {
	constructor() {
		new Sections();
		new Animations();
		this.menu = new Menu();
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
