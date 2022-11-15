import { setLanguageCookies } from '/utils/functions';

const { languages } = wp_geo;
const DEFAULT_COUNTRY_LANGUAGE = `en-eu`;
const ALLOWED_COUNTRY_LANGUAGE_CODES = Object.keys(languages);

window.geotargetly_loaded = function () {
	const data = {
		continent: geotargetly_continent_name(),
		continentCode: geotargetly_continent_code(),
		country: geotargetly_country_name(),
		countryCode: geotargetly_country_code(),
		region: geotargetly_region_name(),
		regionCode: geotargetly_region_code(),
		city: geotargetly_city_name(),
		lat: geotargetly_lat(),
		lng: geotargetly_lng(),
		ip: geotargetly_ip(),
		currencyCode: geotargetly_currency_code(),
		currencySymbol: geotargetly_currency_symbol(),
		callingCode: geotargetly_calling_code(),
		language: (navigator.language || navigator.userLanguage || '').split('-').shift()
	};

	// Validate user country/language combination
	let userCountryLanguage = `${data.language}-${data.countryCode}`.toLowerCase();
	if (!ALLOWED_COUNTRY_LANGUAGE_CODES.includes(userCountryLanguage)) {
		userCountryLanguage = DEFAULT_COUNTRY_LANGUAGE;
	}

	const language = wp_geo.languages[userCountryLanguage];
	if (language) {
		const [userLanguage, userCountry] = userCountryLanguage.split('-');

		setLanguageCookies(userLanguage, userCountry);

		const redirectURL = language?.url;
		if (redirectURL) {
			if (redirectURL === window.location.href) {
				return;
			}

			const separator = redirectURL.includes('?') ? '&' : '?';

			window.location.href = `${redirectURL}${separator}language-redirect=true`;
		}
	}
};
