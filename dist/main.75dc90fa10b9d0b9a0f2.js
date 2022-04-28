"use strict";
(self["webpackChunkwebpack_tutorial"] = self["webpackChunkwebpack_tutorial"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


async function getComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);
  const { default: _ } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NWRjOTBmYTEwYjlkMGI5YTBmMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWEsUUFBUSwySUFBZ0I7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10dXRvcmlhbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoJ2xvZGFzaCcpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmdldENvbXBvbmVudCgpLnRoZW4oKGNvbXBvbmVudCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==