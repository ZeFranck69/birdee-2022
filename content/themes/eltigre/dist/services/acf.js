/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./inc/services/acf/js/index.js ***!
  \**************************************/
acf.add_filter('color_picker_args', function (args, $field) {
  args.palettes = [];
  console.log(acfAdminColors);

  for (var color in acfAdminColors) {
    args.palettes.push('#' + color);
  }

  return args;
});
/******/ })()
;
//# sourceMappingURL=acf.js.map