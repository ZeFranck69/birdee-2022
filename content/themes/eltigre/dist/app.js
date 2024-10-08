/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animations.js":
/*!******************************!*\
  !*** ./src/js/Animations.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Animations; }
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);

    this.reveal();
  }

  _createClass(Animations, [{
    key: "reveal",
    value: function reveal() {
      document.querySelectorAll('[gsap-reveal]').forEach(function (el) {
        var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(el, 1, {
          y: 40,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          ease: 'power2.out'
        });
        gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
          trigger: el,
          animation: animation,
          start: 'top-=10% bottom-=5%'
        });
      });
    }
  }]);

  return Animations;
}();



/***/ }),

/***/ "./src/js/Polyfills.js":
/*!*****************************!*\
  !*** ./src/js/Polyfills.js ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/Sections.js":
/*!****************************!*\
  !*** ./src/js/Sections.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sections; }
/* harmony export */ });
/* harmony import */ var _flexibles_Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flexibles/Banner */ "./src/js/flexibles/Banner.js");
/* harmony import */ var _flexibles_Collaborators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flexibles/Collaborators */ "./src/js/flexibles/Collaborators.js");
/* harmony import */ var _flexibles_Investment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flexibles/Investment */ "./src/js/flexibles/Investment.js");
/* harmony import */ var _flexibles_Labels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flexibles/Labels */ "./src/js/flexibles/Labels.js");
/* harmony import */ var _flexibles_MultiBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flexibles/MultiBlocks */ "./src/js/flexibles/MultiBlocks.js");
/* harmony import */ var _flexibles_Offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flexibles/Offers */ "./src/js/flexibles/Offers.js");
/* harmony import */ var _flexibles_Performances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flexibles/Performances */ "./src/js/flexibles/Performances.js");
/* harmony import */ var _flexibles_PreFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flexibles/PreFooter */ "./src/js/flexibles/PreFooter.js");
/* harmony import */ var _flexibles_Press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./flexibles/Press */ "./src/js/flexibles/Press.js");
/* harmony import */ var _flexibles_Quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flexibles/Quote */ "./src/js/flexibles/Quote.js");
/* harmony import */ var _flexibles_Reasons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flexibles/Reasons */ "./src/js/flexibles/Reasons.js");
/* harmony import */ var _flexibles_Simple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flexibles/Simple */ "./src/js/flexibles/Simple.js");
/* harmony import */ var _flexibles_Simulator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./flexibles/Simulator */ "./src/js/flexibles/Simulator.js");
/* harmony import */ var _flexibles_Steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./flexibles/Steps */ "./src/js/flexibles/Steps.js");
/* harmony import */ var _flexibles_StepsTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./flexibles/StepsTabs */ "./src/js/flexibles/StepsTabs.js");
/* harmony import */ var _flexibles_TextImage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./flexibles/TextImage */ "./src/js/flexibles/TextImage.js");
/* harmony import */ var _flexibles_TwoBlocks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./flexibles/TwoBlocks */ "./src/js/flexibles/TwoBlocks.js");
/* harmony import */ var _flexibles_Wallets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./flexibles/Wallets */ "./src/js/flexibles/Wallets.js");
/* harmony import */ var _flexibles_Faq__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./flexibles/Faq */ "./src/js/flexibles/Faq.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var Sections = /*#__PURE__*/_createClass(function Sections() {
  _classCallCheck(this, Sections);

  _defineProperty(this, "SECTIONS", {
    banner: _flexibles_Banner__WEBPACK_IMPORTED_MODULE_0__["default"],
    reasons: _flexibles_Reasons__WEBPACK_IMPORTED_MODULE_10__["default"],
    quote: _flexibles_Quote__WEBPACK_IMPORTED_MODULE_9__["default"],
    performances: _flexibles_Performances__WEBPACK_IMPORTED_MODULE_6__["default"],
    wallets: _flexibles_Wallets__WEBPACK_IMPORTED_MODULE_17__["default"],
    simple: _flexibles_Simple__WEBPACK_IMPORTED_MODULE_11__["default"],
    offers: _flexibles_Offers__WEBPACK_IMPORTED_MODULE_5__["default"],
    steps: _flexibles_Steps__WEBPACK_IMPORTED_MODULE_13__["default"],
    collaborators: _flexibles_Collaborators__WEBPACK_IMPORTED_MODULE_1__["default"],
    investment: _flexibles_Investment__WEBPACK_IMPORTED_MODULE_2__["default"],
    labels: _flexibles_Labels__WEBPACK_IMPORTED_MODULE_3__["default"],
    'steps-tabs': _flexibles_StepsTabs__WEBPACK_IMPORTED_MODULE_14__["default"],
    'two-blocks': _flexibles_TwoBlocks__WEBPACK_IMPORTED_MODULE_16__["default"],
    prefooter: _flexibles_PreFooter__WEBPACK_IMPORTED_MODULE_7__["default"],
    faq: _flexibles_Faq__WEBPACK_IMPORTED_MODULE_18__["default"],
    'text-image': _flexibles_TextImage__WEBPACK_IMPORTED_MODULE_15__["default"],
    'multi-block': _flexibles_MultiBlocks__WEBPACK_IMPORTED_MODULE_4__["default"],
    press: _flexibles_Press__WEBPACK_IMPORTED_MODULE_8__["default"],
    simulator: _flexibles_Simulator__WEBPACK_IMPORTED_MODULE_12__["default"]
  });

  for (var className in this.SECTIONS) {
    if (document.querySelector(".".concat(className))) {
      new this.SECTIONS[className](className);
    }
  }
});



/***/ }),

/***/ "./src/js/class/Intercom.js":
/*!**********************************!*\
  !*** ./src/js/class/Intercom.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Intercom; }
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Intercom = /*#__PURE__*/_createClass(function Intercom() {
  _classCallCheck(this, Intercom);

  //intercom
  var APP_ID = site.intercom_id;
  var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
  window.intercomSettings = {
    app_id: APP_ID,
    hide_default_launcher: true,
    custom_launcher_selector: '#intercom_messenger'
  };

  (function () {
    var w = window;
    var ic = w.Intercom;

    if (typeof ic === 'function') {
      ic('reattach_activator');
      ic('update', intercomSettings);
    } else {
      var l = function l() {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.intercom.io/widget/' + APP_ID;
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };

      var d = document;

      var i = function i() {
        i.c(arguments);
      };

      i.q = [];

      i.c = function (args) {
        i.q.push(args);
      };

      w.Intercom = i;

      if (w.attachEvent) {
        w.attachEvent('onload', l);
      } else {
        w.addEventListener('load', l, false);
      }
    }
  })();

  window.Intercom('boot', {
    app_id: APP_ID
  });

  try {
    var language = document.documentElement.lang.toLowerCase().split('-')[0];

    if (language === 'fr') {
      window.Intercom('boot', {
        language_override: 'fr'
      });
    }

    if (language === 'en') {
      window.Intercom('boot', {
        language_override: 'en'
      });
    }

    if (language === 'nl') {
      window.Intercom('boot', {
        language_override: 'nl'
      });
    }
  } catch (error) {}

  var chatIcon = document.getElementById('chat-launch');

  if (chatIcon) {
    chatIcon.addEventListener('click', function () {
      window.Intercom('show');
    });
  }
});
/* istanbul ignore next */

/* c8 ignore start */

/* eslint-disable */




function oo_cm() {
  try {
    return (0, eval)('globalThis._console_ninja') || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','50548','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ZeFranck\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-TTB3K2P\",\"192.168.56.1\",\"192.168.1.68\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724232608995','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}
/* istanbul ignore next */


function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}
/* istanbul ignore next */


function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}
/* istanbul ignore next */


function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}

  return v;
}
/* istanbul ignore next */


function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}

  return v;
}
/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/js/class/Menu.js":
/*!******************************!*\
  !*** ./src/js/class/Menu.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/js/utils/functions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Menu = /*#__PURE__*/function () {
  function Menu() {
    var _this = this;

    _classCallCheck(this, Menu);

    _defineProperty(this, "distanceBeforeSticky", window.innerHeight / 10);

    _defineProperty(this, "stickyMenu", function () {
      var header = _this.header;

      if (window.pageYOffset > _this.distanceBeforeSticky && !_this.isSticky()) {
        header.classList.add('sticky');
      } else if (window.pageYOffset < _this.distanceBeforeSticky && _this.isSticky()) {
        header.classList.remove('sticky');
      }
    });

    _defineProperty(this, "isSticky", function () {
      return _this.header.classList.contains('sticky');
    });

    _defineProperty(this, "toggleMenu", function () {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'toggle';
      var VALID_ACTIONS = ['add', 'remove', 'toggle'];
      if (!VALID_ACTIONS.includes(action)) return console.error("\"".concat(action, "\" is not allowed. Allowed actions: ").concat(VALID_ACTIONS.join(' ')));

      _this.body.classList[action]('no-scroll');

      _this.header.classList[action]('active');

      _this.navSlide.classList[action]('active-slide');

      _this.header.setAttribute('aria-hidden', !_this.header.classList.contains('active'));

      _this.navSlide.setAttribute('aria-hidden', !_this.navSlide.classList.contains('active'));
    });

    this.body = document.querySelector('body');
    this.header = document.getElementById('site-header');
    this.navSlide = document.getElementById('slide-nav');
    this.toggleBtn = document.querySelector('.site__burger-menu');
    this.languageSwitcher = document.querySelectorAll('.language-switcher');
    this.onCloseLanguageSwitcher = this.closeLanguageSwitcher.bind(this);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', function () {
        return _this.toggleMenu();
      });
    }

    window.addEventListener('scroll', this.stickyMenu); // REMOVE NO SCROLL ON PAGE CHANGE

    document.querySelector('body').classList.remove('no-scroll');
    this.header.classList.remove('active');
    this.navSlide.classList.remove('active-slide');
    var menuItems = document.querySelectorAll('.menu-item, .site-logo, .footer_phone-number, .footer-contact');
    menuItems.forEach(function (item) {
      item.addEventListener('click', function (ev) {
        var activeItems = document.querySelectorAll('.current_page_item');
        activeItems.forEach(function (activeItem) {
          return activeItem.classList.remove('current_page_item');
        });
        var link = item.querySelector('a');
        var newActivesLinks = document.querySelectorAll("a[href=\"".concat(link.href, "\"]"));
        link.parentElement.classList.add('current_page_item');
        newActivesLinks.forEach(function (item) {
          return item.parentElement.classList.add('current_page_item');
        });
      });
    });
    var hashtagLinks = document.querySelectorAll('a[href*="#"]');
    hashtagLinks.forEach(function (link) {
      return link.parentElement.classList.remove('current_page_item');
    });
    this.initLanguageSwitcher();
    this.initRedirectBanner();
  }

  _createClass(Menu, [{
    key: "initRedirectBanner",
    value: function initRedirectBanner() {
      var banner = document.querySelector('.birdee__language-redirect');

      if (banner) {
        var closeButton = banner.querySelector('.close-notice');

        if (closeButton) {
          closeButton.addEventListener('click', function () {
            banner.parentElement.removeChild(banner);
          });
        }
      }
    }
  }, {
    key: "initLanguageSwitcher",
    value: function initLanguageSwitcher() {
      var _this2 = this;

      if (this.languageSwitcher.length) {
        this.languageSwitcher.forEach(function (languageSwitcher) {
          languageSwitcher.addEventListener('click', function (ev) {
            if (languageSwitcher.classList.contains('active')) {
              _this2.closeLanguageSwitcher();
            } else {
              ev.stopPropagation();

              _this2.openLanguageSwitcher(languageSwitcher);
            }
          });
          var languageLinks = languageSwitcher.querySelectorAll('a[data-lang]');
          languageLinks.forEach(function (link) {
            link.addEventListener('click', function () {
              var _this$dataset$lang$sp = this.dataset.lang.split('-'),
                  _this$dataset$lang$sp2 = _slicedToArray(_this$dataset$lang$sp, 2),
                  language = _this$dataset$lang$sp2[0],
                  country = _this$dataset$lang$sp2[1];

              if (language && country) {
                (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.setLanguageCookies)(language, country);
              }
            });
          });
        });
      }
    }
  }, {
    key: "openLanguageSwitcher",
    value: function openLanguageSwitcher(element) {
      element.classList.add('active');
      document.body.addEventListener('click', this.onCloseLanguageSwitcher);
      document.body.addEventListener('keydown', this.onCloseLanguageSwitcher);
    }
  }, {
    key: "closeLanguageSwitcher",
    value: function closeLanguageSwitcher(ev) {
      if (!ev || ev && ev.keyCode === 27 || !ev.keyCode) {
        this.languageSwitcher.forEach(function (languageSwitcher) {
          return languageSwitcher.classList.remove('active');
        });
        document.body.removeEventListener('click', this.onCloseLanguageSwitcher);
        document.body.removeEventListener('keydown', this.onCloseLanguageSwitcher);
      }
    }
  }]);

  return Menu;
}();



/***/ }),

/***/ "./src/js/flexibles/Banner.js":
/*!************************************!*\
  !*** ./src/js/flexibles/Banner.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Banner = /*#__PURE__*/_createClass(function Banner(className) {
  _classCallCheck(this, Banner);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var banner = this.section.querySelector('.banner__container');
      var title = banner.querySelector('.banner-content__title');
      var description = banner.querySelector('.banner-content__description');
      var button = banner.querySelector('.banner-content__cta-wrapper'); // const ImagePart = banner.querySelector('.banner__image-part');

      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      }).fromTo(button, {
        scale: 0.8,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      }); // .fromTo(ImagePart, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.25 })

      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: banner,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/js/flexibles/Collaborators.js":
