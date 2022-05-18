import { setLanguageCookies } from '/utils/functions';

const { languages } = wp_geo;

const DEFAULT_LANGUAGE = 'en';
const DEFAULT_COUNTRY = 'eu';
const DEFAULT_COUNTRY_LANGUAGE = `${DEFAULT_LANGUAGE}-${DEFAULT_COUNTRY}`;

const ALLOWED_COUNTRY_LANGUAGE_CODES = Object.keys(languages);
const ALLOWED_LANGUAGES = [...new Set(ALLOWED_COUNTRY_LANGUAGE_CODES.map((code) => code.split('-')[0]))];
const ALLOWED_COUNTRIES = [...new Set(ALLOWED_COUNTRY_LANGUAGE_CODES.map((code) => code.split('-')[1]))];

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
		navigatorLang: navigator.language || navigator.userLanguage,
	};

	// Validate user navigator language
	let userNavigatorLanguage = data.navigatorLang.split('-')[0];
	if (!ALLOWED_LANGUAGES.includes(userNavigatorLanguage)) {
		userNavigatorLanguage = DEFAULT_LANGUAGE;
	}

	// Validate user country code
	let userCountryCode = data.countryCode.toLowerCase();
	if (!ALLOWED_COUNTRIES.includes(userCountryCode)) {
		userCountryCode = DEFAULT_COUNTRY;
	}

	// Validate user country/language combination
	let userCountryLanguage = `${userNavigatorLanguage}-${userCountryCode}`;
	if (!ALLOWED_COUNTRY_LANGUAGE_CODES.includes(userCountryLanguage)) {
		userCountryLanguage = DEFAULT_COUNTRY_LANGUAGE;
	}

	setLanguageCookies(userNavigatorLanguage, userCountryCode);

	const language = wp_geo.languages[userCountryLanguage];
	const redirectURL = language?.url;

	if (redirectURL) {
		if (redirectURL === window.location.href) {
			return;
		}

		const separator = languageURL.includes('?') ? '&' : '?';

		window.location.href = `${redirectURL}${separator}language-redirect=true`;
	}
};
