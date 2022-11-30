import Banner from './flexibles/Banner';
import Collaborators from './flexibles/Collaborators';
import Investment from './flexibles/Investment';
import Labels from './flexibles/Labels';
import MultiBlocks from './flexibles/MultiBlocks';
import Offers from './flexibles/Offers';
import Performances from './flexibles/Performances';
import PreFooter from './flexibles/PreFooter';
import Press from './flexibles/Press';
import Quote from './flexibles/Quote';
import Reasons from './flexibles/Reasons';
import Simple from './flexibles/Simple';
import Simulator from './flexibles/Simulator';
import Steps from './flexibles/Steps';
import StepsTabs from './flexibles/StepsTabs';
import TextImage from './flexibles/TextImage';
import TwoBlocks from './flexibles/TwoBlocks';
import Wallets from './flexibles/Wallets';
import Faqs from './flexibles/Faq';

export default class Sections {
	SECTIONS = {
		banner: Banner,
		reasons: Reasons,
		quote: Quote,
		performances: Performances,
		wallets: Wallets,
		simple: Simple,
		offers: Offers,
		steps: Steps,
		collaborators: Collaborators,
		investment: Investment,
		labels: Labels,
		'steps-tabs': StepsTabs,
		'two-blocks': TwoBlocks,
		prefooter: PreFooter,
		faq: Faqs,
		'text-image': TextImage,
		'multi-block': MultiBlocks,
		press: Press,
		simulator: Simulator,
	};

	constructor() {
		for (let className in this.SECTIONS) {
			if (document.querySelector(`.${className}`)) {
				new this.SECTIONS[className](className);
			}
		}
	}
}