/*!*******************************************!*\
  !*** ./src/js/flexibles/Collaborators.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Collaborators = /*#__PURE__*/_createClass(function Collaborators(className) {
  _classCallCheck(this, Collaborators);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var collabWrapper = this.section.querySelector('.collaborators-container');
      var title = collabWrapper.querySelector('.section-part__title');
      var description = collabWrapper.querySelector('.section-part__description');
      var collabs = collabWrapper.querySelector('.collaborators__list');
      var block = collabs.querySelectorAll('.collaborator-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(block, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: collabWrapper,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Collaborators);

/***/ }),

/***/ "./src/js/flexibles/Faq.js":
/*!*********************************!*\
  !*** ./src/js/flexibles/Faq.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Faqs = /*#__PURE__*/_createClass(function Faqs(className) {
  _classCallCheck(this, Faqs);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/_createClass(function Section(section) {
  _classCallCheck(this, Section);

  this.section = section;
  var acc = document.getElementsByClassName('faq-content__title ');
  var i;

  for (i = 0; i < acc.length; i++) {
    //when one of the buttons are clicked run this function
    acc[i].onclick = function () {
      var panel = this.nextElementSibling;
      var coursePanel = document.getElementsByClassName('accordeon__content');
      var courseAccordion = document.getElementsByClassName('faq-content__title ');
      var courseAccordionActive = document.getElementsByClassName('faq-content__title active');

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove('active');
      } else {
        for (var j = 0; j < courseAccordionActive.length; j++) {
          courseAccordionActive[j].classList.remove('active');
        }

        for (var k = 0; k < coursePanel.length; k++) {
          this.classList.remove('active');
          coursePanel[k].style.maxHeight = null;
        }

        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.classList.add('active');
      }
    };
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Faqs);

/***/ }),

/***/ "./src/js/flexibles/Investment.js":
/*!****************************************!*\
  !*** ./src/js/flexibles/Investment.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Investment = /*#__PURE__*/_createClass(function Investment(className) {
  _classCallCheck(this, Investment);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var investmentWrapper = this.section.querySelector('.investment-wrapper');
      var title = investmentWrapper.querySelector('.section-part__title');
      var surtitle = investmentWrapper.querySelector('.section-part__surtitle');
      var description = investmentWrapper.querySelector('.section-part__description');
      var collabs = investmentWrapper.querySelector('.investment__list');
      var collab = collabs.querySelectorAll('.collaborator-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(surtitle, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(collab, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: investmentWrapper,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Investment);

/***/ }),

/***/ "./src/js/flexibles/Labels.js":
/*!************************************!*\
  !*** ./src/js/flexibles/Labels.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Labels = /*#__PURE__*/_createClass(function Labels(className) {
  _classCallCheck(this, Labels);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var labelWrapper = this.section.querySelector('.labels-wrapper');
      var title = labelWrapper.querySelector('.section-part__title');
      var description = labelWrapper.querySelector('.section-part__description');
      var labels = labelWrapper.querySelector('.labels__list');
      var label = labels.querySelectorAll('.label-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        y: -80,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.35
      }).fromTo(label, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.25,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: labelWrapper,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Labels);

/***/ }),

/***/ "./src/js/flexibles/MultiBlocks.js":
/*!*****************************************!*\
  !*** ./src/js/flexibles/MultiBlocks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var MultiBlocks = /*#__PURE__*/_createClass(function MultiBlocks(className) {
  _classCallCheck(this, MultiBlocks);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var multiBlocks = this.section.querySelector('.multi-block-wrapper');
      var title = multiBlocks.querySelector('.section-part__title');
      var blocks = multiBlocks.querySelector('.multi-block__wrapper-list');
      var block = blocks.querySelectorAll('.block');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(block, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: multiBlocks,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (MultiBlocks);

/***/ }),

/***/ "./src/js/flexibles/Offers.js":
/*!************************************!*\
  !*** ./src/js/flexibles/Offers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Offers = /*#__PURE__*/_createClass(function Offers(className) {
  _classCallCheck(this, Offers);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/_createClass(function Section(section) {
  _classCallCheck(this, Section);

  this.section = section;
  var titlesJob = document.querySelectorAll('.dropdown-toggle');
  titlesJob.forEach(function (titleJob) {
    titleJob.addEventListener('click', function () {
      titleJob.classList.toggle('active');
    });
  }); // this.animate();
} // animate() {
// 	const collabWrapper = this.section.querySelector('.collaborators-container');
// 	const title = collabWrapper.querySelector('.section-part__title');
// 	const description = collabWrapper.querySelector('.section-part__description');
// 	const collabs = collabWrapper.querySelector('.collaborators__list');
// 	const block = collabs.querySelectorAll('.collaborator-wrapper');
// 	const animation = gsap
// 		.timeline()
// 		.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
// 		.fromTo(description, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
// 		.fromTo(block, { y: 120, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3, duration: 0.35 });
// 	ScrollTrigger.create({
// 		trigger: collabWrapper,
// 		start: 'top bottom-=1%',
// 		toggleActions: 'play none none reverse',
// 		animation,
// 	});
// }
);

/* harmony default export */ __webpack_exports__["default"] = (Offers);

/***/ }),

/***/ "./src/js/flexibles/Performances.js":
/*!******************************************!*\
  !*** ./src/js/flexibles/Performances.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Performances = /*#__PURE__*/_createClass(function Performances(className) {
  _classCallCheck(this, Performances);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    var _this = this;

    _classCallCheck(this, Section);

    this.result = [];
    this.section = section;
    this.modalManager();
    var saving = document.querySelector('.saving');
    var reject = document.querySelector('.rejected');
    var comparison = document.querySelector('.comparison');
    var ranges = document.querySelectorAll('.range-slider');
    saving.innerHTML = 0;
    reject.innerHTML = 0;
    ranges.forEach(function (range) {
      var key = range.dataset.key;
      _this.result[0] = 50;
      _this.result[1] = 10;
      range.addEventListener('input', function () {
        var _console;

        var rangesSlider = range.querySelector('.rs-range-line');
        var rangeBullet = range.querySelector('.rs-bullet');
        rangeBullet.innerHTML = rangesSlider.value;
        var bulletPosition = rangesSlider.value / rangesSlider.max * 100;
        var maxWidth = rangesSlider.clientWidth;
        rangeBullet.style.left = maxWidth * (bulletPosition / 100) + 'px';
        _this.result[key] = rangesSlider.value;
        var initialDepot = Math.round(parseInt(_this.result[0]) * Math.pow(1 + 0.0053, 180) * 100) / 100;
        var reccurentDepot = Math.round(parseInt(_this.result[1]) * ((Math.pow(1 + 0.0053, 180) - 1) / 0.0053) * 100) / 100;
        var operation = initialDepot + reccurentDepot;
        saving.innerHTML = operation.toLocaleString(); // Mettre l'operation de comparaison ici

        var initialDepotEpargne = Math.round(parseInt(_this.result[0]) * Math.pow(1 + 0.002466, 180) * 100) / 100;
        var reccurentDepotEpargne = Math.round(parseInt(_this.result[1]) * ((Math.pow(1 + 0.002466, 180) - 1) / 0.002466) * 100) / 100;
        var operationEpargne = initialDepotEpargne + reccurentDepotEpargne;
        /* eslint-disable */

        (_console = console).log.apply(_console, _toConsumableArray(oo_oo("3313352853_52_5_52_51_4", operationEpargne.toLocaleString())));

        comparison.innerHTML = operationEpargne.toLocaleString();
        var value = (rangesSlider.value - rangesSlider.min) / (rangesSlider.max - rangesSlider.min) * 100;
        rangesSlider.style.background = 'linear-gradient(to right, #69efca 0%, #69efca ' + value + '%, #fff ' + value + '%, white 100%)';
      }, false); // Mettre l'operation ici

      var initialDepot = Math.round(parseInt(_this.result[0]) * Math.pow(1 + 0.0053, 180) * 100) / 100;
      var reccurentDepot = Math.round(parseInt(_this.result[1]) * ((Math.pow(1 + 0.0053, 180) - 1) / 0.0053) * 100) / 100;
      var operation = initialDepot + reccurentDepot;
      saving.innerHTML = operation.toLocaleString(); // Mettre l'operation de comparaison ici

      var initialDepotEpargne = Math.round(parseInt(_this.result[0]) * Math.pow(1 + 0.002466, 180) * 100) / 100;
      var reccurentDepotEpargne = Math.round(parseInt(_this.result[1]) * ((Math.pow(1 + 0.002466, 180) - 1) / 0.002466) * 100) / 100;
      var operationEpargne = initialDepotEpargne + reccurentDepotEpargne;
      comparison.innerHTML = operationEpargne.toLocaleString();
    });
  }

  _createClass(Section, [{
    key: "modalManager",
    value: function modalManager() {
      var link = document.querySelector('.link');
      var modal = document.querySelector('.modal');
      var closeBtn = document.querySelector('.close');
      var closeWindow = document.querySelector('.modal.open');
      link.addEventListener('click', function () {
        modal.classList.add('open');

        if (modal.classList.contains('closed')) {
          modal.classList.remove('closed');
          modal.classList.add('open');
        } else if (modal.classList.contains('open')) {
          modal.classList.remove('open');
          modal.classList.add('closed');
        }
      });
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
        modal.classList.add('closed');
      });

      if (closeWindow) {
        window.addEventListener('click', function () {
          modal.classList.remove('open');
          modal.classList.add('closed');
        });
      }
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Performances);
/* istanbul ignore next */

/* c8 ignore start */

/* eslint-disable */

;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','50548','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ZeFranck\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-TTB3K2P\",\"192.168.56.1\",\"192.168.1.68\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724232552530','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}

;
/* istanbul ignore next */

function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}

  return v;
}

;
/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/js/flexibles/PreFooter.js":
/*!***************************************!*\
  !*** ./src/js/flexibles/PreFooter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var PreFooter = /*#__PURE__*/_createClass(function PreFooter(className) {
  _classCallCheck(this, PreFooter);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var preFooter = this.section.querySelector('.prefooter__container');
      var title = this.section.querySelector('.prefooter-content__title');
      var textPart = preFooter.querySelector('.prefooter__content');
      var description = textPart.querySelector('.prefooter-content__description');
      var apps = textPart.querySelector('.prefooter-content__cta-wrapper');
      var app = apps.querySelectorAll('.prefooter-app');
      var imagePart = preFooter.querySelector('.prefooter__image-part');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      }).fromTo(imagePart, {
        y: 150,
        autoAlpha: 0
      }, {
        y: 1,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      }).fromTo(app, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        stagger: 0.35,
        duration: 0.25
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: preFooter,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (PreFooter);

/***/ }),

/***/ "./src/js/flexibles/Press.js":
/*!***********************************!*\
  !*** ./src/js/flexibles/Press.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! infinite-scroll */ "./node_modules/infinite-scroll/js/index.js");
/* harmony import */ var infinite_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(infinite_scroll__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);


var Press = /*#__PURE__*/_createClass(function Press(className) {
  _classCallCheck(this, Press);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/_createClass(function Section(section) {
  var _this = this;

  _classCallCheck(this, Section);

  _defineProperty(this, "initInfiniteScroll", function () {
    _this.InfiniteScroll = new (infinite_scroll__WEBPACK_IMPORTED_MODULE_3___default())(_this.postsContainer, {
      path: 'page/{{#}}',
      append: '.press__post',
      status: '.page-load-status',
      hideNav: '.pagination',
      button: _this.loadMoreButton,
      scrollThreshold: false,
      history: false
    });

    _this.InfiniteScroll.on('append', function (body, path, items) {
      if (items.length < 6) {
        _this.InfiniteScroll.destroy();

        _this.loadMoreButton.style.display = 'none';
      }
    });
  });

  this.section = section; // this.animate();
  // this.postsPerPage = section.dataset.postsPerPage;

  this.postsContainer = section.querySelector('.press__posts');
  this.loadMoreButton = section.querySelector('.view-more-button');
  this.initInfiniteScroll();
} // animate() {
// 	const banner = this.section.querySelector('.banner__container');
// 	const title = banner.querySelector('.banner-content__title');
// 	const description = banner.querySelector('.banner-content__description');
// 	const button = banner.querySelector('.banner-content__cta-wrapper');
// 	const ImagePart = banner.querySelector('.banner__image-part');
// 	const animation = gsap
// 		.timeline()
// 		.fromTo(title, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.45 })
// 		.fromTo(
// 			description,
// 			{ scale: 0.8, y: 100, autoAlpha: 0 },
// 			{ scale: 1, y: 0, autoAlpha: 1, stagger: 0.27, duration: 0.45 }
// 		)
// 		.fromTo(button, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.27, duration: 0.45 })
// 		.fromTo(ImagePart, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.25 });
// 	ScrollTrigger.create({
// 		trigger: banner,
// 		start: 'top bottom-=1%',
// 		toggleActions: 'play none none none',
// 		animation,
// 	});
// }
);

/* harmony default export */ __webpack_exports__["default"] = (Press);

/***/ }),

/***/ "./src/js/flexibles/Quote.js":
/*!***********************************!*\
  !*** ./src/js/flexibles/Quote.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Quote = /*#__PURE__*/_createClass(function Quote(className) {
  _classCallCheck(this, Quote);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var quoteWrapper = this.section.querySelector('.quote__container');
      var quote = quoteWrapper.querySelector('.quote-content__title');
      var description = quoteWrapper.querySelector('.quote-content__description');
      var photo = quoteWrapper.querySelector('.quote__image-part');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(quote, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(photo, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: quoteWrapper,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

/***/ "./src/js/flexibles/Reasons.js":
/*!*************************************!*\
  !*** ./src/js/flexibles/Reasons.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Reasons = /*#__PURE__*/_createClass(function Reasons(className) {
  _classCallCheck(this, Reasons);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var reasons = this.section.querySelector('.reasons-wrapper');
      var title = reasons.querySelectorAll('.text-part__title');
      var blocks = reasons.querySelector('.reasons-list');
      var block = blocks.querySelectorAll('.reason');
      var textImagePart = reasons.querySelector('.reasons__text-image');
      var button = reasons.querySelector('.reasons__cta-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
      animation.fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      });
      animation.fromTo(block, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });

      if (textImagePart) {
        var leftPart = textImagePart.querySelector('.reasons__text-image--left-part');
        animation.fromTo(leftPart, {
          scale: 0.8,
          x: -100,
          autoAlpha: 0
        }, {
          scale: 1,
          x: 0,
          autoAlpha: 1,
          stagger: 0.27,
          duration: 0.45
        });
      }

      if (textImagePart) {
        var rightPart = textImagePart.querySelector('.reasons__text-image--right-part');
        animation.fromTo(rightPart, {
          scale: 0.8,
          x: 100,
          autoAlpha: 0
        }, {
          scale: 1,
          x: 0,
          autoAlpha: 1,
          stagger: 0.27,
          duration: 0.45
        });
      }

      animation.fromTo(button, {
        scale: 0.8,
        y: 15,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: reasons,
        start: 'top bottom-=-4%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Reasons);

/***/ }),

/***/ "./src/js/flexibles/Simple.js":
/*!************************************!*\
  !*** ./src/js/flexibles/Simple.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Simple = /*#__PURE__*/_createClass(function Simple(className) {
  _classCallCheck(this, Simple);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var simple = this.section.querySelector('.simple-wrapper');
      var title = simple.querySelector('.section-part__title');
      var description = simple.querySelector('.section-part__description');
      var button = simple.querySelector('.simple__cta-wrapper');
      var labels = simple.querySelector('.simple__labels-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
      animation.fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      });
      animation.fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });
      animation.fromTo(button, {
        scale: 0.8,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });

      if (labels) {
        var label = labels.querySelectorAll('.label-picto');
        animation.fromTo(label, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          stagger: 0.01,
          duration: 0.25
        });
      }

      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: simple,
        start: 'top bottom-=5%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Simple);

/***/ }),

/***/ "./src/js/flexibles/Simulator.js":
/*!***************************************!*\
  !*** ./src/js/flexibles/Simulator.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Simulator = /*#__PURE__*/_createClass(function Simulator(className) {
  _classCallCheck(this, Simulator);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/_createClass(function Section(section) {
  _classCallCheck(this, Section);

  this.section = section;
  var simulatorRange = document.querySelector('.range-slider');
  var range = document.querySelector('.rs-range');
  var valueRangeV = document.querySelector('.valueRangeV');
  var rangeV = document.getElementById('rangeV');
  var topValue = Number((range.value - range.min) * 100 / (range.max - range.min));
  var topPosition = 10 - topValue * 0.7;
  rangeV.style.left = "calc(".concat(topValue, "% + (").concat(topPosition, "px))"); // Calcul Economies réalisées

  var savingValue = 0;
  var economy = (range.value * (2 / 100) / 12 - range.value * (1 / 100) / 12) * 2;
  var rendement = Math.pow(1 + 5 / 100, 1 / 6) - 1;

  for (var periode = 0; periode < 60; periode++) {
    var projection = economy * Math.pow(1 + rendement, periode);
    savingValue = savingValue + projection;
  }

  var feesSaving = Math.round(savingValue);
  var feesSavingAmount = document.querySelector('.fees-saving');
  feesSavingAmount.innerHTML = feesSaving.toLocaleString() + '€';

  var setValue = function setValue() {
    var newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
    var newPosition = 10 - newValue * 0.7;
    var newRangeValue = range.value;
    valueRangeV.innerHTML = newRangeValue + ' €';
    rangeV.style.left = "calc(".concat(newValue, "% + (").concat(newPosition, "px))"); // Calcul Frais birdee

    var feesBirdee = Math.round(range.value * (1 / 100) / 12);
    var feesBirdeeAmount = document.querySelector('.amount strong');
    feesBirdeeAmount.innerHTML = feesBirdee.toLocaleString() + '€'; // Calcul Frais bancaire constaté

    var feesConstat = Math.round(range.value * (5 / 100) / 12);
    var feesConstatAmount = document.querySelector('.fees-constat');
    feesConstatAmount.innerHTML = feesConstat.toLocaleString() + '€'; // Calcul Economies réalisées

    var savingValue = 0;
    var economy = (range.value * (2 / 100) / 12 - range.value * (1 / 100) / 12) * 2;
    var rendement = Math.pow(1 + 5 / 100, 1 / 6) - 1;

    for (var periode = 0; periode < 60; periode++) {
      var projection = economy * Math.pow(1 + rendement, periode);
      savingValue = savingValue + projection;
    }

    var feesSaving = Math.round(savingValue);
    var feesSavingAmount = document.querySelector('.fees-saving');
    feesSavingAmount.innerHTML = feesSaving.toLocaleString() + '€';
  };

  document.addEventListener('DOMContentLoaded', setValue);
  range.addEventListener('input', setValue);
});

/* harmony default export */ __webpack_exports__["default"] = (Simulator);

/***/ }),

/***/ "./src/js/flexibles/Steps.js":
/*!***********************************!*\
  !*** ./src/js/flexibles/Steps.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Steps = /*#__PURE__*/_createClass(function Steps(className) {
  _classCallCheck(this, Steps);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var steps = this.section.querySelector('.steps-container');
      var title = steps.querySelector('.steps__section-title');
      var description = steps.querySelector('.steps__section-description');
      var blocks = steps.querySelector('.steps-wrapper');
      var block = blocks.querySelectorAll('.step__container');
      var button = steps.querySelector('.section-steps__cta-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      }).fromTo(block, {
        y: 100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.6,
        duration: 0.35
      }).fromTo(button, {
        scale: 0.8,
        y: 15,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: steps,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./src/js/flexibles/StepsTabs.js":
/*!***************************************!*\
  !*** ./src/js/flexibles/StepsTabs.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var StepsTabs = /*#__PURE__*/_createClass(function StepsTabs(className) {
  _classCallCheck(this, StepsTabs);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var _console;

      /* eslint-disable */
      (_console = console).log.apply(_console, _toConsumableArray(oo_oo("3439984956_19_2_19_20_4", 'ici')));

      var stepstabs = this.section.querySelector('.steps-tabs .steps-tabs-container');
      var title = stepstabs.querySelector('.steps-tabs__section-title');
      var description = stepstabs.querySelector('.steps__section-description');
      var blocks = stepstabs.querySelector('.tabs');
      var block = blocks.querySelectorAll('.tab .tab-label');
      var button = stepstabs.querySelector('.section-steps__cta-wrapper');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
      animation.fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      });
      animation.fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });
      animation.fromTo(block, {
        y: 100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.6,
        duration: 0.35
      });
      animation.fromTo(button, {
        scale: 0.8,
        y: 15,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.45
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: stepstabs,
        start: 'top bottom-=3%',
        toggleActions: 'play none none reset',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (StepsTabs);
/* istanbul ignore next */

/* c8 ignore start */

/* eslint-disable */

;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','50548','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ZeFranck\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-TTB3K2P\",\"192.168.56.1\",\"192.168.1.68\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724232552530','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}

;
/* istanbul ignore next */

function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}

  return v;
}

;
/* istanbul ignore next */

function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}

  return v;
}

;
/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/js/flexibles/TextImage.js":
/*!***************************************!*\
  !*** ./src/js/flexibles/TextImage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var TextImage = /*#__PURE__*/_createClass(function TextImage(className) {
  _classCallCheck(this, TextImage);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var textImage = this.section.querySelector('.text-image-wrapper');
      var textPart = textImage.querySelector('.text-part__container');
      var title = textPart.querySelector('.text-part__title');
      var surtitle = textPart.querySelector('.text-part__surtitle');
      var button = textPart.querySelector('.text-image__cta-wrapper');
      var description = textPart.querySelector('.text-part__description');
      var enumerationWrapper = textPart.querySelector('.text-image__enumerations-container');
      var ImagePart = textImage.querySelector('.text-image__image');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
      animation.fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      });

      if (surtitle) {
        animation.fromTo(surtitle, {
          y: -100,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.45
        });
      }

      if (button) {
        animation.fromTo(button, {
          y: -100,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.45
        });
      }

      animation.fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.25
      });
      animation.fromTo(ImagePart, {
        y: 70,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.25
      });

      if (enumerationWrapper) {
        var enumeration = enumerationWrapper.querySelectorAll('.enumeration-block');
        animation.fromTo(enumeration, {
          y: 150,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.55,
          duration: 0.35
        });
      }

      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: textImage,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (TextImage);

/***/ }),

/***/ "./src/js/flexibles/TwoBlocks.js":
/*!***************************************!*\
  !*** ./src/js/flexibles/TwoBlocks.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var TwoBlocks = /*#__PURE__*/_createClass(function TwoBlocks(className) {
  _classCallCheck(this, TwoBlocks);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var TwoBlocks = this.section.querySelector('.two-blocks-wrapper');
      var title = TwoBlocks.querySelector('.text-part__title');
      var description = TwoBlocks.querySelector('.text-part__description');
      var buttons = TwoBlocks.querySelector('.buttons-wrapper__list');
      var button = buttons.querySelectorAll('.cta-wrapper');
      var ImagePart = TwoBlocks.querySelector('.picto-only');
      var operators = TwoBlocks.querySelector('.operators__list');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();
      animation.fromTo(title, {
        y: -100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      });
      animation.fromTo(description, {
        scale: 0.8,
        y: 100,
        autoAlpha: 0
      }, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        stagger: 0.27,
        duration: 0.25
      });
      animation.fromTo(button, {
        scale: 0.8,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        stagger: 0.35,
        duration: 0.35
      });

      if (operators) {
        var operator = operators.querySelectorAll('.operator-wrapper');
        animation.fromTo(operator, {
          y: 150,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.45,
          duration: 0.35
        });
      }

      if (ImagePart) {
        var image = ImagePart.querySelectorAll('.text-picto__wrapper');
        animation.fromTo(image, 0.3, {
          y: 150,
          autoAlpha: 0
        }, {
          y: 0,
          autoAlpha: 1
        });
      }

      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: TwoBlocks,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (TwoBlocks);

/***/ }),

/***/ "./src/js/flexibles/Wallets.js":
/*!*************************************!*\
  !*** ./src/js/flexibles/Wallets.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

var Wallets = /*#__PURE__*/_createClass(function Wallets(className) {
  _classCallCheck(this, Wallets);

  this.sections = document.querySelectorAll(".".concat(className));
  this.sections.forEach(function (section) {
    new Section(section);
  });
});

var Section = /*#__PURE__*/function () {
  function Section(section) {
    _classCallCheck(this, Section);

    this.section = section;
    this.animate();
    var wallets = document.querySelectorAll('.wallet-block');
    wallets.forEach(function (wallet) {
      var radios = wallet.querySelectorAll('.wallet-theme .theme-input');
      var tabs = wallet.querySelectorAll('.theme-input-content');
      var yearsContent = wallet.querySelectorAll('.year__content');
      var years = wallet.querySelectorAll('.tab__year');
      radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          var _this = this;

          var yearActive = wallet.querySelector('.tab__year.active');
          var dataYearActive = yearActive.dataset.year;
          tabs.forEach(function (tab) {
            tab.classList.add('hidden');

            if (_this.checked && tab.getAttribute('tabname') == _this.value) {
              tab.classList.remove('hidden');
              var yearsActive = wallet.querySelectorAll('.tab__year.active');
              yearsActive.forEach(function (yearActive) {
                if (yearActive.classList.contains('active')) {
                  yearActive.classList.remove('active');
                }
              });
              tab.querySelector(".tab__year[data-year='".concat(dataYearActive, "']")).classList.add('active');
            }
          });
        });
      });
      years.forEach(function (year) {
        year.addEventListener('click', function () {
          var yearsActive = wallet.querySelectorAll('.tab__year.active');
          yearsActive.forEach(function (yearActive) {
            if (yearActive.classList.contains('active')) {
              yearActive.classList.remove('active');
            }
          });
          this.classList.add('active');
          yearsContent.forEach(function (yearContent) {
            yearContent.classList.add('hidden');
            var yearValue = year.dataset.year;

            if (yearContent.getAttribute('tabname') == yearValue) {
              yearContent.classList.remove('hidden');
            }
          });
        });
      });
    });
  }

  _createClass(Section, [{
    key: "animate",
    value: function animate() {
      var walletsWrapper = this.section.querySelector('.wallet-container');
      var title = walletsWrapper.querySelector('.wallet__section-title');
      var wallets = walletsWrapper.querySelector('.wallet-wrapper');
      var wallet = wallets.querySelectorAll('.wallet-block');
      var animation = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().fromTo(title, {
        y: 100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.45
      }).fromTo(wallet, {
        y: 120,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.45,
        duration: 0.35
      });
      gsap_all__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
        trigger: walletsWrapper,
        start: 'top bottom-=1%',
        toggleActions: 'play none none none',
        animation: animation
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ __webpack_exports__["default"] = (Wallets);

/***/ }),

/***/ "./src/js/utils/functions.js":
/*!***********************************!*\
  !*** ./src/js/utils/functions.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
function setLanguageCookies(language, country) {
  var VISITOR_COUNTRY_COOKIE = 'wordpress_country_preference';
  var VISITOR_LANGUAGE_COOKIE = 'wordpress_language_preference';
  var expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  var domain = "domain=".concat(document.domain.match(/[^\.]*\.[^.]*$/)[0], ";");
  document.cookie = "".concat(VISITOR_LANGUAGE_COOKIE, "=").concat(language, "; expires=").concat(expires, "; path=/; ").concat(domain);
  document.cookie = "".concat(VISITOR_COUNTRY_COOKIE, "=").concat(country, "; expires=").concat(expires, "; path=/; ").concat(domain);
}

/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/***/ (function(module) {

/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/***/ (function(module) {

/**
 * Fizzy UI utils v3.0.0
 * MIT license
 */

( function( global, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory( global );
  } else {
    // browser global
    global.fizzyUIUtils = factory( global );
  }

}( this, function factory( global ) {

let utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  return Object.assign( a, b );
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  let index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( elem.matches( selector ) ) return elem;
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );

  return elems
    // check that elem is an actual element
    .filter( ( elem ) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return ffElems;
      }
      // filter & find items if we have a selector
      // filter
      if ( elem.matches( selector ) ) {
        ffElems.push( elem );
      }
      // find children
      let childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      ffElems = ffElems.concat( ...childElems );
      return ffElems;
    }, [] );
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  let method = _class.prototype[ methodName ];
  let timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    clearTimeout( this[ timeoutName ] );

    let args = arguments;
    this[ timeoutName ] = setTimeout( () => {
      method.apply( this, args );
      delete this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( onDocReady ) {
  let readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( onDocReady );
  } else {
    document.addEventListener( 'DOMContentLoaded', onDocReady );
  }
};

// ----- htmlInit ----- //

// http://bit.ly/3oYLusc
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  } ).toLowerCase();
};

let console = global.console;

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    let dashedNamespace = utils.toDashed( namespace );
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll( `[${dataAttr}]` );
    let jQuery = global.jQuery;

    [ ...dataAttrElems ].forEach( ( elem ) => {
      let attr = elem.getAttribute( dataAttr );
      let options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( `Error parsing ${dataAttr} on ${elem.className}: ${error}` );
        }
        return;
      }
      // initialize
      let instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    } );

  } );
};

