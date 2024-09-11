"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/AppRegistry */ \"react-native-web/dist/cjs/exports/AppRegistry\");\n/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_native_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-media-query */ \"./node_modules/react-native-media-query/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/zsoltbokor/Documents/projects/web/RNApp/pages/_document.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_0___default()) {\n  static async getInitialProps(ctx) {\n    const {\n      renderPage\n    } = ctx;\n    react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_1___default().registerComponent('react-native-stylesheet', () => next_document__WEBPACK_IMPORTED_MODULE_0__.Main);\n    const {\n      getStyleElement\n    } = react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_1___default().getApplication('react-native-stylesheet');\n    const page = await renderPage();\n    const styles = [getStyleElement(), (0,react_native_media_query__WEBPACK_IMPORTED_MODULE_3__.flush)()];\n    return _objectSpread(_objectSpread({}, page), {}, {\n      styles: react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(styles)\n    });\n  }\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Y7QUFBQTtBQUU1RDtBQUNxQjtBQUFBO0FBRWhDLE1BQU1VLFVBQVUsU0FBU1Ysc0RBQVEsQ0FBQztFQUM3QyxhQUFhVyxlQUFlQSxDQUFDQyxHQUFvQixFQUFFO0lBQy9DLE1BQU07TUFBQ0M7SUFBVSxDQUFDLEdBQUdELEdBQUc7SUFFeEJQLHNHQUE2QixDQUFDLHlCQUF5QixFQUFFLE1BQU1GLCtDQUFJLENBQUM7SUFDcEUsTUFBTTtNQUFDWTtJQUFlLENBQUMsR0FBR1YsbUdBQTBCLENBQUMseUJBQXlCLENBQUM7SUFDL0UsTUFBTVksSUFBSSxHQUFHLE1BQU1KLFVBQVUsQ0FBQyxDQUFDO0lBQy9CLE1BQU1LLE1BQU0sR0FBRyxDQUFDSCxlQUFlLENBQUMsQ0FBQyxFQUFFUiwrREFBSyxDQUFDLENBQUMsQ0FBQztJQUUzQyxPQUFBWSxhQUFBLENBQUFBLGFBQUEsS0FBV0YsSUFBSTtNQUFFQyxNQUFNLEVBQUVaLHFEQUFjLENBQUNlLE9BQU8sQ0FBQ0gsTUFBTTtJQUFDO0VBQzNEO0VBRUFJLE1BQU1BLENBQUEsRUFBRztJQUNMLG9CQUNJYiw2REFBQSxDQUFDUCwrQ0FBSTtNQUFBcUIsUUFBQSxnQkFDRGQsNkRBQUEsQ0FBQ1IsK0NBQUk7UUFBQXVCLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUFDLENBQUMsZUFDUGxCLDZEQUFBO1FBQUFjLFFBQUEsZ0JBQ0lkLDZEQUFBLENBQUNOLCtDQUFJO1VBQUFxQixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsT0FBQyxDQUFDLGVBQ1BsQiw2REFBQSxDQUFDTCxxREFBVTtVQUFBb0IsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUMsQ0FBQztNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUNYLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDTCxDQUFDO0VBRWY7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL1JOQXBwLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwge0RvY3VtZW50Q29udGV4dCwgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQge0FwcFJlZ2lzdHJ5fSBmcm9tICdyZWFjdC1uYXRpdmUtd2ViJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZsdXNofSBmcm9tICdyZWFjdC1uYXRpdmUtbWVkaWEtcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4OiBEb2N1bWVudENvbnRleHQpIHtcbiAgICAgICAgY29uc3Qge3JlbmRlclBhZ2V9ID0gY3R4O1xuXG4gICAgICAgIEFwcFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KCdyZWFjdC1uYXRpdmUtc3R5bGVzaGVldCcsICgpID0+IE1haW4pO1xuICAgICAgICBjb25zdCB7Z2V0U3R5bGVFbGVtZW50fSA9IEFwcFJlZ2lzdHJ5LmdldEFwcGxpY2F0aW9uKCdyZWFjdC1uYXRpdmUtc3R5bGVzaGVldCcpO1xuICAgICAgICBjb25zdCBwYWdlID0gYXdhaXQgcmVuZGVyUGFnZSgpO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBbZ2V0U3R5bGVFbGVtZW50KCksIGZsdXNoKCldO1xuXG4gICAgICAgIHJldHVybiB7Li4ucGFnZSwgc3R5bGVzOiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHN0eWxlcyl9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIdG1sPlxuICAgICAgICAgICAgICAgIDxIZWFkLz5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4vPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdC8+XG4gICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgPC9IdG1sPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJIdG1sIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJBcHBSZWdpc3RyeSIsIlJlYWN0IiwiZmx1c2giLCJqc3hERVYiLCJfanN4REVWIiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlbmRlclBhZ2UiLCJyZWdpc3RlckNvbXBvbmVudCIsImdldFN0eWxlRWxlbWVudCIsImdldEFwcGxpY2F0aW9uIiwicGFnZSIsInN0eWxlcyIsIl9vYmplY3RTcHJlYWQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "css-mediaquery":
/*!*********************************!*\
  !*** external "css-mediaquery" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("css-mediaquery");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/AppRegistry":
/*!****************************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/AppRegistry" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("react-native-web/dist/cjs/exports/AppRegistry");

/***/ }),

/***/ "react-native-web/dist/cjs/exports/Dimensions":
/*!***************************************************************!*\
  !*** external "react-native-web/dist/cjs/exports/Dimensions" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("react-native-web/dist/cjs/exports/Dimensions");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-native-media-query"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();