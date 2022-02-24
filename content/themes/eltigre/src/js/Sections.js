export default class Sections {
	SECTIONS = {};

	constructor() {
		for (let className in this.SECTIONS) {
			if (document.querySelector(`.${className}`)) {
				new this.SECTIONS[className](className);
			}
		}
	}
}
