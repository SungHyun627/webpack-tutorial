"use strict";
(self["webpackChunkwebpack_tutorial"] = self["webpackChunkwebpack_tutorial"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ 569);



async function getComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);

  const { default: _ } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23));
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"].bind(null, 'Hello webpack!');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});


/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text) {
  console.log(text);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNzQ0OTc0ZmVjNzQwMDBjZGQwYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0s7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVUsYUFBYSxRQUFRLDZHQUFnQjtBQUMvQztBQUNBLG9CQUFvQixtREFBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmM7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10dXRvcmlhbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXR1dG9yaWFsLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUHJpbnQgZnJvbSAnLi9wcmludCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoJ2xvZGFzaCcpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KHRleHQpIHtcbiAgY29uc29sZS5sb2codGV4dCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=