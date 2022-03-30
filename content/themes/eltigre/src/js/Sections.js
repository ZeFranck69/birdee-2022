import Performances from './flexibles/Performances';
import Wallets from './flexibles/Wallets';

export default class Sections {
	SECTIONS = {
		performances: Performances,
		wallets: Wallets,
	};

	constructor() {
		for (let className in this.SECTIONS) {
			if (document.querySelector(`.${className}`)) {
				new this.SECTIONS[className](className);
			}
		}
	}
}
