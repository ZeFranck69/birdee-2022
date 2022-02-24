import Form from '/class/Form';
import { post } from '/utils/functions';

const STATUS_IDLE = 'idle';
const STATUS_PENDING = 'pending';

class Contact {

	status = STATUS_IDLE;

	constructor(form, args = {}) {
		this.args = { ...this.getDefaultArgs(), ...args };
		this.form = new Form(form, this.args);
	}


	getDefaultArgs() {
		return {
			onSubmit: this.onSubmit,
			onResponse: this.onSubmitResponse,
			queryparams: {}
		};
	}

	onSubmit = () => {
		if (this.status === STATUS_IDLE) {
			this.status = STATUS_PENDING;
			post(
				{
					form: this.form.el,
					action: 'eltigre_contact_send',
					...this.args.queryparams
				},
				this.args.onResponse,
				true
			);
		}
	};

	onSubmitResponse = (res) => {
		this.status = STATUS_IDLE;

		const parsedRes = JSON.parse(res);
		if (parsedRes.success) {
			this.subject.form.submitButton.success(site.translation.contact.message_sent);
		} else {
			this.subject.form.displayErrors([site.translation.contact.error]);
			this.subject.form.submitButton.reset();
		}
	};
}

export default Contact;