// -----  ----- //

return utils;

} ) );


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": function() { return /* binding */ CSSPlugin; },
/* harmony export */   "default": function() { return /* binding */ CSSPlugin; },
/* harmony export */   "_getBBox": function() { return /* binding */ _getBBox; },
/* harmony export */   "_createElement": function() { return /* binding */ _createElement; },
/* harmony export */   "checkPrefix": function() { return /* binding */ _checkPropPrefix; }
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/ScrollToPlugin.js":
/*!*********************************************!*\
  !*** ./node_modules/gsap/ScrollToPlugin.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToPlugin": function() { return /* binding */ ScrollToPlugin; },
/* harmony export */   "default": function() { return /* binding */ ScrollToPlugin; }
/* harmony export */ });
/*!
 * ScrollToPlugin 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _window,
    _docEl,
    _body,
    _toArray,
    _config,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _max = function _max(element, axis) {
  var dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + dim,
      client = "client" + dim;
  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
},
    _buildGetter = function _buildGetter(e, axis) {
  //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
  var p = "scroll" + (axis === "x" ? "Left" : "Top");

  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }

  return function () {
    return e[p];
  };
},
    _clean = function _clean(value, index, target, targets) {
  _isFunction(value) && (value = value(index, target, targets));

  if (typeof value !== "object") {
    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
      x: value,
      y: value
    } : {
      y: value
    }; //if we don't receive an object as the parameter, assume the user intends "y".
  } else if (value.nodeType) {
    return {
      y: value,
      x: value
    };
  } else {
    var result = {},
        p;

    for (p in value) {
      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
    }

    return result;
  }
},
    _getOffset = function _getOffset(element, container) {
  element = _toArray(element)[0];

  if (!element || !element.getBoundingClientRect) {
    return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
  }

  var rect = element.getBoundingClientRect(),
      isRoot = !container || container === _window || container === _body,
      cRect = isRoot ? {
    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
  } : container.getBoundingClientRect(),
      offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };

  if (!isRoot && container) {
    //only add the current scroll position if it's not the window/body.
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }

  return offsets;
},
    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
},
    _initCore = function _initCore() {
  gsap = _getGSAP();

  if (_windowExists() && gsap && document.body) {
    _window = window;
    _body = document.body;
    _docEl = document.documentElement;
    _toArray = gsap.utils.toArray;
    gsap.config({
      autoKillThreshold: 7
    });
    _config = gsap.config();
    _coreInitted = 1;
  }
};

var ScrollToPlugin = {
  version: "3.9.1",
  name: "scrollTo",
  rawVars: 1,
  register: function register(core) {
    gsap = core;

    _initCore();
  },
  init: function init(target, value, tween, index, targets) {
    _coreInitted || _initCore();
    var data = this,
        snapType = gsap.getProperty(target, "scrollSnapType");
    data.isWin = target === _window;
    data.target = target;
    data.tween = tween;
    value = _clean(value, index, target, targets);
    data.vars = value;
    data.autoKill = !!value.autoKill;
    data.getX = _buildGetter(target, "x");
    data.getY = _buildGetter(target, "y");
    data.x = data.xPrev = data.getX();
    data.y = data.yPrev = data.getY();

    if (snapType && snapType !== "none") {
      // disable scroll snapping to avoid strange behavior
      data.snap = 1;
      data.snapInline = target.style.scrollSnapType;
      target.style.scrollSnapType = "none";
    }

    if (value.x != null) {
      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

      data._props.push("scrollTo_x");
    } else {
      data.skipX = 1;
    }

    if (value.y != null) {
      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

      data._props.push("scrollTo_y");
    } else {
      data.skipY = 1;
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt,
        target = data.target,
        tween = data.tween,
        autoKill = data.autoKill,
        xPrev = data.xPrev,
        yPrev = data.yPrev,
        isWin = data.isWin,
        snap = data.snap,
        snapInline = data.snapInline,
        x,
        y,
        yDif,
        xDif,
        threshold;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    x = isWin || !data.skipX ? data.getX() : xPrev;
    y = isWin || !data.skipY ? data.getY() : yPrev;
    yDif = y - yPrev;
    xDif = x - xPrev;
    threshold = _config.autoKillThreshold;

    if (data.x < 0) {
      //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
      data.x = 0;
    }

    if (data.y < 0) {
      data.y = 0;
    }

    if (autoKill) {
      //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
        data.skipX = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
        data.skipY = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (data.skipX && data.skipY) {
        tween.kill();
        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
      }
    }

    if (isWin) {
      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
    } else {
      data.skipY || (target.scrollTop = data.y);
      data.skipX || (target.scrollLeft = data.x);
    }

    if (snap && (ratio === 1 || ratio === 0)) {
      y = target.scrollTop;
      x = target.scrollLeft;
      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
      target.scrollTop = y + 1; // bug in Safari causes the element to totally reset its scroll position when scroll-snap-type changes, so we need to set it to a slightly different value and then back again to work around this bug.

      target.scrollLeft = x + 1;
      target.scrollTop = y;
      target.scrollLeft = x;
    }

    data.xPrev = data.x;
    data.yPrev = data.y;
  },
  kill: function kill(property) {
    var both = property === "scrollTo";

    if (both || property === "scrollTo_x") {
      this.skipX = 1;
    }

    if (both || property === "scrollTo_y") {
      this.skipY = 1;
    }
  }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollTrigger": function() { return /* binding */ ScrollTrigger; },
