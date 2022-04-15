/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/utils/functions.js":
/*!***********************************!*\
  !*** ./src/js/utils/functions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSwipers": function() { return /* binding */ initSwipers; },
/* harmony export */   "scrollTopOnLinksCurrentUrl": function() { return /* binding */ scrollTopOnLinksCurrentUrl; },
/* harmony export */   "post": function() { return /* binding */ post; },
/* harmony export */   "containsSection": function() { return /* binding */ containsSection; },
/* harmony export */   "addTransition": function() { return /* binding */ addTransition; },
/* harmony export */   "addEvents": function() { return /* binding */ addEvents; },
/* harmony export */   "scrollToTop": function() { return /* binding */ scrollToTop; },
/* harmony export */   "scrollToElement": function() { return /* binding */ scrollToElement; },
/* harmony export */   "getNavigator": function() { return /* binding */ getNavigator; },
/* harmony export */   "toggleScroll": function() { return /* binding */ toggleScroll; },
/* harmony export */   "getQueryParam": function() { return /* binding */ getQueryParam; },
/* harmony export */   "cleanURL": function() { return /* binding */ cleanURL; },
/* harmony export */   "pageEnabled": function() { return /* binding */ pageEnabled; },
/* harmony export */   "checkMail": function() { return /* binding */ checkMail; },
/* harmony export */   "checkPhoneNumber": function() { return /* binding */ checkPhoneNumber; },
/* harmony export */   "checkDate": function() { return /* binding */ checkDate; },
/* harmony export */   "setLanguageCookies": function() { return /* binding */ setLanguageCookies; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");

function initSwipers(swipersContainer, properties) {
  var className, hasNavigation, hasPagination, navigation, pagination, slidesCount;
  var swipers = [];

  for (var i = 0; i < swipersContainer.length; i++) {
    slidesCount = swipersContainer[i].querySelectorAll('.swiper-slide').length;
    if (slidesCount <= 1) continue; // Getting the first class name then adds a key to it in order to differentiate each swipers

    className = swipersContainer[i].className.split(' ')[0] + '--' + i;
    swipersContainer[i].classList.add(className); // Checks if current swiper has navigation or pagination

    hasNavigation = swipersContainer[i].querySelector('.swiper-button-next');
    hasPagination = swipersContainer[i].querySelector('.swiper-pagination');

    if (hasNavigation) {
      navigation = {
        prevEl: swipersContainer[i].querySelector('.swiper-button-prev'),
        nextEl: swipersContainer[i].querySelector('.swiper-button-next')
      };
      properties.navigation = navigation;
    }

    if (hasPagination) {
      pagination = {
        el: hasPagination,
        clickable: true
      };
      properties.pagination = pagination;
    }

    var swiper = new Swiper('.' + className + ' .swiper-container', properties);
    swipersContainer[i].classList.add('swiper-initialized');
    if (swipersContainer.length === 1) return swiper;
    swipers.push(swiper);
  }

  return swipers;
} // Adds a scroll top if link destination is the same as current page

function scrollTopOnLinksCurrentUrl() {
  var currentUrl = window.location.href;

  if (currentUrl[currentUrl.length - 1] == '/') {}

  currentUrl = currentUrl.substring(0, currentUrl.length - 1);
  if (currentUrl.indexOf('#') != -1) currentUrl = currentUrl.substring(0, currentUrl.indexOf('#'));
  var currentPageLinks = document.querySelectorAll('a[href="' + currentUrl + '"]');
  addEvents(currentPageLinks, 'click', scrollToTop);
}
function post(args, callback) {
  var isFormData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var params;
  var request = new XMLHttpRequest();

  if (isFormData) {
    params = new FormData(args.form);

    for (var key in args) {
      if (key != 'form') params.append(key, args[key]);
    }
  } else {
    params = '';

    for (var _key in args) {
      params += _key + '=' + args[_key] + '&';
    }

    params = params.substring(0, params.length - 1);
  }

  request.onload = function () {
    if (callback) {
      if (request.status >= 200 && request.status < 400) {
        callback(request.response);
      } else {
        callback({
          success: false,
          data: {
            error: 'server'
          }
        });
      }
    }
  };

  request.onerror = function () {
    callback({
      success: false,
      data: {
        error: 'connection'
      }
    });
  };

  request.open('POST', site.ajaxurl, true);
  if (!isFormData) request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(params);
}
function containsSection(className) {
  return document.querySelector('.' + className) !== null;
}
function addTransition(target, className, duration) {
  var exitClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var classToRemove = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  if (target.dataset.transition != 'true') {
    target.classList.add(className);
    target.dataset.transition = true;
    setTimeout(function () {
      target.classList.remove(className);
      target.dataset.transition = false;
      if (exitClass) target.classList.add(exitClass);
      if (classToRemove) target.classList.remove(classToRemove);
    }, duration);
  }
}
function addEvents(targets, method, callback) {
  if (!NodeList.prototype.isPrototypeOf(targets) && !Array.isArray(targets)) {
    targets.addEventListener(method, callback);
  } else {
    for (var i = 0; i < targets.length; i++) {
      if (targets[i] === null) continue;

      if (!NodeList.prototype.isPrototypeOf(targets[i]) && !Array.isArray(targets[i])) {
        targets[i].addEventListener(method, callback);
      } else {
        for (var j = 0; j < targets[i].length; j++) {
          targets[i][j].addEventListener(method, callback);
        }
      }
    }
  }
}
function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
function scrollToElement(e) {
  try {
    e.preventDefault();

    var _element = document.querySelector(this.dataset.scrollto);

    var topOffset = _element.offsetTop;
    window.scrollTo({
      top: topOffset,
      left: 0,
      behavior: 'smooth'
    });
  } catch (error) {
    if (element === null) {
      console.error('ScrollToElement: Target is missing, data-scrollto needs to be a valid css selector');
    } else {
      console.error(error);
    }
  }
}
function getNavigator() {
  if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) != -1) {
    return 'opera';
  } else if (navigator.userAgent.indexOf('Chrome') != -1) {
    return 'chrome';
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    return 'safari';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    return 'firefox';
  } else if (navigator.userAgent.indexOf('MSIE') != -1 || !!document.documentMode == true) {
    return 'IE';
  } else {
    return 'unknown';
  }
}
function toggleScroll() {
  var body = document.querySelector('body');
  if (body) body.classList.toggle('no-scroll');
}
function getQueryParam(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function cleanURL() {
  window.history.replaceState(Object.assign({}, window.history.state, {
    url: window.location.href,
    random: Math.random(),
    source: 'swup'
  }), document.title, window.location.pathname);
}
function pageEnabled() {
  var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var pageLockContainer = document.getElementById('page-lock');

  if (enabled) {
    pageLockContainer.classList.remove('locked');
  } else {
    pageLockContainer.classList.add('locked');
  }
}
function checkMail(mail) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(mail);
}
function checkPhoneNumber(number) {
  var regex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  return regex.test(number);
}
function checkDate(date) {
  var regex = /^([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])\/([0][1-9]|[1][0-2])\/([1][9][0-9][0-9]|[2][0][0-9]{2})$/;
  return regex.test(date);
}
var VISITOR_COUNTRY_COOKIE = window.birdeeCookies.COUNTRY;
var VISITOR_LANGUAGE_COOKIE = window.birdeeCookies.LANGUAGE;
function setLanguageCookies(language, country) {
  var options = {
    expires: 365,
    path: '/',
    domain: window.location.host
  };
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(VISITOR_LANGUAGE_COOKIE, language, options);
  js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(VISITOR_COUNTRY_COOKIE, country, options);
}

