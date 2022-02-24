window.addEventListener('load', function () {
	const form = document.getElementById('support-form');
	if (form) {
		form.addEventListener('submit', function (ev) {
			ev.preventDefault();
		});
	}
});
