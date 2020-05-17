(window["webpackJsonptry_webpack"] = window["webpackJsonptry_webpack"] || []).push([["main"],{

/***/ 426:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 645);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".hello {\r\n  color: hotpink;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 654:
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ 426);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ 654);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ 52);

// import printMe from "./print";




function component() {
  const element = document.createElement("div");
  console.log((lodash__WEBPACK_IMPORTED_MODULE_0___default()));
  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ["Hello webpack", "5 cubed is equal to" + (0,_math__WEBPACK_IMPORTED_MODULE_2__.cube)(5)];
  btn.innerHTML = "Click me and check the console !";
  // btn.onclick = printMe;
  element.classList.add("hello");
  // element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ 52:
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! namespace exports */
/*! export cube [provided] [used] [could be renamed] */
/*! export square [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => /* binding */ cube
/* harmony export */ });
/* unused harmony export square */
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}


/***/ })

},[[138,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnktd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHJ5LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHJ5LXdlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHJ5LXdlYnBhY2svLi9zcmMvbWF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseURBQWdEO0FBQzFGO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQXFCLEtBQUs7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQSxVQUFVLG1CQUFPLENBQUMsaUZBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLCtEQUFzRDs7QUFFeEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEI7QUFDMUI7O0FBRXFCO0FBQ1M7O0FBRTlCO0FBQ0E7QUFDQSxjQUFjLCtDQUFJO0FBQ2xCO0FBQ0E7QUFDQSxnRUFBZ0UsMkNBQUk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJmaWxlIjoibWFpbi5jNmExMTI5ZmU4ZDFmY2NlZTRlZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVsbG8ge1xcclxcbiAgY29sb3I6IGhvdHBpbms7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgam9pbiBmcm9tIFwibG9kYXNoXCI7XHJcbi8vIGltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBjdWJlIH0gZnJvbSBcIi4vbWF0aFwiO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnNvbGUubG9nKGpvaW4pO1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcclxuICBlbGVtZW50LmlubmVySFRNTCA9IFtcIkhlbGxvIHdlYnBhY2tcIiwgXCI1IGN1YmVkIGlzIGVxdWFsIHRvXCIgKyBjdWJlKDUpXTtcclxuICBidG4uaW5uZXJIVE1MID0gXCJDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUgIVwiO1xyXG4gIC8vIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWxsb1wiKTtcclxuICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XHJcbiAgcmV0dXJuIHggKiB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XHJcbiAgcmV0dXJuIHggKiB4ICogeDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9