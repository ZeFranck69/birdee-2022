export default class Intercom {
	constructor() {
		//intercom
		var APP_ID = intercom.app_id;
		var lang = document.getElementsByTagName('html')[0].getAttribute('lang');

		window.intercomSettings = {
			app_id: APP_ID,
			hide_default_launcher: true,
			custom_launcher_selector: '#intercom_messenger',
		};

		(function () {
			var w = window;
			var ic = w.Intercom;
			if (typeof ic === 'function') {
				ic('reattach_activator');
				ic('update', intercomSettings);
			} else {
				var d = document;
				var i = function () {
					i.c(arguments);
				};
				i.q = [];
				i.c = function (args) {
					i.q.push(args);
				};
				w.Intercom = i;

				function l() {
					var s = d.createElement('script');
					s.type = 'text/javascript';
					s.async = true;
					s.src = 'https://widget.intercom.io/widget/' + APP_ID;
					var x = d.getElementsByTagName('script')[0];
					x.parentNode.insertBefore(s, x);
				}
				if (w.attachEvent) {
					w.attachEvent('onload', l);
				} else {
					w.addEventListener('load', l, false);
				}
			}
		})();

		window.Intercom('boot', {
			app_id: APP_ID,
		});

		try {
			const language = document.documentElement.lang.toLowerCase().split('-')[0];
			if (language === 'fr') {
				window.Intercom('boot', {
					language_override: 'fr',
				});
			}

			if (language === 'en') {
				window.Intercom('boot', {
					language_override: 'en',
				});
			}
			if (language === 'nl') {
				window.Intercom('boot', {
					language_override: 'nl',
				});
			}
		} catch (error) {}

		var chatIcon = document.getElementById('chat-launch');
		if (chatIcon) {
			chatIcon.addEventListener('click', function () {
				window.Intercom('show');
			});
		}
	}
}
