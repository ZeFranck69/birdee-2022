import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

class Faqs {
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
		var acc = document.getElementsByClassName('faq-content__title ');
		var i;

		for (i = 0; i < acc.length; i++) {
			//when one of the buttons are clicked run this function
			acc[i].onclick = function () {
				var panel = this.nextElementSibling;
				var coursePanel = document.getElementsByClassName('accordeon__content');
				var courseAccordion = document.getElementsByClassName('faq-content__title ');
				var courseAccordionActive = document.getElementsByClassName('faq-content__title active');

				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
					this.classList.remove('active');
				} else {
					for (var j = 0; j < courseAccordionActive.length; j++) {
						courseAccordionActive[j].classList.remove('active');
					}
					for (var k = 0; k < coursePanel.length; k++) {
						this.classList.remove('active');
						coursePanel[k].style.maxHeight = null;
					}
					panel.style.maxHeight = panel.scrollHeight + 'px';
					this.classList.add('active');
				}
			};
		}
	}
}

export default Faqs;