/* harmony export */   "default": function() { return /* binding */ ScrollTrigger; }
/* harmony export */ });
/*!
 * ScrollTrigger 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _proxies = [],
    _scrollers = [],
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 1,
    _passThrough = function _passThrough(v) {
  return v;
},
    _getTarget = function _getTarget(t) {
  return _toArray(t)[0] || (_isString(t) && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  // we store the scroller functions in a alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
    return arguments.length ? element[s] = value : element[s];
  }));
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
  var d = _ref2.d,
      d2 = _ref2.d2,
      a = _ref2.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref3) {
  var s = _ref3.s,
      d2 = _ref3.d2,
      d = _ref3.d,
      a = _ref3.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_body[s] || _docEl[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _horizontal = {
  s: _scrollLeft,
  p: _left,
  p2: _Left,
  os: _right,
  os2: _Right,
  d: _width,
  d2: _Width,
  a: "x",
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  }
},
    _vertical = {
  s: _scrollTop,
  p: _top,
  p2: _Top,
  os: _bottom,
  os2: _Bottom,
  d: _height,
  d2: _Height,
  a: "y",
  op: _horizontal,
  sc: function sc(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  }
},
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref4) {
  var d2 = _ref4.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func) {
  return element.addEventListener(type, func, {
    passive: true
  });
},
    _removeListener = function _removeListener(element, type, func) {
  return element.removeEventListener(type, func);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref5.startColor,
      endColor = _ref5.endColor,
      fontSize = _ref5.fontSize,
      indent = _ref5.indent,
      fontWeight = _ref5.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && _updateAll();
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010
  _updateAll();

  _lastScrollTime || _dispatch("scrollStart");
  _lastScrollTime = _getTime();
},
    _onResize = function _onResize() {
  return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0,
      index;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 4) {
      index = _win.matchMedia(_media[i]).matches;

      if (index !== _media[i + 3]) {
        // note: some browsers fire the matchMedia event multiple times, like when going full screen, so we shouldn't call the function multiple times. Check to see if it's already matched.
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
      }
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }

    _creatingMedia = 0;
    _coreInitted && _refreshAll(0, 1);
    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert();
      }
    }
  }

  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory() {
  return _scrollers.forEach(function (obj) {
    return typeof obj === "function" && (obj.rec = 0);
  });
},
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
_refreshingAll,
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refreshingAll = true;

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _triggers.forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _triggers.forEach(function (t) {
    return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
  }); // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max".


  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _clearScrollMemory();

  _resizeDelay.pause();

  _refreshingAll = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function _updateAll() {
  if (!_refreshingAll) {
    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
  }
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = value.split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = _getTarget(trigger) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = _round(getScroll()); // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.

      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = _round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  _addListener(scroller, "wheel", function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  }); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  return getTween;
};

_horizontal.op = _vertical;
var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(1); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = _getTarget(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        scrollFunc = _getScrollFunc(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter;

    self.media = _creatingMedia;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    "refreshPriority" in vars && (_sort = 1);
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      scrubSmooth = _isNumber(scrub) && scrub;
      scrubSmooth && (scrubTween = gsap.to(animation, {
        ease: "power3",
        duration: scrubSmooth,
        onComplete: function onComplete() {
          return onScrubComplete && onScrubComplete(self);
        }
      }));
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    _triggers.push(self);

    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== scrollFunc()) {
          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-self.progress, 1 - self.progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = self.progress + (snap.inertia === false ? 0 : change1),
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              scroll = scrollFunc(),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete,
              tween = tweenTo.tween;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - self.progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin);
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          self.scroll.rec || (self.scroll.rec = scrollFunc());
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      _refreshing = 1;
      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
      self.isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert();
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation) {
          cs = curTrigger.end - curTrigger.start;

          if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll"); // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && scrollFunc(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate();

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = scrollFunc(); // reset velocity

      if (!containerAnimation) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false);
      _refreshing = 0;
      animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update(0, 0, 1);
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return _isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a;
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && toggled && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween.vars.totalProgress = clipped;
            scrubTween.invalidate().restart();
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(pinStart + pinChange * clipped);
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (pin) {
        pinStart += newStart - start;
        pinChange += newEnd - newStart - change;
      }

      self.start = start = newStart;
      self.end = end = newEnd;
      change = newEnd - newStart;
      self.update();
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }
    };

    self.enable(false, false);
    !animation || !animation.add || change ? self.refresh() : gsap.delayedCall(0.01, function () {
      return start || end || self.refresh();
    }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();

      if (_windowExists() && window.document) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
      }

      if (gsap) {
        _toArray = gsap.utils.toArray;
        _clamp = gsap.utils.clamp;
        _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
        gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

        if (_body) {
          _addListener(_win, "wheel", _onScroll);

          _root = [_win, _doc, _docEl, _body];

          _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


          var bodyStyle = _body.style,
              border = bodyStyle.borderTopStyle,
              bounds;
          bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

          bounds = _getBounds(_body);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 200);
          gsap.delayedCall(0.5, function () {
            return _startup = 0;
          });

          _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


          _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
            return _pointerIsDown = 1;
          });

          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
            return _pointerIsDown = 0;
          });

          _transformProp = gsap.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted = _getTime();
          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc, "visibilitychange", function () {
            var w = _win.innerWidth,
                h = _win.innerHeight;

            if (_doc.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
            return _lastScrollTime || _refreshAll();
          }, _win, "resize", _onResize];

          _iterateAutoRefresh(_addListener);
        }
      }
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.kill = function kill() {
    _enabled = 0;

    _triggers.slice(0).forEach(function (trigger) {
      return trigger.kill(1);
    });
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target),
        i = _scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    // _media is populated in the following order: mediaQueryString, onMatch, onUnmatch, isMatched. So if there are two media queries, the Array would have a length of 8
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }

          _media[i + 3] = mq.matches;
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.9.1";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = _updateAll;
ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.slice(0);
};

ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GSCache": function() { return /* binding */ GSCache; },
/* harmony export */   "Animation": function() { return /* binding */ Animation; },
/* harmony export */   "Timeline": function() { return /* binding */ Timeline; },
/* harmony export */   "Tween": function() { return /* binding */ Tween; },
/* harmony export */   "PropTween": function() { return /* binding */ PropTween; },
/* harmony export */   "gsap": function() { return /* binding */ gsap; },
/* harmony export */   "Power0": function() { return /* binding */ Power0; },
/* harmony export */   "Power1": function() { return /* binding */ Power1; },
/* harmony export */   "Power2": function() { return /* binding */ Power2; },
/* harmony export */   "Power3": function() { return /* binding */ Power3; },
/* harmony export */   "Power4": function() { return /* binding */ Power4; },
/* harmony export */   "Linear": function() { return /* binding */ Linear; },
/* harmony export */   "Quad": function() { return /* binding */ Quad; },
/* harmony export */   "Cubic": function() { return /* binding */ Cubic; },
/* harmony export */   "Quart": function() { return /* binding */ Quart; },
/* harmony export */   "Quint": function() { return /* binding */ Quint; },
/* harmony export */   "Strong": function() { return /* binding */ Strong; },
/* harmony export */   "Elastic": function() { return /* binding */ Elastic; },
/* harmony export */   "Back": function() { return /* binding */ Back; },
/* harmony export */   "SteppedEase": function() { return /* binding */ SteppedEase; },
/* harmony export */   "Bounce": function() { return /* binding */ Bounce; },
/* harmony export */   "Sine": function() { return /* binding */ Sine; },
/* harmony export */   "Expo": function() { return /* binding */ Expo; },
/* harmony export */   "Circ": function() { return /* binding */ Circ; },
/* harmony export */   "TweenMax": function() { return /* binding */ Tween; },
/* harmony export */   "TweenLite": function() { return /* binding */ Tween; },
/* harmony export */   "TimelineMax": function() { return /* binding */ Timeline; },
/* harmony export */   "TimelineLite": function() { return /* binding */ Timeline; },
/* harmony export */   "default": function() { return /* binding */ gsap; },
/* harmony export */   "wrap": function() { return /* binding */ wrap; },
/* harmony export */   "wrapYoyo": function() { return /* binding */ wrapYoyo; },
/* harmony export */   "distribute": function() { return /* binding */ distribute; },
/* harmony export */   "random": function() { return /* binding */ random; },
/* harmony export */   "snap": function() { return /* binding */ snap; },
/* harmony export */   "normalize": function() { return /* binding */ normalize; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "clamp": function() { return /* binding */ clamp; },
/* harmony export */   "splitColor": function() { return /* binding */ splitColor; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "selector": function() { return /* binding */ selector; },
/* harmony export */   "mapRange": function() { return /* binding */ mapRange; },
/* harmony export */   "pipe": function() { return /* binding */ pipe; },
/* harmony export */   "unitize": function() { return /* binding */ unitize; },
/* harmony export */   "interpolate": function() { return /* binding */ interpolate; },
/* harmony export */   "shuffle": function() { return /* binding */ shuffle; },
/* harmony export */   "_getProperty": function() { return /* binding */ _getProperty; },
/* harmony export */   "_numExp": function() { return /* binding */ _numExp; },
/* harmony export */   "_numWithUnitExp": function() { return /* binding */ _numWithUnitExp; },
/* harmony export */   "_isString": function() { return /* binding */ _isString; },
/* harmony export */   "_isUndefined": function() { return /* binding */ _isUndefined; },
/* harmony export */   "_renderComplexString": function() { return /* binding */ _renderComplexString; },
/* harmony export */   "_relExp": function() { return /* binding */ _relExp; },
/* harmony export */   "_setDefaults": function() { return /* binding */ _setDefaults; },
/* harmony export */   "_removeLinkedListItem": function() { return /* binding */ _removeLinkedListItem; },
/* harmony export */   "_forEachName": function() { return /* binding */ _forEachName; },
/* harmony export */   "_sortPropTweensByPriority": function() { return /* binding */ _sortPropTweensByPriority; },
/* harmony export */   "_colorStringFilter": function() { return /* binding */ _colorStringFilter; },
/* harmony export */   "_replaceRandom": function() { return /* binding */ _replaceRandom; },
/* harmony export */   "_checkPlugin": function() { return /* binding */ _checkPlugin; },
/* harmony export */   "_plugins": function() { return /* binding */ _plugins; },
/* harmony export */   "_ticker": function() { return /* binding */ _ticker; },
/* harmony export */   "_config": function() { return /* binding */ _config; },
/* harmony export */   "_roundModifier": function() { return /* binding */ _roundModifier; },
/* harmony export */   "_round": function() { return /* binding */ _round; },
/* harmony export */   "_missingPlugin": function() { return /* binding */ _missingPlugin; },
/* harmony export */   "_getSetter": function() { return /* binding */ _getSetter; },
/* harmony export */   "_getCache": function() { return /* binding */ _getCache; },
/* harmony export */   "_colorExp": function() { return /* binding */ _colorExp; }
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : value.substr(v.index + v[0].length);
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return this;
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && _removeFromParent(prevStartAt.render(-1, true));

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.9.1";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gsap": function() { return /* binding */ gsapWithCSS; },
/* harmony export */   "default": function() { return /* binding */ gsapWithCSS; },
/* harmony export */   "CSSPlugin": function() { return /* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin; },
/* harmony export */   "TweenMax": function() { return /* binding */ TweenMaxWithCSS; },
/* harmony export */   "TweenLite": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite; },
/* harmony export */   "TimelineMax": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax; },
/* harmony export */   "TimelineLite": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite; },
/* harmony export */   "Power0": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0; },
/* harmony export */   "Power1": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1; },
/* harmony export */   "Power2": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2; },
/* harmony export */   "Power3": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3; },
/* harmony export */   "Power4": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4; },
/* harmony export */   "Linear": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear; },
/* harmony export */   "Quad": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad; },
/* harmony export */   "Cubic": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic; },
/* harmony export */   "Quart": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart; },
/* harmony export */   "Quint": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint; },
/* harmony export */   "Strong": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong; },
/* harmony export */   "Elastic": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic; },
/* harmony export */   "Back": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back; },
/* harmony export */   "SteppedEase": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase; },
/* harmony export */   "Bounce": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce; },
/* harmony export */   "Sine": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine; },
/* harmony export */   "Expo": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo; },
/* harmony export */   "Circ": function() { return /* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ; }
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/infinite-scroll/js/button.js":
/*!***************************************************!*\
  !*** ./node_modules/infinite-scroll/js/button.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// button
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
        __webpack_require__(/*! fizzy-ui-utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

// -------------------------- InfiniteScrollButton -------------------------- //

class InfiniteScrollButton {
  constructor( element, infScroll ) {
    this.element = element;
    this.infScroll = infScroll;
    // events
    this.clickHandler = this.onClick.bind( this );
    this.element.addEventListener( 'click', this.clickHandler );
    infScroll.on( 'request', this.disable.bind( this ) );
    infScroll.on( 'load', this.enable.bind( this ) );
    infScroll.on( 'error', this.hide.bind( this ) );
    infScroll.on( 'last', this.hide.bind( this ) );
  }

  onClick( event ) {
    event.preventDefault();
    this.infScroll.loadNextPage();
  }

  enable() {
    this.element.removeAttribute('disabled');
  }

  disable() {
    this.element.disabled = 'disabled';
  }

  hide() {
    this.element.style.display = 'none';
  }

  destroy() {
    this.element.removeEventListener( 'click', this.clickHandler );
  }

}

// -------------------------- InfiniteScroll methods -------------------------- //

// InfiniteScroll.defaults.button = null;

InfiniteScroll.create.button = function() {
  let buttonElem = utils.getQueryElement( this.options.button );
  if ( buttonElem ) {
    this.button = new InfiniteScrollButton( buttonElem, this );
  }
};

InfiniteScroll.destroy.button = function() {
  if ( this.button ) this.button.destroy();
};

// --------------------------  -------------------------- //

InfiniteScroll.Button = InfiniteScrollButton;

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/core.js":
/*!*************************************************!*\
  !*** ./node_modules/infinite-scroll/js/core.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// core
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! fizzy-ui-utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    );
  } else {
    // browser global
    window.InfiniteScroll = factory(
        window,
        window.EvEmitter,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, EvEmitter, utils ) {

let jQuery = window.jQuery;
// internal store of all InfiniteScroll intances
let instances = {};

function InfiniteScroll( element, options ) {
  let queryElem = utils.getQueryElement( element );

  if ( !queryElem ) {
    console.error( 'Bad element for InfiniteScroll: ' + ( queryElem || element ) );
    return;
  }
  element = queryElem;
  // do not initialize twice on same element
  if ( element.infiniteScrollGUID ) {
    let instance = instances[ element.infiniteScrollGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = { ...InfiniteScroll.defaults };
  this.option( options );
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  this.create();
}

// defaults
InfiniteScroll.defaults = {
  // path: null,
  // hideNav: null,
  // debug: false,
};

// create & destroy methods
InfiniteScroll.create = {};
InfiniteScroll.destroy = {};

let proto = InfiniteScroll.prototype;
// inherit EvEmitter
Object.assign( proto, EvEmitter.prototype );

// --------------------------  -------------------------- //

// globally unique identifiers
let GUID = 0;

proto.create = function() {
  // create core
  // add id for InfiniteScroll.data
  let id = this.guid = ++GUID;
  this.element.infiniteScrollGUID = id; // expando
  instances[ id ] = this; // associate via id
  // properties
  this.pageIndex = 1; // default to first page
  this.loadCount = 0;
  this.updateGetPath();
  // bail if getPath not set, or returns falsey #776
  let hasPath = this.getPath && this.getPath();
  if ( !hasPath ) {
    console.error('Disabling InfiniteScroll');
    return;
  }
  this.updateGetAbsolutePath();
  this.log( 'initialized', [ this.element.className ] );
  this.callOnInit();
  // create features
  for ( let method in InfiniteScroll.create ) {
    InfiniteScroll.create[ method ].call( this );
  }
};

proto.option = function( opts ) {
  Object.assign( this.options, opts );
};

// call onInit option, used for binding events on init
proto.callOnInit = function() {
  let onInit = this.options.onInit;
  if ( onInit ) {
    onInit.call( this, this );
  }
};

// ----- events ----- //

proto.dispatchEvent = function( type, event, args ) {
  this.log( type, args );
  let emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // namespace jQuery event
  type += '.infiniteScroll';
  let $event = type;
  if ( event ) {
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    let jQEvent = jQuery.Event( event );
    jQEvent.type = type;
    $event = jQEvent;
  }
  this.$element.trigger( $event, args );
};

let loggers = {
  initialized: ( className ) => `on ${className}`,
  request: ( path ) => `URL: ${path}`,
  load: ( response, path ) => `${response.title || ''}. URL: ${path}`,
  error: ( error, path ) => `${error}. URL: ${path}`,
  append: ( response, path, items ) => `${items.length} items. URL: ${path}`,
  last: ( response, path ) => `URL: ${path}`,
  history: ( title, path ) => `URL: ${path}`,
  pageIndex: function( index, origin ) {
    return `current page determined to be: ${index} from ${origin}`;
  },
};

// log events
proto.log = function( type, args ) {
  if ( !this.options.debug ) return;

  let message = `[InfiniteScroll] ${type}`;
  let logger = loggers[ type ];
  if ( logger ) message += '. ' + logger.apply( this, args );
  console.log( message );
};

// -------------------------- methods used amoung features -------------------------- //

proto.updateMeasurements = function() {
  this.windowHeight = window.innerHeight;
  let rect = this.element.getBoundingClientRect();
  this.top = rect.top + window.scrollY;
};

proto.updateScroller = function() {
  let elementScroll = this.options.elementScroll;
  if ( !elementScroll ) {
    // default, use window
    this.scroller = window;
    return;
  }
  // if true, set to element, otherwise use option
  this.scroller = elementScroll === true ? this.element :
    utils.getQueryElement( elementScroll );
  if ( !this.scroller ) {
    throw new Error(`Unable to find elementScroll: ${elementScroll}`);
  }
};

// -------------------------- page path -------------------------- //

proto.updateGetPath = function() {
  let optPath = this.options.path;
  if ( !optPath ) {
    console.error(`InfiniteScroll path option required. Set as: ${optPath}`);
    return;
  }
  // function
  let type = typeof optPath;
  if ( type == 'function' ) {
    this.getPath = optPath;
    return;
  }
  // template string: '/pages/{{#}}.html'
  let templateMatch = type == 'string' && optPath.match('{{#}}');
  if ( templateMatch ) {
    this.updateGetPathTemplate( optPath );
    return;
  }
  // selector: '.next-page-selector'
  this.updateGetPathSelector( optPath );
};

proto.updateGetPathTemplate = function( optPath ) {
  // set getPath with template string
  this.getPath = () => {
    let nextIndex = this.pageIndex + 1;
    return optPath.replace( '{{#}}', nextIndex );
  };
  // get pageIndex from location
  // convert path option into regex to look for pattern in location
  // escape query (?) in url, allows for parsing GET parameters
  let regexString = optPath
    .replace( /(\\\?|\?)/, '\\?' )
    .replace( '{{#}}', '(\\d\\d?\\d?)' );
  let templateRe = new RegExp( regexString );
  let match = location.href.match( templateRe );

  if ( match ) {
    this.pageIndex = parseInt( match[1], 10 );
    this.log( 'pageIndex', [ this.pageIndex, 'template string' ] );
  }
};

let pathRegexes = [
  // WordPress & Tumblr - example.com/page/2
  // Jekyll - example.com/page2
  /^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,
  // Drupal - example.com/?page=1
  /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,
  // catch all, last occurence of a number
  /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/,
];

// try matching href to pathRegexes patterns
let getPathParts = InfiniteScroll.getPathParts = function( href ) {
  if ( !href ) return;
  for ( let regex of pathRegexes ) {
    let match = href.match( regex );
    if ( match ) {
      let [ , begin, index, end ] = match;
      return { begin, index, end };
    }
  }
};

proto.updateGetPathSelector = function( optPath ) {
  // parse href of link: '.next-page-link'
  let hrefElem = document.querySelector( optPath );
  if ( !hrefElem ) {
    console.error(`Bad InfiniteScroll path option. Next link not found: ${optPath}`);
    return;
  }

  let href = hrefElem.getAttribute('href');
  let pathParts = getPathParts( href );
  if ( !pathParts ) {
    console.error(`InfiniteScroll unable to parse next link href: ${href}`);
    return;
  }

  let { begin, index, end } = pathParts;
  this.isPathSelector = true; // flag for checkLastPage()
  this.getPath = () => begin + ( this.pageIndex + 1 ) + end;
  // get pageIndex from href
  this.pageIndex = parseInt( index, 10 ) - 1;
  this.log( 'pageIndex', [ this.pageIndex, 'next link' ] );
};

proto.updateGetAbsolutePath = function() {
  let path = this.getPath();
  // path doesn't start with http or /
  let isAbsolute = path.match( /^http/ ) || path.match( /^\// );
  if ( isAbsolute ) {
    this.getAbsolutePath = this.getPath;
    return;
  }

  let { pathname } = location;
  // query parameter #829. example.com/?pg=2
  let isQuery = path.match( /^\?/ );
  // /foo/bar/index.html => /foo/bar
  let directory = pathname.substring( 0, pathname.lastIndexOf('/') );
  let pathStart = isQuery ? pathname : directory + '/';

  this.getAbsolutePath = () => pathStart + this.getPath();
};

// -------------------------- nav -------------------------- //

// hide navigation
InfiniteScroll.create.hideNav = function() {
  let nav = utils.getQueryElement( this.options.hideNav );
  if ( !nav ) return;

  nav.style.display = 'none';
  this.nav = nav;
};

InfiniteScroll.destroy.hideNav = function() {
  if ( this.nav ) this.nav.style.display = '';
};

// -------------------------- destroy -------------------------- //

proto.destroy = function() {
  this.allOff(); // remove all event listeners
  // call destroy methods
  for ( let method in InfiniteScroll.destroy ) {
    InfiniteScroll.destroy[ method ].call( this );
  }

  delete this.element.infiniteScrollGUID;
  delete instances[ this.guid ];
  // remove jQuery data. #807
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'infiniteScroll' );
  }
};

// -------------------------- utilities -------------------------- //

// https://remysharp.com/2010/07/21/throttling-function-calls
InfiniteScroll.throttle = function( fn, threshold ) {
  threshold = threshold || 200;
  let last, timeout;

  return function() {
    let now = +new Date();
    let args = arguments;
    let trigger = () => {
      last = now;
      fn.apply( this, args );
    };
    if ( last && now < last + threshold ) {
      // hold on to it
      clearTimeout( timeout );
      timeout = setTimeout( trigger, threshold );
    } else {
      trigger();
    }
  };
};

InfiniteScroll.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  let id = elem && elem.infiniteScrollGUID;
  return id && instances[ id ];
};

// set internal jQuery, for Webpack + jQuery v3
InfiniteScroll.setJQuery = function( jqry ) {
  jQuery = jqry;
};

// -------------------------- setup -------------------------- //

utils.htmlInit( InfiniteScroll, 'infinite-scroll' );

// add noop _init method for jQuery Bridget. #768
proto._init = function() {};

let { jQueryBridget } = window;
if ( jQuery && jQueryBridget ) {
  jQueryBridget( 'infiniteScroll', InfiniteScroll, jQuery );
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/history.js":
/*!****************************************************!*\
  !*** ./node_modules/infinite-scroll/js/history.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// history
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
        __webpack_require__(/*! fizzy-ui-utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  history: 'replace',
  // historyTitle: false,
} );

let link = document.createElement('a');

// ----- create/destroy ----- //

InfiniteScroll.create.history = function() {
  if ( !this.options.history ) return;

  // check for same origin
  link.href = this.getAbsolutePath();
  // MS Edge does not have origin on link
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12236493/
  let linkOrigin = link.origin || link.protocol + '//' + link.host;
  let isSameOrigin = linkOrigin == location.origin;
  if ( !isSameOrigin ) {
    console.error( '[InfiniteScroll] cannot set history with different origin: ' +
      `${link.origin} on ${location.origin} . History behavior disabled.` );
    return;
  }

  // two ways to handle changing history
  if ( this.options.append ) {
    this.createHistoryAppend();
  } else {
    this.createHistoryPageLoad();
  }
};

proto.createHistoryAppend = function() {
  this.updateMeasurements();
  this.updateScroller();
  // array of scroll positions of appended pages
  this.scrollPages = [
    // first page
    {
      top: 0,
      path: location.href,
      title: document.title,
    },
  ];
  this.scrollPage = this.scrollPages[0];
  // events
  this.scrollHistoryHandler = this.onScrollHistory.bind( this );
  this.unloadHandler = this.onUnload.bind( this );
  this.scroller.addEventListener( 'scroll', this.scrollHistoryHandler );
  this.on( 'append', this.onAppendHistory );
  this.bindHistoryAppendEvents( true );
};

proto.bindHistoryAppendEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.scrollHistoryHandler );
  window[ addRemove ]( 'unload', this.unloadHandler );
};

proto.createHistoryPageLoad = function() {
  this.on( 'load', this.onPageLoadHistory );
};

InfiniteScroll.destroy.history =
proto.destroyHistory = function() {
  let isHistoryAppend = this.options.history && this.options.append;
  if ( isHistoryAppend ) {
    this.bindHistoryAppendEvents( false );
  }
};

// ----- append history ----- //

proto.onAppendHistory = function( response, path, items ) {
  // do not proceed if no items. #779
  if ( !items || !items.length ) return;

  let firstItem = items[0];
  let elemScrollY = this.getElementScrollY( firstItem );
  // resolve path
  link.href = path;
  // add page data to hash
  this.scrollPages.push({
    top: elemScrollY,
    path: link.href,
    title: response.title,
  });
};

proto.getElementScrollY = function( elem ) {
  if ( this.options.elementScroll ) {
    return elem.offsetTop - this.top;
  } else {
    let rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
};

proto.onScrollHistory = function() {
  // cycle through positions, find biggest without going over
  let scrollPage = this.getClosestScrollPage();
  // set history if changed
  if ( scrollPage != this.scrollPage ) {
    this.scrollPage = scrollPage;
    this.setHistory( scrollPage.title, scrollPage.path );
  }
};

utils.debounceMethod( InfiniteScroll, 'onScrollHistory', 150 );

proto.getClosestScrollPage = function() {
  let scrollViewY;
  if ( this.options.elementScroll ) {
    scrollViewY = this.scroller.scrollTop + this.scroller.clientHeight / 2;
  } else {
    scrollViewY = window.scrollY + this.windowHeight / 2;
  }

  let scrollPage;
  for ( let page of this.scrollPages ) {
    if ( page.top >= scrollViewY ) break;

    scrollPage = page;
  }
  return scrollPage;
};

proto.setHistory = function( title, path ) {
  let optHistory = this.options.history;
  let historyMethod = optHistory && history[ optHistory + 'State' ];
  if ( !historyMethod ) return;

  history[ optHistory + 'State' ]( null, title, path );
  if ( this.options.historyTitle ) document.title = title;
  this.dispatchEvent( 'history', null, [ title, path ] );
};

// scroll to top to prevent initial scroll-reset after page refresh
// https://stackoverflow.com/a/18633915/182183
proto.onUnload = function() {
  if ( this.scrollPage.top === 0 ) return;

  // calculate where scroll position would be on refresh
  let scrollY = window.scrollY - this.scrollPage.top + this.top;
  // disable scroll event before setting scroll #679
  this.destroyHistory();
  scrollTo( 0, scrollY );
};

// ----- load history ----- //

// update URL
proto.onPageLoadHistory = function( response, path ) {
  this.setHistory( response.title, path );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/index.js":
/*!**************************************************!*\
  !*** ./node_modules/infinite-scroll/js/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
        __webpack_require__(/*! ./page-load */ "./node_modules/infinite-scroll/js/page-load.js"),
        __webpack_require__(/*! ./scroll-watch */ "./node_modules/infinite-scroll/js/scroll-watch.js"),
        __webpack_require__(/*! ./history */ "./node_modules/infinite-scroll/js/history.js"),
        __webpack_require__(/*! ./button */ "./node_modules/infinite-scroll/js/button.js"),
        __webpack_require__(/*! ./status */ "./node_modules/infinite-scroll/js/status.js"),
    );
  }

} )( window, function factory( InfiniteScroll ) {
  return InfiniteScroll;
} );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/page-load.js":
/*!******************************************************!*\
  !*** ./node_modules/infinite-scroll/js/page-load.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// page-load
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
    );
  }

}( window, function factory( window, InfiniteScroll ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  // append: false,
  loadOnScroll: true,
  checkLastPage: true,
  responseBody: 'text',
  domParseResponse: true,
  // prefill: false,
  // outlayer: null,
} );

InfiniteScroll.create.pageLoad = function() {
  this.canLoad = true;
  this.on( 'scrollThreshold', this.onScrollThresholdLoad );
  this.on( 'load', this.checkLastPage );
  if ( this.options.outlayer ) {
    this.on( 'append', this.onAppendOutlayer );
  }
};

proto.onScrollThresholdLoad = function() {
  if ( this.options.loadOnScroll ) this.loadNextPage();
};

let domParser = new DOMParser();

proto.loadNextPage = function() {
  if ( this.isLoading || !this.canLoad ) return;

  let { responseBody, domParseResponse, fetchOptions } = this.options;
  let path = this.getAbsolutePath();
  this.isLoading = true;
  if ( typeof fetchOptions == 'function' ) fetchOptions = fetchOptions();

  let fetchPromise = fetch( path, fetchOptions )
    .then( ( response ) => {
      if ( !response.ok ) {
        let error = new Error( response.statusText );
        this.onPageError( error, path, response );
        return { response };
      }

      return response[ responseBody ]().then( ( body ) => {
        let canDomParse = responseBody == 'text' && domParseResponse;
        if ( canDomParse ) {
          body = domParser.parseFromString( body, 'text/html' );
        }
        if ( response.status == 204 ) {
          this.lastPageReached( body, path );
          return { body, response };
        } else {
          return this.onPageLoad( body, path, response );
        }
      } );
    } )
    .catch( ( error ) => {
      this.onPageError( error, path );
    } );

  this.dispatchEvent( 'request', null, [ path, fetchPromise ] );

  return fetchPromise;
};

proto.onPageLoad = function( body, path, response ) {
  // done loading if not appending
  if ( !this.options.append ) {
    this.isLoading = false;
  }
  this.pageIndex++;
  this.loadCount++;
  this.dispatchEvent( 'load', null, [ body, path, response ] );
  return this.appendNextPage( body, path, response );
};

proto.appendNextPage = function( body, path, response ) {
  let { append, responseBody, domParseResponse } = this.options;
  // do not append json
  let isDocument = responseBody == 'text' && domParseResponse;
  if ( !isDocument || !append ) return { body, response };

  let items = body.querySelectorAll( append );
  let promiseValue = { body, response, items };
  // last page hit if no items. #840
  if ( !items || !items.length ) {
    this.lastPageReached( body, path );
    return promiseValue;
  }

  let fragment = getItemsFragment( items );
  let appendReady = () => {
    this.appendItems( items, fragment );
    this.isLoading = false;
    this.dispatchEvent( 'append', null, [ body, path, items, response ] );
    return promiseValue;
  };

  // TODO add hook for option to trigger appendReady
  if ( this.options.outlayer ) {
    return this.appendOutlayerItems( fragment, appendReady );
  } else {
    return appendReady();
  }
};

proto.appendItems = function( items, fragment ) {
  if ( !items || !items.length ) return;

  // get fragment if not provided
  fragment = fragment || getItemsFragment( items );
  refreshScripts( fragment );
  this.element.appendChild( fragment );
};

function getItemsFragment( items ) {
  // add items to fragment
  let fragment = document.createDocumentFragment();
  if ( items ) fragment.append( ...items );
  return fragment;
}

// replace <script>s with copies so they load
// <script>s added by InfiniteScroll will not load
// similar to https://stackoverflow.com/questions/610995
function refreshScripts( fragment ) {
  let scripts = fragment.querySelectorAll('script');
  for ( let script of scripts ) {
    let freshScript = document.createElement('script');
    // copy attributes
    let attrs = script.attributes;
    for ( let attr of attrs ) {
      freshScript.setAttribute( attr.name, attr.value );
    }
    // copy inner script code. #718, #782
    freshScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild( freshScript, script );
  }
}

// ----- outlayer ----- //

proto.appendOutlayerItems = function( fragment, appendReady ) {
  let imagesLoaded = InfiniteScroll.imagesLoaded || window.imagesLoaded;
  if ( !imagesLoaded ) {
    console.error('[InfiniteScroll] imagesLoaded required for outlayer option');
    this.isLoading = false;
    return;
  }
  // append once images loaded
  return new Promise( function( resolve ) {
    imagesLoaded( fragment, function() {
      let bodyResponse = appendReady();
      resolve( bodyResponse );
    } );
  } );
};

proto.onAppendOutlayer = function( response, path, items ) {
  this.options.outlayer.appended( items );
};

// ----- checkLastPage ----- //

// check response for next element
proto.checkLastPage = function( body, path ) {
  let { checkLastPage, path: pathOpt } = this.options;
  if ( !checkLastPage ) return;

  // if path is function, check if next path is truthy
  if ( typeof pathOpt == 'function' ) {
    let nextPath = this.getPath();
    if ( !nextPath ) {
      this.lastPageReached( body, path );
      return;
    }
  }
  // get selector from checkLastPage or path option
  let selector;
  if ( typeof checkLastPage == 'string' ) {
    selector = checkLastPage;
  } else if ( this.isPathSelector ) {
    // path option is selector string
    selector = pathOpt;
  }
  // check last page for selector
  // bail if no selector or not document response
  if ( !selector || !body.querySelector ) return;

  // check if response has selector
  let nextElem = body.querySelector( selector );
  if ( !nextElem ) this.lastPageReached( body, path );
};

proto.lastPageReached = function( body, path ) {
  this.canLoad = false;
  this.dispatchEvent( 'last', null, [ body, path ] );
};

// ----- error ----- //

proto.onPageError = function( error, path, response ) {
  this.isLoading = false;
  this.canLoad = false;
  this.dispatchEvent( 'error', null, [ error, path, response ] );
  return error;
};

// -------------------------- prefill -------------------------- //

InfiniteScroll.create.prefill = function() {
  if ( !this.options.prefill ) return;

  let append = this.options.append;
  if ( !append ) {
    console.error(`append option required for prefill. Set as :${append}`);
    return;
  }
  this.updateMeasurements();
  this.updateScroller();
  this.isPrefilling = true;
  this.on( 'append', this.prefill );
  this.once( 'error', this.stopPrefill );
  this.once( 'last', this.stopPrefill );
  this.prefill();
};

proto.prefill = function() {
  let distance = this.getPrefillDistance();
  this.isPrefilling = distance >= 0;
  if ( this.isPrefilling ) {
    this.log('prefill');
    this.loadNextPage();
  } else {
    this.stopPrefill();
  }
};

proto.getPrefillDistance = function() {
  // element scroll
  if ( this.options.elementScroll ) {
    return this.scroller.clientHeight - this.scroller.scrollHeight;
  }
  // window
  return this.windowHeight - this.element.clientHeight;
};

proto.stopPrefill = function() {
  this.log('stopPrefill');
  this.off( 'append', this.prefill );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/scroll-watch.js":
/*!*********************************************************!*\
  !*** ./node_modules/infinite-scroll/js/scroll-watch.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// scroll-watch
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
        __webpack_require__(/*! fizzy-ui-utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// default options
Object.assign( InfiniteScroll.defaults, {
  scrollThreshold: 400,
  // elementScroll: null,
} );

InfiniteScroll.create.scrollWatch = function() {
  // events
  this.pageScrollHandler = this.onPageScroll.bind( this );
  this.resizeHandler = this.onResize.bind( this );

  let scrollThreshold = this.options.scrollThreshold;
  let isEnable = scrollThreshold || scrollThreshold === 0;
  if ( isEnable ) this.enableScrollWatch();
};

InfiniteScroll.destroy.scrollWatch = function() {
  this.disableScrollWatch();
};

proto.enableScrollWatch = function() {
  if ( this.isScrollWatching ) return;

  this.isScrollWatching = true;
  this.updateMeasurements();
  this.updateScroller();
  // TODO disable after error?
  this.on( 'last', this.disableScrollWatch );
  this.bindScrollWatchEvents( true );
};

proto.disableScrollWatch = function() {
  if ( !this.isScrollWatching ) return;

  this.bindScrollWatchEvents( false );
  delete this.isScrollWatching;
};

proto.bindScrollWatchEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.pageScrollHandler );
  window[ addRemove ]( 'resize', this.resizeHandler );
};

proto.onPageScroll = InfiniteScroll.throttle( function() {
  let distance = this.getBottomDistance();
  if ( distance <= this.options.scrollThreshold ) {
    this.dispatchEvent('scrollThreshold');
  }
} );

proto.getBottomDistance = function() {
  let bottom, scrollY;
  if ( this.options.elementScroll ) {
    bottom = this.scroller.scrollHeight;
    scrollY = this.scroller.scrollTop + this.scroller.clientHeight;
  } else {
    bottom = this.top + this.element.clientHeight;
    scrollY = window.scrollY + this.windowHeight;
  }
  return bottom - scrollY;
};

proto.onResize = function() {
  this.updateMeasurements();
};

utils.debounceMethod( InfiniteScroll, 'onResize', 150 );

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/infinite-scroll/js/status.js":
/*!***************************************************!*\
  !*** ./node_modules/infinite-scroll/js/status.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// status
( function( window, factory ) {
  // universal module definition
  if (  true && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        __webpack_require__(/*! ./core */ "./node_modules/infinite-scroll/js/core.js"),
        __webpack_require__(/*! fizzy-ui-utils */ "./node_modules/fizzy-ui-utils/utils.js"),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// InfiniteScroll.defaults.status = null;

