import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default class Animations {
	constructor() {
		this.reveal();
	}

	reveal() {
		document.querySelectorAll('[gsap-reveal]').forEach((el) => {
			const animation = gsap.fromTo(el, 1, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'power2.out' });
			ScrollTrigger.create({
				trigger: el,
				animation,
				start: 'top-=10% bottom-=5%',
			});
		});
	}
}
