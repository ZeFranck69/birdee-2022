import Performances from './flexibles/Performances';

export default class Sections {
	SECTIONS = {
		performances: Performances,
	};

	constructor() {
		for (let className in this.SECTIONS) {
			if (document.querySelector(`.${className}`)) {
				new this.SECTIONS[className](className);
			}
		}
	}
}
