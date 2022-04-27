import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
import InfiniteScroll from 'infinite-scroll';

class Press {
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
		// this.animate();
		// this.postsPerPage = section.dataset.postsPerPage;
		this.postsContainer = section.querySelector('.press__posts');
		this.loadMoreButton = section.querySelector('.view-more-button');
		this.initInfiniteScroll();
	}
	// animate() {
	// 	const banner = this.section.querySelector('.banner__container');
	// 	const title = banner.querySelector('.banner-content__title');
	// 	const description = banner.querySelector('.banner-content__description');
	// 	const button = banner.querySelector('.banner-content__cta-wrapper');
	// 	const ImagePart = banner.querySelector('.banner__image-part');

	// 	const animation = gsap
	// 		.timeline()
	// 		.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
	// 		.fromTo(
	// 			description,
	// 			{ scale: 0.8, y: 100, autoAlpha: 0 },
	// 			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
	// 		)
	// 		.fromTo(button, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.27, duration: 0.45 })
	// 		.fromTo(ImagePart, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.25 });
	// 	ScrollTrigger.create({
	// 		trigger: banner,
	// 		start: 'top bottom-=1%',
	// 		toggleActions: 'play none none none',
	// 		animation,
	// 	});
	// }
	initInfiniteScroll = () => {
		this.InfiniteScroll = new InfiniteScroll(this.postsContainer, {
			path: 'page/{{#}}',
			append: '.press__post',
			status: '.page-load-status',
			hideNav: '.pagination',
			button: this.loadMoreButton,
			scrollThreshold: false,
			history: false,
		});

		this.InfiniteScroll.on('append', (body, path, items) => {
			if (items.length < 6) {
				this.InfiniteScroll.destroy();
				this.loadMoreButton.style.display = 'none';
			}
		});
	};
}

export default Press;