InfiniteScroll.create.status = function() {
  let statusElem = utils.getQueryElement( this.options.status );
  if ( !statusElem ) return;

  // elements
  this.statusElement = statusElem;
  this.statusEventElements = {
    request: statusElem.querySelector('.infinite-scroll-request'),
    error: statusElem.querySelector('.infinite-scroll-error'),
    last: statusElem.querySelector('.infinite-scroll-last'),
  };
  // events
  this.on( 'request', this.showRequestStatus );
  this.on( 'error', this.showErrorStatus );
  this.on( 'last', this.showLastStatus );
  this.bindHideStatus('on');
};

proto.bindHideStatus = function( bindMethod ) {
  let hideEvent = this.options.append ? 'append' : 'load';
  this[ bindMethod ]( hideEvent, this.hideAllStatus );
};

proto.showRequestStatus = function() {
  this.showStatus('request');
};

proto.showErrorStatus = function() {
  this.showStatus('error');
};

proto.showLastStatus = function() {
  this.showStatus('last');
  // prevent last then append event race condition from showing last status #706
  this.bindHideStatus('off');
};

proto.showStatus = function( eventName ) {
  show( this.statusElement );
  this.hideStatusEventElements();
  let eventElem = this.statusEventElements[ eventName ];
  show( eventElem );
};

proto.hideAllStatus = function() {
  hide( this.statusElement );
  this.hideStatusEventElements();
};

proto.hideStatusEventElements = function() {
  for ( let type in this.statusEventElements ) {
    let eventElem = this.statusEventElements[ type ];
    hide( eventElem );
  }
};

// --------------------------  -------------------------- //

function hide( elem ) {
  setDisplay( elem, 'none' );
}

function show( elem ) {
  setDisplay( elem, 'block' );
}

function setDisplay( elem, value ) {
  if ( elem ) {
    elem.style.display = value;
  }
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof __webpack_require__.g !== 'undefined') { return __webpack_require__.g; }
	throw new Error('unable to locate global object');
}

var globalObject = getGlobal();

module.exports = exports = globalObject.fetch;

// Needed for TypeScript and Webpack.
if (globalObject.fetch) {
	exports["default"] = globalObject.fetch.bind(globalObject);
}

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;


/***/ }),

/***/ "./node_modules/website-carbon-calculator/build/module/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/website-carbon-calculator/build/module/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteCarbonCalculator": function() { return /* reexport safe */ _lib_websiteCarbonCalculator__WEBPACK_IMPORTED_MODULE_0__.WebsiteCarbonCalculator; },
/* harmony export */   "WebsiteCarbonCalculatorError": function() { return /* reexport safe */ _lib_websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_1__.WebsiteCarbonCalculatorError; }
/* harmony export */ });
/* harmony import */ var _lib_websiteCarbonCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/websiteCarbonCalculator */ "./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculator.js");
/* harmony import */ var _lib_websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/websiteCarbonCalculatorError */ "./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculatorError.js");


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUMifQ==

/***/ }),

/***/ "./node_modules/website-carbon-calculator/build/module/lib/constants.js":
/*!******************************************************************************!*\
  !*** ./node_modules/website-carbon-calculator/build/module/lib/constants.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KWG_PER_GB": function() { return /* binding */ KWG_PER_GB; },
/* harmony export */   "RETURNING_VISITOR_PERCENTAGE": function() { return /* binding */ RETURNING_VISITOR_PERCENTAGE; },
/* harmony export */   "FIRST_TIME_VIEWING_PERCENTAGE": function() { return /* binding */ FIRST_TIME_VIEWING_PERCENTAGE; },
/* harmony export */   "PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD": function() { return /* binding */ PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD; },
/* harmony export */   "CARBON_PER_KWG_GRID": function() { return /* binding */ CARBON_PER_KWG_GRID; },
/* harmony export */   "CARBON_PER_KWG_RENEWABLE": function() { return /* binding */ CARBON_PER_KWG_RENEWABLE; },
/* harmony export */   "PERCENTAGE_OF_ENERGY_IN_DATACENTER": function() { return /* binding */ PERCENTAGE_OF_ENERGY_IN_DATACENTER; },
/* harmony export */   "PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER": function() { return /* binding */ PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER; },
/* harmony export */   "CO2_GRAMS_TO_LITRES": function() { return /* binding */ CO2_GRAMS_TO_LITRES; },
/* harmony export */   "GOOGLE_PAGESPEED_API_ENDPOINT": function() { return /* binding */ GOOGLE_PAGESPEED_API_ENDPOINT; },
/* harmony export */   "GREEN_FOUNDATION_API_ENDPOINT": function() { return /* binding */ GREEN_FOUNDATION_API_ENDPOINT; }
/* harmony export */ });
const KWG_PER_GB = 1.805;
const RETURNING_VISITOR_PERCENTAGE = 0.75;
const FIRST_TIME_VIEWING_PERCENTAGE = 0.25;
const PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD = 0.02;
const CARBON_PER_KWG_GRID = 475;
const CARBON_PER_KWG_RENEWABLE = 33.4;
const PERCENTAGE_OF_ENERGY_IN_DATACENTER = 0.1008;
const PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER = 0.8992;
const CO2_GRAMS_TO_LITRES = 0.5562;
const GOOGLE_PAGESPEED_API_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const GREEN_FOUNDATION_API_ENDPOINT = 'https://api.thegreenwebfoundation.org/greencheck';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQztBQUNoQyxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLENBQUM7QUFDakQsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQUcsSUFBSSxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxNQUFNLDRDQUE0QyxHQUFHLElBQUksQ0FBQztBQUNqRSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7QUFDdkMsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0FBQzdDLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQztBQUN6RCxNQUFNLENBQUMsTUFBTSxpREFBaUQsR0FBRyxNQUFNLENBQUM7QUFDeEUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUN4Qyw0REFBNEQsQ0FBQztBQUMvRCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FDeEMsa0RBQWtELENBQUMifQ==

/***/ }),

/***/ "./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculator.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculator.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteCarbonCalculator": function() { return /* binding */ WebsiteCarbonCalculator; }
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/website-carbon-calculator/build/module/lib/constants.js");
/* harmony import */ var _websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websiteCarbonCalculatorError */ "./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculatorError.js");



/**
 * Based on https://gitlab.com/wholegrain/carbon-api-2-0/-/tree/master/
 */
class WebsiteCarbonCalculator {
    constructor({ pagespeedApiKey }) {
        if (!pagespeedApiKey || !pagespeedApiKey.length) {
            throw new _websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_2__.WebsiteCarbonCalculatorError("Please set the PageSpeed API Key. (i.e: new WebsiteCarbonCalculator({pagespeedApiKey: 'YOU_API_KEY'}))");
        }
        this.PAGE_SPEED_API_KEY = pagespeedApiKey;
    }
    getNetworkTraffic({ url, key, }) {
        return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_constants__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_PAGESPEED_API_ENDPOINT}?url=${url}&key=${key}`).then((res) => res.json());
    }
    getGreenWeb(url) {
        const parsedURL = new URL(url);
        return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_constants__WEBPACK_IMPORTED_MODULE_1__.GREEN_FOUNDATION_API_ENDPOINT}/${parsedURL.host}`).then((res) => res.json());
    }
    async calculateByURL(url) {
        const normalizedURL = this.normalizeURL(url);
        const [pagespeedapi, greenweb] = await Promise.all([
            this.getNetworkTraffic({
                url: normalizedURL,
                key: this.PAGE_SPEED_API_KEY,
            }),
            this.getGreenWeb(normalizedURL),
        ]);
        if (pagespeedapi?.error) {
            throw new _websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_2__.WebsiteCarbonCalculatorError(pagespeedapi.error.message);
        }
        const isGreenHost = greenweb?.green;
        if (!pagespeedapi?.lighthouseResult?.audits['network-requests']?.details
            ?.items) {
            throw new _websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_2__.WebsiteCarbonCalculatorError("Sorry, traffic couldn't be estimated.");
        }
        const bytesTransferred = this.calculateTransferredBytes(pagespeedapi.lighthouseResult.audits['network-requests'].details.items);
        // Calculate the statistics as we need the co2 emissions
        const statistics = this.getStatistics(bytesTransferred);
        // pull the co2 relative to the energy
        const co2 = isGreenHost === true
            ? statistics['co2']['renewable']['grams']
            : statistics['co2']['grid']['grams'];
        return {
            url: normalizedURL,
            bytesTransferred,
            isGreenHost: isGreenHost,
            co2PerPageview: co2,
        };
    }
    calculateTransferredBytes(items) {
        return items
            .filter((item) => item.transferSize !== undefined)
            .map((item) => item.transferSize)
            .reduce((prev, next) => {
            return prev + next;
        }, 0);
    }
    getStatistics(bytes) {
        const bytesAdjusted = this.adjustDataTransfer(bytes);
        const energy = this.energyConsumption(bytesAdjusted);
        const co2Grid = this.getCo2Grid(energy);
        const co2Renewable = this.getCo2Renewable(energy);
        return {
            adjustedBytes: bytesAdjusted,
            energy: energy,
            co2: {
                grid: {
                    grams: co2Grid,
                    litres: this.co2ToLitres(co2Grid),
                },
                renewable: {
                    grams: co2Renewable,
                    litres: this.co2ToLitres(co2Renewable),
                },
            },
        };
    }
    normalizeURL(url) {
        try {
            const normalizedURL = new URL(url);
            return `${normalizedURL.protocol}//${normalizedURL.hostname}`;
        }
        catch (_) {
            throw new _websiteCarbonCalculatorError__WEBPACK_IMPORTED_MODULE_2__.WebsiteCarbonCalculatorError('Ops! This is an invalid URL.');
        }
    }
    adjustDataTransfer(val) {
        return (val * _constants__WEBPACK_IMPORTED_MODULE_1__.RETURNING_VISITOR_PERCENTAGE +
            _constants__WEBPACK_IMPORTED_MODULE_1__.PERCENTAGE_OF_DATA_LOADED_ON_SUBSEQUENT_LOAD *
                val *
                _constants__WEBPACK_IMPORTED_MODULE_1__.FIRST_TIME_VIEWING_PERCENTAGE);
    }
    energyConsumption(bytes) {
        return bytes * (_constants__WEBPACK_IMPORTED_MODULE_1__.KWG_PER_GB / 1073741824);
    }
    getCo2Grid(energy) {
        return energy * _constants__WEBPACK_IMPORTED_MODULE_1__.CARBON_PER_KWG_GRID;
    }
    getCo2Renewable(energy) {
        return (energy * _constants__WEBPACK_IMPORTED_MODULE_1__.PERCENTAGE_OF_ENERGY_IN_DATACENTER * _constants__WEBPACK_IMPORTED_MODULE_1__.CARBON_PER_KWG_RENEWABLE +
            energy *
                _constants__WEBPACK_IMPORTED_MODULE_1__.PERCENTAGE_OF_ENERGY_IN_TRANSMISSION_AND_END_USER *
                _constants__WEBPACK_IMPORTED_MODULE_1__.CARBON_PER_KWG_GRID);
    }
    co2ToLitres(co2) {
        return co2 * _constants__WEBPACK_IMPORTED_MODULE_1__.CO2_GRAMS_TO_LITRES;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZUNhcmJvbkNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3dlYnNpdGVDYXJib25DYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUUvQixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHdCQUF3QixFQUN4QixtQkFBbUIsRUFDbkIsNkJBQTZCLEVBQzdCLDZCQUE2QixFQUM3Qiw2QkFBNkIsRUFDN0IsVUFBVSxFQUNWLDRDQUE0QyxFQUM1QyxrQ0FBa0MsRUFDbEMsaURBQWlELEVBQ2pELDRCQUE0QixHQUM3QixNQUFNLGFBQWEsQ0FBQztBQVNyQixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RTs7R0FFRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFHbEMsWUFBWSxFQUFFLGVBQWUsRUFBK0I7UUFDMUQsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsTUFBTSxJQUFJLDRCQUE0QixDQUNwQyx3R0FBd0csQ0FDekcsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztJQUM1QyxDQUFDO0lBRU8saUJBQWlCLENBQUMsRUFDeEIsR0FBRyxFQUNILEdBQUcsR0FJSjtRQUNDLE9BQU8sS0FBSyxDQUNWLEdBQUcsNkJBQTZCLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUN6RCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFXO1FBQzdCLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxDQUNWLEdBQUcsNkJBQTZCLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUNyRCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBVztRQUNyQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDckIsR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2FBQzdCLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksRUFBRSxLQUFLLEVBQUU7WUFDdkIsTUFBTSxJQUFJLDRCQUE0QixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEU7UUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBRXBDLElBQ0UsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsT0FBTztZQUNsRSxFQUFFLEtBQUssRUFDVDtZQUNBLE1BQU0sSUFBSSw0QkFBNEIsQ0FDcEMsdUNBQXVDLENBQ3hDLENBQUM7U0FDSDtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUNyRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDdkUsQ0FBQztRQUVGLHdEQUF3RDtRQUN4RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFeEQsc0NBQXNDO1FBQ3RDLE1BQU0sR0FBRyxHQUNQLFdBQVcsS0FBSyxJQUFJO1lBQ2xCLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekMsT0FBTztZQUNMLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLGdCQUFnQjtZQUNoQixXQUFXLEVBQUUsV0FBVztZQUN4QixjQUFjLEVBQUUsR0FBRztTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVPLHlCQUF5QixDQUFDLEtBQTRCO1FBQzVELE9BQU8sS0FBSzthQUNULE1BQU0sQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDO2FBQzdELEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDNUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWE7UUFDakMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEQsT0FBTztZQUNMLGFBQWEsRUFBRSxhQUFhO1lBQzVCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7aUJBQ2xDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsWUFBWTtvQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2lCQUN2QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsR0FBVztRQUM5QixJQUFJO1lBQ0YsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9EO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixNQUFNLElBQUksNEJBQTRCLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFXO1FBQ3BDLE9BQU8sQ0FDTCxHQUFHLEdBQUcsNEJBQTRCO1lBQ2xDLDRDQUE0QztnQkFDMUMsR0FBRztnQkFDSCw2QkFBNkIsQ0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3JDLE9BQU8sS0FBSyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBTTtRQUN2QixPQUFPLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztJQUN0QyxDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQWM7UUFDcEMsT0FBTyxDQUNMLE1BQU0sR0FBRyxrQ0FBa0MsR0FBRyx3QkFBd0I7WUFDdEUsTUFBTTtnQkFDSixpREFBaUQ7Z0JBQ2pELG1CQUFtQixDQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFXO1FBQzdCLE9BQU8sR0FBRyxHQUFHLG1CQUFtQixDQUFDO0lBQ25DLENBQUM7Q0FDRiJ9

/***/ }),

/***/ "./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculatorError.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/website-carbon-calculator/build/module/lib/websiteCarbonCalculatorError.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsiteCarbonCalculatorError": function() { return /* binding */ WebsiteCarbonCalculatorError; }
/* harmony export */ });
class WebsiteCarbonCalculatorError extends Error {
    constructor(message) {
        super(message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic2l0ZUNhcmJvbkNhbGN1bGF0b3JFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvd2Vic2l0ZUNhcmJvbkNhbGN1bGF0b3JFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsS0FBSztJQUNyRCxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRiJ9

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations */ "./src/js/Animations.js");
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sections */ "./src/js/Sections.js");
/* harmony import */ var _class_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/Menu */ "./src/js/class/Menu.js");
/* harmony import */ var _class_Intercom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/Intercom */ "./src/js/class/Intercom.js");
/* harmony import */ var website_carbon_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! website-carbon-calculator */ "./node_modules/website-carbon-calculator/build/module/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/functions */ "./src/js/utils/functions.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



 // import Swup from 'swup';






gsap__WEBPACK_IMPORTED_MODULE_6__["default"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_7__.ScrollToPlugin, gsap_all__WEBPACK_IMPORTED_MODULE_8__.ScrollTrigger);

__webpack_require__(/*! ./Polyfills */ "./src/js/Polyfills.js");

var App = /*#__PURE__*/_createClass(function App() {
  _classCallCheck(this, App);

  // this.keepUtmParams();
  new _Sections__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _class_Intercom__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _Animations__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.menu = new _class_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]();

  try {
    var websiteCarbonCalculator = new website_carbon_calculator__WEBPACK_IMPORTED_MODULE_4__.WebsiteCarbonCalculator({
      pagespeedApiKey: 'AIzaSyCcFfoQmSB_pWdgMfcN9-kzYuVMmTo3OpY'
    });
    var result = websiteCarbonCalculator.calculateByURL('https://birdee.co/'); //   {
    //     url: 'yourwebsite.com',
    //     bytesTransferred: 123456,
    //     isGreenHost: true,
    //     co2PerPageview: 0.1234567,
    //   }
  } catch (error) {
    if (error instanceof website_carbon_calculator__WEBPACK_IMPORTED_MODULE_4__.WebsiteCarbonCalculatorError) {
      console.warn(error.message);
    } // Do something else...

  }
} // keepUtmParams() {
// 	const utmParams = {
// 		source: getQueryParam('utm_source'),
// 		medium: getQueryParam('utm_medium'),
// 		campaign: getQueryParam('utm_campaign'),
// 	};
// 	// console.log(utmParams);
// 	const UTM = Object.entries(utmParams)
// 		.map(([name, value]) => (value ? `utm_${name}=${value}` : null))
// 		.filter(Boolean);
// 	if (!UTM.length) return;
// 	const params = '?' + UTM.join('&');
// 	document
// 		.querySelectorAll('a[href*="' + window.location.hostname.replace(/^[^.]+\./g, '') + '"], a[href^="/"]')
// 		.forEach((el) => {
// 			if (!el.getAttribute('href').includes('umt_')) {
// 				const href = el.getAttribute('href');
// 				// Fix Multiple '?' in URL
// 				// Match all '?' in URL
// 				// Loop through matches and replace all '?' with '&' except the first match using counter++ (Increment counter after checking its value)
// 				let counter = 0;
// 				const url = `${href}${params}`.replace(/\?/g, (match) => (counter++ ? '&' : match));
// 				el.setAttribute('href', url);
// 			}
// 		});
// }
);


