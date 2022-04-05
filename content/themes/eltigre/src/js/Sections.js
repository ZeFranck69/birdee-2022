import Banner from './flexibles/Banner';
import Performances from './flexibles/Performances';
import PreFooter from './flexibles/PreFooter';
import Reasons from './flexibles/Reasons';
import Simple from './flexibles/Simple';
import Steps from './flexibles/Steps';
import TextImage from './flexibles/TextImage';
import TwoBlocks from './flexibles/TwoBlocks';
import Wallets from './flexibles/Wallets';

export default class Sections {
	SECTIONS = {
		banner: Banner,
		reasons: Reasons,
		performances: Performances,
		wallets: Wallets,
		simple: Simple,
		steps: Steps,
		'two-blocks': TwoBlocks,
		prefooter: PreFooter,
		'text-image': TextImage,
	};

	constructor() {
		for (let className in this.SECTIONS) {
			if (document.querySelector(`.${className}`)) {
				new this.SECTIONS[className](className);
			}
		}
	}
}