/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*! js-cookie v3.0.1 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (key, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    key = encodeURIComponent(key)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      key + '=' + converter.write(value, key) + stringifiedAttributes)
  }

  function get (key) {
    if (typeof document === 'undefined' || (arguments.length && !key)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);

        if (key === foundKey) {
          break
        }
      } catch (e) {}
    }

    return key ? jar[key] : jar
  }

  return Object.create(
    {
      set: set,
      get: get,
      remove: function (key, attributes) {
        set(
          key,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });
/* eslint-enable no-var */

/* harmony default export */ __webpack_exports__["default"] = (api);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************************!*\
  !*** ./src/js/geotargetly.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/functions */ "./src/js/utils/functions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var _wp_geo = wp_geo,
    languages = _wp_geo.languages;
var DEFAULT_LANGUAGE = 'en';
var DEFAULT_COUNTRY = 'eu';
var DEFAULT_COUNTRY_LANGUAGE = "".concat(DEFAULT_LANGUAGE, "-").concat(DEFAULT_COUNTRY);
var ALLOWED_COUNTRY_LANGUAGE_CODES = Object.keys(languages);

var ALLOWED_LANGUAGES = _toConsumableArray(new Set(ALLOWED_COUNTRY_LANGUAGE_CODES.map(function (code) {
  return code.split('-')[0];
})));

var ALLOWED_COUNTRIES = _toConsumableArray(new Set(ALLOWED_COUNTRY_LANGUAGE_CODES.map(function (code) {
  return code.split('-')[1];
})));

window.geotargetly_loaded = function () {
  var data = {
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
    navigatorLang: navigator.language || navigator.userLanguage
  }; // Validate user navigator language

  var userNavigatorLanguage = data.navigatorLang.split('-')[0];

  if (!ALLOWED_LANGUAGES.includes(userNavigatorLanguage)) {
    userNavigatorLanguage = DEFAULT_LANGUAGE;
  } // Validate user country code


  var userCountryCode = data.countryCode.toLowerCase();

  if (!ALLOWED_COUNTRIES.includes(userCountryCode)) {
    userCountryCode = DEFAULT_COUNTRY;
  } // Validate user country/language combination


  var userCountryLanguage = "".concat(userNavigatorLanguage, "-").concat(userCountryCode);

  if (!ALLOWED_COUNTRY_LANGUAGE_CODES.includes(userCountryLanguage)) {
    userCountryLanguage = DEFAULT_COUNTRY_LANGUAGE;
  }

  (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.setLanguageCookies)(userNavigatorLanguage, userCountryCode);

  if (!window.location.href.includes(userCountryLanguage)) {
    var language = wp_geo.languages[userCountryLanguage];
    var separator = language.url.includes('?') ? '&' : '?'; // window.location.href = `${language.url}${separator}language-redirect=true`;
  }
};
}();
/******/ })()
;
//# sourceMappingURL=geotargetly.js.map