document.addEventListener('DOMContentLoaded', function (ev) {
  new App(); // const swup = new Swup();
  // swup.on('contentReplaced', () => {
  // 	window.scrollTo(0, 0);
  // 	new App();
  // });
});
var menusFooter = document.querySelectorAll('.accordeon');
var columns = document.querySelectorAll('.footer__column');
menusFooter.forEach(function (menuFooter) {
  menuFooter.addEventListener('click', function () {
    return menuFooter.classList.toggle('open');
  });
});
/* istanbul ignore next */

/* c8 ignore start */

/* eslint-disable */

function oo_cm() {
  try {
    return (0, eval)('globalThis._console_ninja') || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x12c47f=_0x341f;(function(_0x3a64c1,_0x2796b6){var _0x4248c5=_0x341f,_0x515740=_0x3a64c1();while(!![]){try{var _0x3e8e6d=-parseInt(_0x4248c5(0x1ba))/0x1*(parseInt(_0x4248c5(0x1d9))/0x2)+-parseInt(_0x4248c5(0x219))/0x3+parseInt(_0x4248c5(0x17e))/0x4+-parseInt(_0x4248c5(0x1db))/0x5+-parseInt(_0x4248c5(0x16f))/0x6*(-parseInt(_0x4248c5(0x220))/0x7)+parseInt(_0x4248c5(0x199))/0x8*(parseInt(_0x4248c5(0x22a))/0x9)+parseInt(_0x4248c5(0x216))/0xa;if(_0x3e8e6d===_0x2796b6)break;else _0x515740['push'](_0x515740['shift']());}catch(_0x41611e){_0x515740['push'](_0x515740['shift']());}}}(_0x4b66,0x9b0b7));function _0x4b66(){var _0x9cf38b=['strLength','_setNodeId','autoExpandPreviousObjects','_isMap','totalStrLength','node','_maxConnectAttemptCount','_hasMapOnItsPath','array','WebSocket','timeEnd','process','constructor','catch','String','dockerizedApp','error','\\x20browser','1558002JvClgk','trace','enumerable','_Symbol','logger\\x20websocket\\x20error','autoExpand','null','call','function','elements','_numberRegExp','onopen','disabledLog','_webSocketErrorDocsLink','[object\\x20BigInt]','3174748aoSBqZ','location','Error','message','_addLoadNode','_isUndefined','stringify','set','_capIfString','now','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','versions','nodeModules','disabledTrace','getWebSocketClass','elapsed','readyState','NEXT_RUNTIME','object','expId','_propertyName','_consoleNinjaAllowedToStart','setter',\"c:\\\\Users\\\\ZeFranck\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.285\\\\node_modules\",'pop','_inBrowser','onmessage','8yhNMuy','1.0.0','bind','isArray','unknown','_treeNodePropertiesBeforeFullValue','_setNodeQueryPath','host','onerror','getPrototypeOf','split','_isPrimitiveType','isExpressionToEvaluate','_inNextEdge','log','[object\\x20Array]','funcName','Map','port','create','1707738281387','number','index','unref','includes','_isArray','capped','sortProps','_allowedToSend','_p_','stackTraceLimit','depth','astro','31WvNDTT','[object\\x20Map]','_p_length','stack','','push','Boolean','cappedProps','hits','_console_ninja_session','string','_setNodeExpandableState','then','parent','_isPrimitiveWrapperType','_console_ninja','serialize','_hasSymbolPropertyOnItsPath','_type','_setNodeExpressionPath','length','_isNegativeZero','_connected','undefined','parse','_getOwnPropertyNames','join','next.js','_WebSocketClass','autoExpandLimit','_dateToString','56814UBthwj','reload','415010KkcbEq','symbol','_getOwnPropertyDescriptor','prototype','_additionalMetadata','_connectAttemptCount','webpack','autoExpandMaxDepth','_property','onclose','autoExpandPropertyCount','_p_name','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_cleanNode','_addProperty','_objectToString','_regExpToString','level','reduceLimits','_addObjectProperty','env','console','unshift','Number','value','negativeZero','_undefined','allStrLength','substr','','gateway.docker.internal','Set','_addFunctionsNode','toString','Buffer','warn','_WebSocket','send','_processTreeNodeResult','type','time',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-TTB3K2P\",\"192.168.110.111\"],'[object\\x20Date]','current','_setNodePermissions','name','positiveInfinity','_disposeWebsocket','_blacklistedProperty','POSITIVE_INFINITY','forEach','127.0.0.1','remix','_getOwnPropertySymbols','expressionsToEvaluate','rootExpression','perf_hooks','hasOwnProperty','edge','11516520vyxnNA','nan','hrtime','2844600HivaiU','timeStamp','path','...','angular','54259','test','7uFnCCs','props','RegExp','date','_connectToHostNow','_attemptToReconnectShortly','https://tinyurl.com/37x8b79t','global','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','3076884nmiGNe','sort','resolveGetters','_ws','noFunctions','boolean','data','_socket','slice','default','_sortProps','_connecting','concat','toLowerCase','_isSet','performance','getOwnPropertySymbols',':logPointId:','count','_allowedToConnectOnSend','getter','cappedElements','getOwnPropertyDescriptor','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','hostname','_sendErrorMessage','_reconnectTimeout','NEGATIVE_INFINITY','_setNodeLabel','bigint','_quotedRegExp','[object\\x20Set]','url','\\x20server','getOwnPropertyNames','get'];_0x4b66=function(){return _0x9cf38b;};return _0x4b66();}var j=Object[_0x12c47f(0x1ac)],H=Object['defineProperty'],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x12c47f(0x24c)],te=Object[_0x12c47f(0x1a2)],ne=Object[_0x12c47f(0x1de)][_0x12c47f(0x214)],re=(_0x5ccae2,_0x33dabb,_0x497022,_0x180ac7)=>{var _0x2c1e03=_0x12c47f;if(_0x33dabb&&typeof _0x33dabb==_0x2c1e03(0x190)||typeof _0x33dabb==_0x2c1e03(0x177)){for(let _0x4211a5 of ee(_0x33dabb))!ne[_0x2c1e03(0x176)](_0x5ccae2,_0x4211a5)&&_0x4211a5!==_0x497022&&H(_0x5ccae2,_0x4211a5,{'get':()=>_0x33dabb[_0x4211a5],'enumerable':!(_0x180ac7=G(_0x33dabb,_0x4211a5))||_0x180ac7[_0x2c1e03(0x171)]});}return _0x5ccae2;},x=(_0xa05a30,_0x29d4ad,_0x2a98bf)=>(_0x2a98bf=_0xa05a30!=null?j(te(_0xa05a30)):{},re(_0x29d4ad||!_0xa05a30||!_0xa05a30['__es'+'Module']?H(_0x2a98bf,_0x12c47f(0x233),{'value':_0xa05a30,'enumerable':!0x0}):_0x2a98bf,_0xa05a30)),X=class{constructor(_0x28a2d9,_0x2647f3,_0x3e3fd3,_0xe1e069,_0x3817f1){var _0x7b8e53=_0x12c47f;this['global']=_0x28a2d9,this['host']=_0x2647f3,this[_0x7b8e53(0x1ab)]=_0x3e3fd3,this[_0x7b8e53(0x18a)]=_0xe1e069,this[_0x7b8e53(0x16c)]=_0x3817f1,this[_0x7b8e53(0x1b5)]=!0x0,this[_0x7b8e53(0x23d)]=!0x0,this['_connected']=!0x1,this['_connecting']=!0x1,this[_0x7b8e53(0x1a6)]=_0x28a2d9['process']?.[_0x7b8e53(0x1ef)]?.['NEXT_RUNTIME']===_0x7b8e53(0x215),this[_0x7b8e53(0x197)]=!this['global'][_0x7b8e53(0x168)]?.['versions']?.[_0x7b8e53(0x162)]&&!this['_inNextEdge'],this[_0x7b8e53(0x1d6)]=null,this[_0x7b8e53(0x1e0)]=0x0,this[_0x7b8e53(0x163)]=0x14,this[_0x7b8e53(0x17c)]=_0x7b8e53(0x226),this[_0x7b8e53(0x243)]=(this[_0x7b8e53(0x197)]?_0x7b8e53(0x241):_0x7b8e53(0x1e7))+this[_0x7b8e53(0x17c)];}async[_0x12c47f(0x18c)](){var _0x4cadba=_0x12c47f;if(this[_0x4cadba(0x1d6)])return this['_WebSocketClass'];let _0x5abb6d;if(this[_0x4cadba(0x197)]||this[_0x4cadba(0x1a6)])_0x5abb6d=this[_0x4cadba(0x227)][_0x4cadba(0x166)];else{if(this[_0x4cadba(0x227)]['process']?.[_0x4cadba(0x1ff)])_0x5abb6d=this['global'][_0x4cadba(0x168)]?.[_0x4cadba(0x1ff)];else try{let _0x2f8195=await import(_0x4cadba(0x21b));_0x5abb6d=(await import((await import(_0x4cadba(0x24a)))['pathToFileURL'](_0x2f8195['join'](this[_0x4cadba(0x18a)],'ws/index.js'))['toString']()))[_0x4cadba(0x233)];}catch{try{_0x5abb6d=require(require(_0x4cadba(0x21b))[_0x4cadba(0x1d4)](this[_0x4cadba(0x18a)],'ws'));}catch{throw new Error(_0x4cadba(0x188));}}}return this[_0x4cadba(0x1d6)]=_0x5abb6d,_0x5abb6d;}[_0x12c47f(0x224)](){var _0x21ad7d=_0x12c47f;this['_connecting']||this['_connected']||this[_0x21ad7d(0x1e0)]>=this[_0x21ad7d(0x163)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this[_0x21ad7d(0x1e0)]++,this[_0x21ad7d(0x22d)]=new Promise((_0x823a16,_0x3a3860)=>{var _0x3aa4e7=_0x21ad7d;this[_0x3aa4e7(0x18c)]()[_0x3aa4e7(0x1c6)](_0x4d422c=>{var _0xb7e2dd=_0x3aa4e7;let _0x44cbd3=new _0x4d422c('ws://'+(!this[_0xb7e2dd(0x197)]&&this[_0xb7e2dd(0x16c)]?_0xb7e2dd(0x1f9):this[_0xb7e2dd(0x1a0)])+':'+this[_0xb7e2dd(0x1ab)]);_0x44cbd3['onerror']=()=>{var _0x235006=_0xb7e2dd;this[_0x235006(0x1b5)]=!0x1,this[_0x235006(0x20a)](_0x44cbd3),this['_attemptToReconnectShortly'](),_0x3a3860(new Error(_0x235006(0x173)));},_0x44cbd3['onopen']=()=>{var _0x1bd03c=_0xb7e2dd;this[_0x1bd03c(0x197)]||_0x44cbd3[_0x1bd03c(0x231)]&&_0x44cbd3[_0x1bd03c(0x231)][_0x1bd03c(0x1b0)]&&_0x44cbd3[_0x1bd03c(0x231)][_0x1bd03c(0x1b0)](),_0x823a16(_0x44cbd3);},_0x44cbd3['onclose']=()=>{var _0x5b55c8=_0xb7e2dd;this['_allowedToConnectOnSend']=!0x0,this['_disposeWebsocket'](_0x44cbd3),this[_0x5b55c8(0x225)]();},_0x44cbd3[_0xb7e2dd(0x198)]=_0x437b20=>{var _0x25dead=_0xb7e2dd;try{_0x437b20&&_0x437b20[_0x25dead(0x230)]&&this[_0x25dead(0x197)]&&JSON[_0x25dead(0x1d2)](_0x437b20[_0x25dead(0x230)])['method']===_0x25dead(0x1da)&&this[_0x25dead(0x227)][_0x25dead(0x17f)][_0x25dead(0x1da)]();}catch{}};})[_0x3aa4e7(0x1c6)](_0x47a542=>(this[_0x3aa4e7(0x1d0)]=!0x0,this[_0x3aa4e7(0x235)]=!0x1,this[_0x3aa4e7(0x23d)]=!0x1,this['_allowedToSend']=!0x0,this[_0x3aa4e7(0x1e0)]=0x0,_0x47a542))[_0x3aa4e7(0x16a)](_0x2b2034=>(this['_connected']=!0x1,this['_connecting']=!0x1,console[_0x3aa4e7(0x1fe)](_0x3aa4e7(0x228)+this[_0x3aa4e7(0x17c)]),_0x3a3860(new Error(_0x3aa4e7(0x229)+(_0x2b2034&&_0x2b2034[_0x3aa4e7(0x181)])))));}));}[_0x12c47f(0x20a)](_0xbc6464){var _0x3ad943=_0x12c47f;this[_0x3ad943(0x1d0)]=!0x1,this[_0x3ad943(0x235)]=!0x1;try{_0xbc6464[_0x3ad943(0x1e4)]=null,_0xbc6464[_0x3ad943(0x1a1)]=null,_0xbc6464[_0x3ad943(0x17a)]=null;}catch{}try{_0xbc6464[_0x3ad943(0x18e)]<0x2&&_0xbc6464['close']();}catch{}}[_0x12c47f(0x225)](){var _0x12cd49=_0x12c47f;clearTimeout(this[_0x12cd49(0x244)]),!(this['_connectAttemptCount']>=this[_0x12cd49(0x163)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x588246=_0x12cd49;this[_0x588246(0x1d0)]||this['_connecting']||(this[_0x588246(0x224)](),this[_0x588246(0x22d)]?.['catch'](()=>this[_0x588246(0x225)]()));},0x1f4),this[_0x12cd49(0x244)][_0x12cd49(0x1b0)]&&this[_0x12cd49(0x244)]['unref']());}async[_0x12c47f(0x200)](_0x34ebe4){var _0x18d749=_0x12c47f;try{if(!this[_0x18d749(0x1b5)])return;this[_0x18d749(0x23d)]&&this['_connectToHostNow'](),(await this[_0x18d749(0x22d)])['send'](JSON[_0x18d749(0x184)](_0x34ebe4));}catch(_0x5ab0fc){console[_0x18d749(0x1fe)](this['_sendErrorMessage']+':\\x20'+(_0x5ab0fc&&_0x5ab0fc[_0x18d749(0x181)])),this[_0x18d749(0x1b5)]=!0x1,this[_0x18d749(0x225)]();}}};function b(_0x16cfcc,_0x484b75,_0xb420ec,_0x51b7ad,_0x1fd050,_0x4ee1f9){var _0x578164=_0x12c47f;let _0x2dfffa=_0xb420ec[_0x578164(0x1a3)](',')['map'](_0x143e55=>{var _0x20d9d7=_0x578164;try{_0x16cfcc[_0x20d9d7(0x1c3)]||((_0x1fd050===_0x20d9d7(0x1d5)||_0x1fd050===_0x20d9d7(0x20f)||_0x1fd050===_0x20d9d7(0x1b9)||_0x1fd050===_0x20d9d7(0x21d))&&(_0x1fd050+=!_0x16cfcc[_0x20d9d7(0x168)]?.[_0x20d9d7(0x189)]?.[_0x20d9d7(0x162)]&&_0x16cfcc['process']?.[_0x20d9d7(0x1ef)]?.[_0x20d9d7(0x18f)]!==_0x20d9d7(0x215)?_0x20d9d7(0x16e):_0x20d9d7(0x24b)),_0x16cfcc[_0x20d9d7(0x1c3)]={'id':+new Date(),'tool':_0x1fd050});let _0x571ffb=new X(_0x16cfcc,_0x484b75,_0x143e55,_0x51b7ad,_0x4ee1f9);return _0x571ffb[_0x20d9d7(0x200)][_0x20d9d7(0x19b)](_0x571ffb);}catch(_0x31ba95){return console[_0x20d9d7(0x1fe)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x31ba95&&_0x31ba95[_0x20d9d7(0x181)]),()=>{};}});return _0x5d733b=>_0x2dfffa[_0x578164(0x20d)](_0x5e84b4=>_0x5e84b4(_0x5d733b));}function W(_0x15621a){var _0x111d9=_0x12c47f;let _0x503751=function(_0x4f6b6e,_0x44baf8){return _0x44baf8-_0x4f6b6e;},_0x103972;if(_0x15621a['performance'])_0x103972=function(){var _0x5b7c3d=_0x341f;return _0x15621a[_0x5b7c3d(0x239)][_0x5b7c3d(0x187)]();};else{if(_0x15621a['process']&&_0x15621a['process']['hrtime']&&_0x15621a[_0x111d9(0x168)]?.['env']?.[_0x111d9(0x18f)]!==_0x111d9(0x215))_0x103972=function(){var _0x40c619=_0x111d9;return _0x15621a[_0x40c619(0x168)][_0x40c619(0x218)]();},_0x503751=function(_0x19b88c,_0x174ce6){return 0x3e8*(_0x174ce6[0x0]-_0x19b88c[0x0])+(_0x174ce6[0x1]-_0x19b88c[0x1])/0xf4240;};else try{let {performance:_0x35e6dd}=require(_0x111d9(0x213));_0x103972=function(){return _0x35e6dd['now']();};}catch{_0x103972=function(){return+new Date();};}}return{'elapsed':_0x503751,'timeStamp':_0x103972,'now':()=>Date['now']()};}function J(_0x2a1a5c,_0x3104db,_0x233151){var _0xde5036=_0x12c47f;if(_0x2a1a5c['_consoleNinjaAllowedToStart']!==void 0x0)return _0x2a1a5c['_consoleNinjaAllowedToStart'];let _0xb3e7a2=_0x2a1a5c[_0xde5036(0x168)]?.[_0xde5036(0x189)]?.[_0xde5036(0x162)]||_0x2a1a5c['process']?.[_0xde5036(0x1ef)]?.['NEXT_RUNTIME']===_0xde5036(0x215);return _0xb3e7a2&&_0x233151==='nuxt'?_0x2a1a5c[_0xde5036(0x193)]=!0x1:_0x2a1a5c[_0xde5036(0x193)]=_0xb3e7a2||!_0x3104db||_0x2a1a5c[_0xde5036(0x17f)]?.[_0xde5036(0x242)]&&_0x3104db[_0xde5036(0x1b1)](_0x2a1a5c['location'][_0xde5036(0x242)]),_0x2a1a5c[_0xde5036(0x193)];}function Y(_0x2d02e6,_0x3ac908,_0xe3ec79,_0xc6c657){var _0x1c22b8=_0x12c47f;_0x2d02e6=_0x2d02e6,_0x3ac908=_0x3ac908,_0xe3ec79=_0xe3ec79,_0xc6c657=_0xc6c657;let _0x397d58=W(_0x2d02e6),_0xeea918=_0x397d58[_0x1c22b8(0x18d)],_0x1b05b2=_0x397d58[_0x1c22b8(0x21a)];class _0x3c254e{constructor(){var _0x43a4e7=_0x1c22b8;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x43a4e7(0x179)]=/^(0|[1-9][0-9]*)$/,this[_0x43a4e7(0x248)]=/'([^\\\\']|\\\\')*'/,this[_0x43a4e7(0x1f5)]=_0x2d02e6[_0x43a4e7(0x1d1)],this['_HTMLAllCollection']=_0x2d02e6['HTMLAllCollection'],this[_0x43a4e7(0x1dd)]=Object[_0x43a4e7(0x240)],this[_0x43a4e7(0x1d3)]=Object[_0x43a4e7(0x24c)],this['_Symbol']=_0x2d02e6['Symbol'],this['_regExpToString']=RegExp[_0x43a4e7(0x1de)][_0x43a4e7(0x1fc)],this[_0x43a4e7(0x1d8)]=Date[_0x43a4e7(0x1de)][_0x43a4e7(0x1fc)];}['serialize'](_0x47251c,_0x48c524,_0x42dbb1,_0x5ee62d){var _0x396d0f=_0x1c22b8,_0x4a455d=this,_0x2b3c2a=_0x42dbb1[_0x396d0f(0x174)];function _0x329cf7(_0xf00d3c,_0x163298,_0x17eb9e){var _0x3a2a65=_0x396d0f;_0x163298[_0x3a2a65(0x202)]=_0x3a2a65(0x19d),_0x163298['error']=_0xf00d3c[_0x3a2a65(0x181)],_0x3c5117=_0x17eb9e[_0x3a2a65(0x162)][_0x3a2a65(0x206)],_0x17eb9e[_0x3a2a65(0x162)][_0x3a2a65(0x206)]=_0x163298,_0x4a455d[_0x3a2a65(0x19e)](_0x163298,_0x17eb9e);}try{_0x42dbb1[_0x396d0f(0x1ec)]++,_0x42dbb1[_0x396d0f(0x174)]&&_0x42dbb1['autoExpandPreviousObjects']['push'](_0x48c524);var _0x258082,_0xf4127,_0x5ce2af,_0x261f39,_0x11d8c9=[],_0x364dc7=[],_0x2314cf,_0xe705ce=this[_0x396d0f(0x1cc)](_0x48c524),_0x460077=_0xe705ce===_0x396d0f(0x165),_0x5c7b2b=!0x1,_0x390cbd=_0xe705ce===_0x396d0f(0x177),_0x1f269b=this['_isPrimitiveType'](_0xe705ce),_0x2e13d2=this[_0x396d0f(0x1c8)](_0xe705ce),_0xa3a055=_0x1f269b||_0x2e13d2,_0x4a55ac={},_0x50404e=0x0,_0xa31672=!0x1,_0x3c5117,_0x2b54a4=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x42dbb1[_0x396d0f(0x1b8)]){if(_0x460077){if(_0xf4127=_0x48c524[_0x396d0f(0x1ce)],_0xf4127>_0x42dbb1['elements']){for(_0x5ce2af=0x0,_0x261f39=_0x42dbb1['elements'],_0x258082=_0x5ce2af;_0x258082<_0x261f39;_0x258082++)_0x364dc7[_0x396d0f(0x1bf)](_0x4a455d['_addProperty'](_0x11d8c9,_0x48c524,_0xe705ce,_0x258082,_0x42dbb1));_0x47251c[_0x396d0f(0x23f)]=!0x0;}else{for(_0x5ce2af=0x0,_0x261f39=_0xf4127,_0x258082=_0x5ce2af;_0x258082<_0x261f39;_0x258082++)_0x364dc7[_0x396d0f(0x1bf)](_0x4a455d['_addProperty'](_0x11d8c9,_0x48c524,_0xe705ce,_0x258082,_0x42dbb1));}_0x42dbb1['autoExpandPropertyCount']+=_0x364dc7['length'];}if(!(_0xe705ce===_0x396d0f(0x175)||_0xe705ce==='undefined')&&!_0x1f269b&&_0xe705ce!==_0x396d0f(0x16b)&&_0xe705ce!==_0x396d0f(0x1fd)&&_0xe705ce!=='bigint'){var _0x7dc11f=_0x5ee62d[_0x396d0f(0x221)]||_0x42dbb1[_0x396d0f(0x221)];if(this['_isSet'](_0x48c524)?(_0x258082=0x0,_0x48c524[_0x396d0f(0x20d)](function(_0xe8506a){var _0x287f3a=_0x396d0f;if(_0x50404e++,_0x42dbb1[_0x287f3a(0x1e5)]++,_0x50404e>_0x7dc11f){_0xa31672=!0x0;return;}if(!_0x42dbb1[_0x287f3a(0x1a5)]&&_0x42dbb1[_0x287f3a(0x174)]&&_0x42dbb1[_0x287f3a(0x1e5)]>_0x42dbb1['autoExpandLimit']){_0xa31672=!0x0;return;}_0x364dc7['push'](_0x4a455d[_0x287f3a(0x1e9)](_0x11d8c9,_0x48c524,_0x287f3a(0x1fa),_0x258082++,_0x42dbb1,function(_0x556cb0){return function(){return _0x556cb0;};}(_0xe8506a)));})):this[_0x396d0f(0x160)](_0x48c524)&&_0x48c524[_0x396d0f(0x20d)](function(_0x327361,_0x2d6c5f){var _0x3e3dd1=_0x396d0f;if(_0x50404e++,_0x42dbb1[_0x3e3dd1(0x1e5)]++,_0x50404e>_0x7dc11f){_0xa31672=!0x0;return;}if(!_0x42dbb1['isExpressionToEvaluate']&&_0x42dbb1[_0x3e3dd1(0x174)]&&_0x42dbb1[_0x3e3dd1(0x1e5)]>_0x42dbb1['autoExpandLimit']){_0xa31672=!0x0;return;}var _0x11d6b5=_0x2d6c5f[_0x3e3dd1(0x1fc)]();_0x11d6b5[_0x3e3dd1(0x1ce)]>0x64&&(_0x11d6b5=_0x11d6b5[_0x3e3dd1(0x232)](0x0,0x64)+_0x3e3dd1(0x21c)),_0x364dc7[_0x3e3dd1(0x1bf)](_0x4a455d['_addProperty'](_0x11d8c9,_0x48c524,_0x3e3dd1(0x1aa),_0x11d6b5,_0x42dbb1,function(_0x23378b){return function(){return _0x23378b;};}(_0x327361)));}),!_0x5c7b2b){try{for(_0x2314cf in _0x48c524)if(!(_0x460077&&_0x2b54a4['test'](_0x2314cf))&&!this[_0x396d0f(0x20b)](_0x48c524,_0x2314cf,_0x42dbb1)){if(_0x50404e++,_0x42dbb1[_0x396d0f(0x1e5)]++,_0x50404e>_0x7dc11f){_0xa31672=!0x0;break;}if(!_0x42dbb1[_0x396d0f(0x1a5)]&&_0x42dbb1[_0x396d0f(0x174)]&&_0x42dbb1[_0x396d0f(0x1e5)]>_0x42dbb1[_0x396d0f(0x1d7)]){_0xa31672=!0x0;break;}_0x364dc7[_0x396d0f(0x1bf)](_0x4a455d[_0x396d0f(0x1ee)](_0x11d8c9,_0x4a55ac,_0x48c524,_0xe705ce,_0x2314cf,_0x42dbb1));}}catch{}if(_0x4a55ac[_0x396d0f(0x1bc)]=!0x0,_0x390cbd&&(_0x4a55ac[_0x396d0f(0x1e6)]=!0x0),!_0xa31672){var _0x4b5f06=[][_0x396d0f(0x236)](this[_0x396d0f(0x1d3)](_0x48c524))[_0x396d0f(0x236)](this[_0x396d0f(0x210)](_0x48c524));for(_0x258082=0x0,_0xf4127=_0x4b5f06['length'];_0x258082<_0xf4127;_0x258082++)if(_0x2314cf=_0x4b5f06[_0x258082],!(_0x460077&&_0x2b54a4[_0x396d0f(0x21f)](_0x2314cf[_0x396d0f(0x1fc)]()))&&!this[_0x396d0f(0x20b)](_0x48c524,_0x2314cf,_0x42dbb1)&&!_0x4a55ac[_0x396d0f(0x1b6)+_0x2314cf[_0x396d0f(0x1fc)]()]){if(_0x50404e++,_0x42dbb1[_0x396d0f(0x1e5)]++,_0x50404e>_0x7dc11f){_0xa31672=!0x0;break;}if(!_0x42dbb1['isExpressionToEvaluate']&&_0x42dbb1[_0x396d0f(0x174)]&&_0x42dbb1[_0x396d0f(0x1e5)]>_0x42dbb1[_0x396d0f(0x1d7)]){_0xa31672=!0x0;break;}_0x364dc7['push'](_0x4a455d['_addObjectProperty'](_0x11d8c9,_0x4a55ac,_0x48c524,_0xe705ce,_0x2314cf,_0x42dbb1));}}}}}if(_0x47251c[_0x396d0f(0x202)]=_0xe705ce,_0xa3a055?(_0x47251c['value']=_0x48c524['valueOf'](),this[_0x396d0f(0x186)](_0xe705ce,_0x47251c,_0x42dbb1,_0x5ee62d)):_0xe705ce===_0x396d0f(0x223)?_0x47251c[_0x396d0f(0x1f3)]=this[_0x396d0f(0x1d8)][_0x396d0f(0x176)](_0x48c524):_0xe705ce===_0x396d0f(0x247)?_0x47251c[_0x396d0f(0x1f3)]=_0x48c524[_0x396d0f(0x1fc)]():_0xe705ce===_0x396d0f(0x222)?_0x47251c[_0x396d0f(0x1f3)]=this[_0x396d0f(0x1eb)][_0x396d0f(0x176)](_0x48c524):_0xe705ce===_0x396d0f(0x1dc)&&this[_0x396d0f(0x172)]?_0x47251c[_0x396d0f(0x1f3)]=this[_0x396d0f(0x172)]['prototype']['toString']['call'](_0x48c524):!_0x42dbb1['depth']&&!(_0xe705ce==='null'||_0xe705ce===_0x396d0f(0x1d1))&&(delete _0x47251c['value'],_0x47251c['capped']=!0x0),_0xa31672&&(_0x47251c[_0x396d0f(0x1c1)]=!0x0),_0x3c5117=_0x42dbb1[_0x396d0f(0x162)][_0x396d0f(0x206)],_0x42dbb1[_0x396d0f(0x162)]['current']=_0x47251c,this[_0x396d0f(0x19e)](_0x47251c,_0x42dbb1),_0x364dc7[_0x396d0f(0x1ce)]){for(_0x258082=0x0,_0xf4127=_0x364dc7[_0x396d0f(0x1ce)];_0x258082<_0xf4127;_0x258082++)_0x364dc7[_0x258082](_0x258082);}_0x11d8c9['length']&&(_0x47251c[_0x396d0f(0x221)]=_0x11d8c9);}catch(_0xcfa7a0){_0x329cf7(_0xcfa7a0,_0x47251c,_0x42dbb1);}return this[_0x396d0f(0x1df)](_0x48c524,_0x47251c),this['_treeNodePropertiesAfterFullValue'](_0x47251c,_0x42dbb1),_0x42dbb1['node'][_0x396d0f(0x206)]=_0x3c5117,_0x42dbb1[_0x396d0f(0x1ec)]--,_0x42dbb1[_0x396d0f(0x174)]=_0x2b3c2a,_0x42dbb1[_0x396d0f(0x174)]&&_0x42dbb1[_0x396d0f(0x250)][_0x396d0f(0x196)](),_0x47251c;}[_0x1c22b8(0x210)](_0x672991){var _0x9ccdc3=_0x1c22b8;return Object[_0x9ccdc3(0x23a)]?Object[_0x9ccdc3(0x23a)](_0x672991):[];}[_0x1c22b8(0x238)](_0xde0740){var _0x539c78=_0x1c22b8;return!!(_0xde0740&&_0x2d02e6['Set']&&this[_0x539c78(0x1ea)](_0xde0740)===_0x539c78(0x249)&&_0xde0740['forEach']);}[_0x1c22b8(0x20b)](_0x3c20ec,_0x327190,_0x2ae08f){var _0x3a9b8b=_0x1c22b8;return _0x2ae08f[_0x3a9b8b(0x22e)]?typeof _0x3c20ec[_0x327190]==_0x3a9b8b(0x177):!0x1;}[_0x1c22b8(0x1cc)](_0x30ef19){var _0x21129e=_0x1c22b8,_0x55fadc='';return _0x55fadc=typeof _0x30ef19,_0x55fadc==='object'?this[_0x21129e(0x1ea)](_0x30ef19)===_0x21129e(0x1a8)?_0x55fadc='array':this[_0x21129e(0x1ea)](_0x30ef19)===_0x21129e(0x205)?_0x55fadc=_0x21129e(0x223):this[_0x21129e(0x1ea)](_0x30ef19)===_0x21129e(0x17d)?_0x55fadc=_0x21129e(0x247):_0x30ef19===null?_0x55fadc=_0x21129e(0x175):_0x30ef19[_0x21129e(0x169)]&&(_0x55fadc=_0x30ef19[_0x21129e(0x169)][_0x21129e(0x208)]||_0x55fadc):_0x55fadc==='undefined'&&this['_HTMLAllCollection']&&_0x30ef19 instanceof this['_HTMLAllCollection']&&(_0x55fadc='HTMLAllCollection'),_0x55fadc;}['_objectToString'](_0x574ba5){var _0x5dd75e=_0x1c22b8;return Object[_0x5dd75e(0x1de)]['toString'][_0x5dd75e(0x176)](_0x574ba5);}[_0x1c22b8(0x1a4)](_0x1c2f0f){var _0x435b81=_0x1c22b8;return _0x1c2f0f===_0x435b81(0x22f)||_0x1c2f0f==='string'||_0x1c2f0f===_0x435b81(0x1ae);}[_0x1c22b8(0x1c8)](_0x5982a8){var _0x392aca=_0x1c22b8;return _0x5982a8===_0x392aca(0x1c0)||_0x5982a8==='String'||_0x5982a8===_0x392aca(0x1f2);}['_addProperty'](_0x33bb2c,_0x486242,_0x506ede,_0x27ebd9,_0xc20249,_0x90b162){var _0x57d374=this;return function(_0x49f588){var _0xae69c3=_0x341f,_0x5bfa33=_0xc20249[_0xae69c3(0x162)][_0xae69c3(0x206)],_0x3f459e=_0xc20249[_0xae69c3(0x162)][_0xae69c3(0x1af)],_0x1bc60d=_0xc20249[_0xae69c3(0x162)]['parent'];_0xc20249[_0xae69c3(0x162)][_0xae69c3(0x1c7)]=_0x5bfa33,_0xc20249['node']['index']=typeof _0x27ebd9==_0xae69c3(0x1ae)?_0x27ebd9:_0x49f588,_0x33bb2c[_0xae69c3(0x1bf)](_0x57d374[_0xae69c3(0x1e3)](_0x486242,_0x506ede,_0x27ebd9,_0xc20249,_0x90b162)),_0xc20249[_0xae69c3(0x162)]['parent']=_0x1bc60d,_0xc20249[_0xae69c3(0x162)]['index']=_0x3f459e;};}[_0x1c22b8(0x1ee)](_0x12a86d,_0x1f9037,_0x37978d,_0x3abbf9,_0x499266,_0x3a0280,_0x396298){var _0x2f6e6c=_0x1c22b8,_0x4f9212=this;return _0x1f9037[_0x2f6e6c(0x1b6)+_0x499266[_0x2f6e6c(0x1fc)]()]=!0x0,function(_0x2653f8){var _0x15dc5d=_0x2f6e6c,_0x54eff4=_0x3a0280[_0x15dc5d(0x162)]['current'],_0x3b0271=_0x3a0280[_0x15dc5d(0x162)]['index'],_0x2edfee=_0x3a0280['node'][_0x15dc5d(0x1c7)];_0x3a0280['node'][_0x15dc5d(0x1c7)]=_0x54eff4,_0x3a0280['node'][_0x15dc5d(0x1af)]=_0x2653f8,_0x12a86d['push'](_0x4f9212['_property'](_0x37978d,_0x3abbf9,_0x499266,_0x3a0280,_0x396298)),_0x3a0280[_0x15dc5d(0x162)][_0x15dc5d(0x1c7)]=_0x2edfee,_0x3a0280[_0x15dc5d(0x162)][_0x15dc5d(0x1af)]=_0x3b0271;};}['_property'](_0x39474c,_0x14ec8c,_0x4fdb13,_0x22e8c6,_0x4f87f1){var _0x32a4b2=_0x1c22b8,_0x223958=this;_0x4f87f1||(_0x4f87f1=function(_0x4919fd,_0x33ded8){return _0x4919fd[_0x33ded8];});var _0xf6b87e=_0x4fdb13[_0x32a4b2(0x1fc)](),_0x3c0a9b=_0x22e8c6[_0x32a4b2(0x211)]||{},_0x3f172b=_0x22e8c6[_0x32a4b2(0x1b8)],_0x221ae4=_0x22e8c6[_0x32a4b2(0x1a5)];try{var _0x32044f=this[_0x32a4b2(0x160)](_0x39474c),_0x32945a=_0xf6b87e;_0x32044f&&_0x32945a[0x0]==='\\x27'&&(_0x32945a=_0x32945a[_0x32a4b2(0x1f7)](0x1,_0x32945a[_0x32a4b2(0x1ce)]-0x2));var _0x1637bd=_0x22e8c6['expressionsToEvaluate']=_0x3c0a9b[_0x32a4b2(0x1b6)+_0x32945a];_0x1637bd&&(_0x22e8c6[_0x32a4b2(0x1b8)]=_0x22e8c6[_0x32a4b2(0x1b8)]+0x1),_0x22e8c6[_0x32a4b2(0x1a5)]=!!_0x1637bd;var _0x2a6d51=typeof _0x4fdb13==_0x32a4b2(0x1dc),_0x544c88={'name':_0x2a6d51||_0x32044f?_0xf6b87e:this['_propertyName'](_0xf6b87e)};if(_0x2a6d51&&(_0x544c88[_0x32a4b2(0x1dc)]=!0x0),!(_0x14ec8c===_0x32a4b2(0x165)||_0x14ec8c===_0x32a4b2(0x180))){var _0x245f3b=this[_0x32a4b2(0x1dd)](_0x39474c,_0x4fdb13);if(_0x245f3b&&(_0x245f3b[_0x32a4b2(0x185)]&&(_0x544c88[_0x32a4b2(0x194)]=!0x0),_0x245f3b[_0x32a4b2(0x24d)]&&!_0x1637bd&&!_0x22e8c6['resolveGetters']))return _0x544c88[_0x32a4b2(0x23e)]=!0x0,this['_processTreeNodeResult'](_0x544c88,_0x22e8c6),_0x544c88;}var _0x179319;try{_0x179319=_0x4f87f1(_0x39474c,_0x4fdb13);}catch(_0x1afb69){return _0x544c88={'name':_0xf6b87e,'type':'unknown','error':_0x1afb69['message']},this[_0x32a4b2(0x201)](_0x544c88,_0x22e8c6),_0x544c88;}var _0x313c10=this['_type'](_0x179319),_0x29c989=this[_0x32a4b2(0x1a4)](_0x313c10);if(_0x544c88[_0x32a4b2(0x202)]=_0x313c10,_0x29c989)this[_0x32a4b2(0x201)](_0x544c88,_0x22e8c6,_0x179319,function(){var _0x5599a0=_0x32a4b2;_0x544c88[_0x5599a0(0x1f3)]=_0x179319['valueOf'](),!_0x1637bd&&_0x223958[_0x5599a0(0x186)](_0x313c10,_0x544c88,_0x22e8c6,{});});else{var _0x406654=_0x22e8c6[_0x32a4b2(0x174)]&&_0x22e8c6[_0x32a4b2(0x1ec)]<_0x22e8c6['autoExpandMaxDepth']&&_0x22e8c6['autoExpandPreviousObjects']['indexOf'](_0x179319)<0x0&&_0x313c10!=='function'&&_0x22e8c6['autoExpandPropertyCount']<_0x22e8c6[_0x32a4b2(0x1d7)];_0x406654||_0x22e8c6[_0x32a4b2(0x1ec)]<_0x3f172b||_0x1637bd?(this[_0x32a4b2(0x1ca)](_0x544c88,_0x179319,_0x22e8c6,_0x1637bd||{}),this[_0x32a4b2(0x1df)](_0x179319,_0x544c88)):this[_0x32a4b2(0x201)](_0x544c88,_0x22e8c6,_0x179319,function(){var _0x1c7d10=_0x32a4b2;_0x313c10===_0x1c7d10(0x175)||_0x313c10===_0x1c7d10(0x1d1)||(delete _0x544c88['value'],_0x544c88[_0x1c7d10(0x1b3)]=!0x0);});}return _0x544c88;}finally{_0x22e8c6[_0x32a4b2(0x211)]=_0x3c0a9b,_0x22e8c6[_0x32a4b2(0x1b8)]=_0x3f172b,_0x22e8c6['isExpressionToEvaluate']=_0x221ae4;}}['_capIfString'](_0x5d5f64,_0x4f6944,_0x273572,_0x5c12a2){var _0x485068=_0x1c22b8,_0x29ec16=_0x5c12a2['strLength']||_0x273572[_0x485068(0x24e)];if((_0x5d5f64===_0x485068(0x1c4)||_0x5d5f64===_0x485068(0x16b))&&_0x4f6944['value']){let _0x42c7ac=_0x4f6944['value']['length'];_0x273572[_0x485068(0x1f6)]+=_0x42c7ac,_0x273572[_0x485068(0x1f6)]>_0x273572[_0x485068(0x161)]?(_0x4f6944[_0x485068(0x1b3)]='',delete _0x4f6944['value']):_0x42c7ac>_0x29ec16&&(_0x4f6944[_0x485068(0x1b3)]=_0x4f6944[_0x485068(0x1f3)][_0x485068(0x1f7)](0x0,_0x29ec16),delete _0x4f6944['value']);}}['_isMap'](_0x163e75){var _0x40feb0=_0x1c22b8;return!!(_0x163e75&&_0x2d02e6[_0x40feb0(0x1aa)]&&this[_0x40feb0(0x1ea)](_0x163e75)===_0x40feb0(0x1bb)&&_0x163e75[_0x40feb0(0x20d)]);}[_0x1c22b8(0x192)](_0x3da9e1){var _0x488a1f=_0x1c22b8;if(_0x3da9e1['match'](/^\\d+$/))return _0x3da9e1;var _0x32e9f0;try{_0x32e9f0=JSON[_0x488a1f(0x184)](''+_0x3da9e1);}catch{_0x32e9f0='\\x22'+this['_objectToString'](_0x3da9e1)+'\\x22';}return _0x32e9f0['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x32e9f0=_0x32e9f0['substr'](0x1,_0x32e9f0[_0x488a1f(0x1ce)]-0x2):_0x32e9f0=_0x32e9f0['replace'](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x32e9f0;}[_0x1c22b8(0x201)](_0xb370ff,_0x38f2ac,_0x5e4b7e,_0x106b79){var _0x38cb27=_0x1c22b8;this[_0x38cb27(0x19e)](_0xb370ff,_0x38f2ac),_0x106b79&&_0x106b79(),this[_0x38cb27(0x1df)](_0x5e4b7e,_0xb370ff),this['_treeNodePropertiesAfterFullValue'](_0xb370ff,_0x38f2ac);}[_0x1c22b8(0x19e)](_0x2905a0,_0x217982){var _0x2f3009=_0x1c22b8;this[_0x2f3009(0x24f)](_0x2905a0,_0x217982),this[_0x2f3009(0x19f)](_0x2905a0,_0x217982),this[_0x2f3009(0x1cd)](_0x2905a0,_0x217982),this[_0x2f3009(0x207)](_0x2905a0,_0x217982);}[_0x1c22b8(0x24f)](_0x3a06fa,_0x2381ad){}[_0x1c22b8(0x19f)](_0x2a31f3,_0x243337){}[_0x1c22b8(0x246)](_0x35900a,_0x3a6371){}[_0x1c22b8(0x183)](_0x540e9b){return _0x540e9b===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x14bdc9,_0x192538){var _0x1806e7=_0x1c22b8;this[_0x1806e7(0x246)](_0x14bdc9,_0x192538),this['_setNodeExpandableState'](_0x14bdc9),_0x192538[_0x1806e7(0x1b4)]&&this[_0x1806e7(0x234)](_0x14bdc9),this[_0x1806e7(0x1fb)](_0x14bdc9,_0x192538),this[_0x1806e7(0x182)](_0x14bdc9,_0x192538),this[_0x1806e7(0x1e8)](_0x14bdc9);}[_0x1c22b8(0x1df)](_0x459a70,_0x339e9f){var _0x5e76d5=_0x1c22b8;let _0x1924c3;try{_0x2d02e6['console']&&(_0x1924c3=_0x2d02e6[_0x5e76d5(0x1f0)][_0x5e76d5(0x16d)],_0x2d02e6[_0x5e76d5(0x1f0)][_0x5e76d5(0x16d)]=function(){}),_0x459a70&&typeof _0x459a70[_0x5e76d5(0x1ce)]==_0x5e76d5(0x1ae)&&(_0x339e9f[_0x5e76d5(0x1ce)]=_0x459a70['length']);}catch{}finally{_0x1924c3&&(_0x2d02e6[_0x5e76d5(0x1f0)]['error']=_0x1924c3);}if(_0x339e9f[_0x5e76d5(0x202)]===_0x5e76d5(0x1ae)||_0x339e9f['type']===_0x5e76d5(0x1f2)){if(isNaN(_0x339e9f['value']))_0x339e9f[_0x5e76d5(0x217)]=!0x0,delete _0x339e9f[_0x5e76d5(0x1f3)];else switch(_0x339e9f[_0x5e76d5(0x1f3)]){case Number[_0x5e76d5(0x20c)]:_0x339e9f[_0x5e76d5(0x209)]=!0x0,delete _0x339e9f[_0x5e76d5(0x1f3)];break;case Number[_0x5e76d5(0x245)]:_0x339e9f['negativeInfinity']=!0x0,delete _0x339e9f[_0x5e76d5(0x1f3)];break;case 0x0:this[_0x5e76d5(0x1cf)](_0x339e9f[_0x5e76d5(0x1f3)])&&(_0x339e9f[_0x5e76d5(0x1f4)]=!0x0);break;}}else _0x339e9f['type']===_0x5e76d5(0x177)&&typeof _0x459a70[_0x5e76d5(0x208)]==_0x5e76d5(0x1c4)&&_0x459a70[_0x5e76d5(0x208)]&&_0x339e9f[_0x5e76d5(0x208)]&&_0x459a70[_0x5e76d5(0x208)]!==_0x339e9f[_0x5e76d5(0x208)]&&(_0x339e9f[_0x5e76d5(0x1a9)]=_0x459a70[_0x5e76d5(0x208)]);}[_0x1c22b8(0x1cf)](_0xf76722){return 0x1/_0xf76722===Number['NEGATIVE_INFINITY'];}[_0x1c22b8(0x234)](_0x29084b){var _0x507367=_0x1c22b8;!_0x29084b['props']||!_0x29084b[_0x507367(0x221)][_0x507367(0x1ce)]||_0x29084b[_0x507367(0x202)]===_0x507367(0x165)||_0x29084b[_0x507367(0x202)]===_0x507367(0x1aa)||_0x29084b[_0x507367(0x202)]==='Set'||_0x29084b[_0x507367(0x221)][_0x507367(0x22b)](function(_0x1414ab,_0x5511c7){var _0x555151=_0x507367,_0x1a1117=_0x1414ab[_0x555151(0x208)][_0x555151(0x237)](),_0x5b7583=_0x5511c7[_0x555151(0x208)][_0x555151(0x237)]();return _0x1a1117<_0x5b7583?-0x1:_0x1a1117>_0x5b7583?0x1:0x0;});}['_addFunctionsNode'](_0x40aa8e,_0x51cdc8){var _0x35abcd=_0x1c22b8;if(!(_0x51cdc8[_0x35abcd(0x22e)]||!_0x40aa8e['props']||!_0x40aa8e[_0x35abcd(0x221)]['length'])){for(var _0x3daf4c=[],_0x392ae9=[],_0x2a9497=0x0,_0x5dfe90=_0x40aa8e['props'][_0x35abcd(0x1ce)];_0x2a9497<_0x5dfe90;_0x2a9497++){var _0x1cb8ea=_0x40aa8e[_0x35abcd(0x221)][_0x2a9497];_0x1cb8ea['type']===_0x35abcd(0x177)?_0x3daf4c[_0x35abcd(0x1bf)](_0x1cb8ea):_0x392ae9[_0x35abcd(0x1bf)](_0x1cb8ea);}if(!(!_0x392ae9[_0x35abcd(0x1ce)]||_0x3daf4c['length']<=0x1)){_0x40aa8e[_0x35abcd(0x221)]=_0x392ae9;var _0x37d771={'functionsNode':!0x0,'props':_0x3daf4c};this['_setNodeId'](_0x37d771,_0x51cdc8),this[_0x35abcd(0x246)](_0x37d771,_0x51cdc8),this[_0x35abcd(0x1c5)](_0x37d771),this[_0x35abcd(0x207)](_0x37d771,_0x51cdc8),_0x37d771['id']+='\\x20f',_0x40aa8e[_0x35abcd(0x221)][_0x35abcd(0x1f1)](_0x37d771);}}}['_addLoadNode'](_0x4f94f9,_0x3a8b57){}[_0x1c22b8(0x1c5)](_0x1916b2){}[_0x1c22b8(0x1b2)](_0x3deed2){var _0x1f0d81=_0x1c22b8;return Array[_0x1f0d81(0x19c)](_0x3deed2)||typeof _0x3deed2==_0x1f0d81(0x190)&&this['_objectToString'](_0x3deed2)===_0x1f0d81(0x1a8);}['_setNodePermissions'](_0x247473,_0x424c62){}['_cleanNode'](_0x395e0c){var _0x53383d=_0x1c22b8;delete _0x395e0c[_0x53383d(0x1cb)],delete _0x395e0c['_hasSetOnItsPath'],delete _0x395e0c[_0x53383d(0x164)];}[_0x1c22b8(0x1cd)](_0x5b3be9,_0x20f926){}}let _0x4d33ec=new _0x3c254e(),_0x1cd97c={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1a7893={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x8d6058(_0x3d884e,_0x3a50dc,_0x3a1086,_0x3c5749,_0x20ddc6,_0x26f0f5){var _0x1e28b8=_0x1c22b8;let _0x3f8a55,_0x3668bf;try{_0x3668bf=_0x1b05b2(),_0x3f8a55=_0xe3ec79[_0x3a50dc],!_0x3f8a55||_0x3668bf-_0x3f8a55['ts']>0x1f4&&_0x3f8a55['count']&&_0x3f8a55['time']/_0x3f8a55['count']<0x64?(_0xe3ec79[_0x3a50dc]=_0x3f8a55={'count':0x0,'time':0x0,'ts':_0x3668bf},_0xe3ec79[_0x1e28b8(0x1c2)]={}):_0x3668bf-_0xe3ec79[_0x1e28b8(0x1c2)]['ts']>0x32&&_0xe3ec79['hits']['count']&&_0xe3ec79[_0x1e28b8(0x1c2)][_0x1e28b8(0x203)]/_0xe3ec79[_0x1e28b8(0x1c2)][_0x1e28b8(0x23c)]<0x64&&(_0xe3ec79['hits']={});let _0x219271=[],_0x33899c=_0x3f8a55['reduceLimits']||_0xe3ec79[_0x1e28b8(0x1c2)]['reduceLimits']?_0x1a7893:_0x1cd97c,_0x4b74f4=_0x4e3639=>{var _0x3c3238=_0x1e28b8;let _0x426b6e={};return _0x426b6e[_0x3c3238(0x221)]=_0x4e3639[_0x3c3238(0x221)],_0x426b6e[_0x3c3238(0x178)]=_0x4e3639[_0x3c3238(0x178)],_0x426b6e[_0x3c3238(0x24e)]=_0x4e3639[_0x3c3238(0x24e)],_0x426b6e[_0x3c3238(0x161)]=_0x4e3639[_0x3c3238(0x161)],_0x426b6e[_0x3c3238(0x1d7)]=_0x4e3639['autoExpandLimit'],_0x426b6e[_0x3c3238(0x1e2)]=_0x4e3639['autoExpandMaxDepth'],_0x426b6e[_0x3c3238(0x1b4)]=!0x1,_0x426b6e['noFunctions']=!_0x3ac908,_0x426b6e[_0x3c3238(0x1b8)]=0x1,_0x426b6e[_0x3c3238(0x1ec)]=0x0,_0x426b6e[_0x3c3238(0x191)]='root_exp_id',_0x426b6e[_0x3c3238(0x212)]='root_exp',_0x426b6e[_0x3c3238(0x174)]=!0x0,_0x426b6e[_0x3c3238(0x250)]=[],_0x426b6e['autoExpandPropertyCount']=0x0,_0x426b6e[_0x3c3238(0x22c)]=!0x0,_0x426b6e[_0x3c3238(0x1f6)]=0x0,_0x426b6e['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x426b6e;};for(var _0xbd3a60=0x0;_0xbd3a60<_0x20ddc6[_0x1e28b8(0x1ce)];_0xbd3a60++)_0x219271['push'](_0x4d33ec[_0x1e28b8(0x1ca)]({'timeNode':_0x3d884e===_0x1e28b8(0x203)||void 0x0},_0x20ddc6[_0xbd3a60],_0x4b74f4(_0x33899c),{}));if(_0x3d884e===_0x1e28b8(0x170)){let _0x3fde84=Error[_0x1e28b8(0x1b7)];try{Error[_0x1e28b8(0x1b7)]=0x1/0x0,_0x219271[_0x1e28b8(0x1bf)](_0x4d33ec[_0x1e28b8(0x1ca)]({'stackNode':!0x0},new Error()[_0x1e28b8(0x1bd)],_0x4b74f4(_0x33899c),{'strLength':0x1/0x0}));}finally{Error[_0x1e28b8(0x1b7)]=_0x3fde84;}}return{'method':_0x1e28b8(0x1a7),'version':_0xc6c657,'args':[{'ts':_0x3a1086,'session':_0x3c5749,'args':_0x219271,'id':_0x3a50dc,'context':_0x26f0f5}]};}catch(_0x502fb2){return{'method':_0x1e28b8(0x1a7),'version':_0xc6c657,'args':[{'ts':_0x3a1086,'session':_0x3c5749,'args':[{'type':_0x1e28b8(0x19d),'error':_0x502fb2&&_0x502fb2[_0x1e28b8(0x181)]}],'id':_0x3a50dc,'context':_0x26f0f5}]};}finally{try{if(_0x3f8a55&&_0x3668bf){let _0x113db4=_0x1b05b2();_0x3f8a55[_0x1e28b8(0x23c)]++,_0x3f8a55['time']+=_0xeea918(_0x3668bf,_0x113db4),_0x3f8a55['ts']=_0x113db4,_0xe3ec79[_0x1e28b8(0x1c2)][_0x1e28b8(0x23c)]++,_0xe3ec79[_0x1e28b8(0x1c2)]['time']+=_0xeea918(_0x3668bf,_0x113db4),_0xe3ec79[_0x1e28b8(0x1c2)]['ts']=_0x113db4,(_0x3f8a55['count']>0x32||_0x3f8a55[_0x1e28b8(0x203)]>0x64)&&(_0x3f8a55[_0x1e28b8(0x1ed)]=!0x0),(_0xe3ec79[_0x1e28b8(0x1c2)][_0x1e28b8(0x23c)]>0x3e8||_0xe3ec79[_0x1e28b8(0x1c2)]['time']>0x12c)&&(_0xe3ec79[_0x1e28b8(0x1c2)][_0x1e28b8(0x1ed)]=!0x0);}}catch{}}}return _0x8d6058;}function _0x341f(_0x200ec3,_0x1032ab){var _0x4b6626=_0x4b66();return _0x341f=function(_0x341ff9,_0x29670b){_0x341ff9=_0x341ff9-0x160;var _0x4a1dc5=_0x4b6626[_0x341ff9];return _0x4a1dc5;},_0x341f(_0x200ec3,_0x1032ab);}((_0x56c8d4,_0x172cd2,_0x16d12a,_0x4a1a8b,_0x16f8ae,_0x4e7e12,_0x44f374,_0x5e2b98,_0x558bd2,_0x5a80fb)=>{var _0x42bd1f=_0x12c47f;if(_0x56c8d4['_console_ninja'])return _0x56c8d4['_console_ninja'];if(!J(_0x56c8d4,_0x5e2b98,_0x16f8ae))return _0x56c8d4[_0x42bd1f(0x1c9)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x56c8d4[_0x42bd1f(0x1c9)];let _0x4fb100=W(_0x56c8d4),_0x43fff8=_0x4fb100[_0x42bd1f(0x18d)],_0x3cf443=_0x4fb100['timeStamp'],_0x5d236b=_0x4fb100['now'],_0x1f5fa9={'hits':{},'ts':{}},_0xbb7825=Y(_0x56c8d4,_0x558bd2,_0x1f5fa9,_0x4e7e12),_0x290a80=_0x1887ec=>{_0x1f5fa9['ts'][_0x1887ec]=_0x3cf443();},_0x5d480c=(_0x10ee54,_0x413758)=>{let _0x5ebc81=_0x1f5fa9['ts'][_0x413758];if(delete _0x1f5fa9['ts'][_0x413758],_0x5ebc81){let _0x3eaf89=_0x43fff8(_0x5ebc81,_0x3cf443());_0x320312(_0xbb7825('time',_0x10ee54,_0x5d236b(),_0x3bfac5,[_0x3eaf89],_0x413758));}},_0x4984cb=_0x123b27=>_0x456b20=>{var _0x413109=_0x42bd1f;try{_0x290a80(_0x456b20),_0x123b27(_0x456b20);}finally{_0x56c8d4[_0x413109(0x1f0)][_0x413109(0x203)]=_0x123b27;}},_0x2893ac=_0x32925d=>_0x5f4ca0=>{var _0x432a68=_0x42bd1f;try{let [_0x56ac7e,_0x57dd54]=_0x5f4ca0[_0x432a68(0x1a3)](_0x432a68(0x23b));_0x5d480c(_0x57dd54,_0x56ac7e),_0x32925d(_0x56ac7e);}finally{_0x56c8d4[_0x432a68(0x1f0)][_0x432a68(0x167)]=_0x32925d;}};_0x56c8d4[_0x42bd1f(0x1c9)]={'consoleLog':(_0x1777d9,_0x454cb4)=>{var _0x51ccf2=_0x42bd1f;_0x56c8d4['console'][_0x51ccf2(0x1a7)]['name']!==_0x51ccf2(0x17b)&&_0x320312(_0xbb7825(_0x51ccf2(0x1a7),_0x1777d9,_0x5d236b(),_0x3bfac5,_0x454cb4));},'consoleTrace':(_0x4cc588,_0x443f2b)=>{var _0x41c41e=_0x42bd1f;_0x56c8d4[_0x41c41e(0x1f0)]['log']['name']!==_0x41c41e(0x18b)&&_0x320312(_0xbb7825('trace',_0x4cc588,_0x5d236b(),_0x3bfac5,_0x443f2b));},'consoleTime':()=>{var _0x614515=_0x42bd1f;_0x56c8d4[_0x614515(0x1f0)][_0x614515(0x203)]=_0x4984cb(_0x56c8d4[_0x614515(0x1f0)][_0x614515(0x203)]);},'consoleTimeEnd':()=>{var _0x3a9c01=_0x42bd1f;_0x56c8d4[_0x3a9c01(0x1f0)][_0x3a9c01(0x167)]=_0x2893ac(_0x56c8d4[_0x3a9c01(0x1f0)][_0x3a9c01(0x167)]);},'autoLog':(_0x262c42,_0x47d477)=>{var _0x36fd67=_0x42bd1f;_0x320312(_0xbb7825(_0x36fd67(0x1a7),_0x47d477,_0x5d236b(),_0x3bfac5,[_0x262c42]));},'autoLogMany':(_0x1e4f71,_0x45e380)=>{_0x320312(_0xbb7825('log',_0x1e4f71,_0x5d236b(),_0x3bfac5,_0x45e380));},'autoTrace':(_0x3fbde2,_0x4f0e09)=>{var _0x467540=_0x42bd1f;_0x320312(_0xbb7825(_0x467540(0x170),_0x4f0e09,_0x5d236b(),_0x3bfac5,[_0x3fbde2]));},'autoTraceMany':(_0x507517,_0x537fb1)=>{_0x320312(_0xbb7825('trace',_0x507517,_0x5d236b(),_0x3bfac5,_0x537fb1));},'autoTime':(_0x18af83,_0x1d6b10,_0x3d7b3a)=>{_0x290a80(_0x3d7b3a);},'autoTimeEnd':(_0x188597,_0xada254,_0x4e4680)=>{_0x5d480c(_0xada254,_0x4e4680);},'coverage':_0x51a9a2=>{_0x320312({'method':'coverage','version':_0x4e7e12,'args':[{'id':_0x51a9a2}]});}};let _0x320312=b(_0x56c8d4,_0x172cd2,_0x16d12a,_0x4a1a8b,_0x16f8ae,_0x5a80fb),_0x3bfac5=_0x56c8d4[_0x42bd1f(0x1c3)];return _0x56c8d4[_0x42bd1f(0x1c9)];})(globalThis,_0x12c47f(0x20e),_0x12c47f(0x21e),_0x12c47f(0x195),_0x12c47f(0x1e1),_0x12c47f(0x19a),_0x12c47f(0x1ad),_0x12c47f(0x204),_0x12c47f(0x1f8),_0x12c47f(0x1be));");
  } catch (e) {}
}
/* istanbul ignore next */


function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }

  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}

  return v;
}
/* istanbul ignore next */


function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }

  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}

  return v;
}
/* istanbul ignore next */


function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
/* istanbul ignore next */


function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
// Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());
// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }
// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/scss/global.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=app.js.map