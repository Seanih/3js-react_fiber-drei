"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/three/index.js":
/*!***********************************!*\
  !*** ./components/three/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _utils_angle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/angle */ \"./utils/angle.js\");\n\n\n\nfunction Three() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {\n                makeDefault: true,\n                position: [\n                    0,\n                    1,\n                    5\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            0.75,\n                            32,\n                            32\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                rotation: [\n                    -(0,_utils_angle__WEBPACK_IMPORTED_MODULE_1__.angleToRadians)(40),\n                    0,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                        args: [\n                            7,\n                            7\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#1ea3d8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                args: [\n                    \"#ffffff\",\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Three;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Three);\nvar _c;\n$RefreshReg$(_c, \"Three\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUNIO0FBRW5ELFNBQVNFLFFBQVE7SUFDaEIscUJBQ0M7OzBCQUNDLDhEQUFDRixnRUFBaUJBO2dCQUFDRyxXQUFXO2dCQUFDQyxVQUFVO29CQUFDO29CQUFHO29CQUFHO2lCQUFFOzs7Ozs7MEJBRWxELDhEQUFDQzs7a0NBQ0EsOERBQUNDO3dCQUFlQyxNQUFNOzRCQUFDOzRCQUFNOzRCQUFJO3lCQUFHOzs7Ozs7a0NBQ3BDLDhEQUFDQzt3QkFBcUJDLE9BQU07Ozs7Ozs7Ozs7OzswQkFJN0IsOERBQUNKO2dCQUFLSyxVQUFVO29CQUFDLENBQUNULDREQUFjQSxDQUFDO29CQUFLO29CQUFHO2lCQUFFOztrQ0FDMUMsOERBQUNVO3dCQUFjSixNQUFNOzRCQUFDOzRCQUFHO3lCQUFFOzs7Ozs7a0NBQzNCLDhEQUFDQzt3QkFBcUJDLE9BQU07Ozs7Ozs7Ozs7OzswQkFHN0IsOERBQUNHO2dCQUFhTCxNQUFNO29CQUFDO29CQUFXO2lCQUFFOzs7Ozs7OztBQUdyQztLQW5CU0w7QUFvQlQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aHJlZS9pbmRleC5qcz8yZTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0IHsgYW5nbGVUb1JhZGlhbnMgfSBmcm9tICcuLi8uLi91dGlscy9hbmdsZSc7XG5cbmZ1bmN0aW9uIFRocmVlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UGVyc3BlY3RpdmVDYW1lcmEgbWFrZURlZmF1bHQgcG9zaXRpb249e1swLCAxLCA1XX0gLz5cblx0XHRcdHsvKiBCYWxsICovfVxuXHRcdFx0PG1lc2g+XG5cdFx0XHRcdDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMC43NSwgMzIsIDMyXX0gLz5cblx0XHRcdFx0PG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPScjZmZmZmZmJyAvPlxuXHRcdFx0PC9tZXNoPlxuXG5cdFx0XHR7LyogRmxvb3IgKi99XG5cdFx0XHQ8bWVzaCByb3RhdGlvbj17Wy1hbmdsZVRvUmFkaWFucyg0MCksIDAsIDBdfT5cblx0XHRcdFx0PHBsYW5lR2VvbWV0cnkgYXJncz17WzcsIDddfSAvPlxuXHRcdFx0XHQ8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9JyMxZWEzZDgnIC8+XG5cdFx0XHQ8L21lc2g+XG5cdFx0XHR7LyogQW1iaWVudCBsaWdodCAqL31cblx0XHRcdDxhbWJpZW50TGlnaHQgYXJncz17WycjZmZmZmZmJywgMV19IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBUaHJlZTtcbiJdLCJuYW1lcyI6WyJQZXJzcGVjdGl2ZUNhbWVyYSIsImFuZ2xlVG9SYWRpYW5zIiwiVGhyZWUiLCJtYWtlRGVmYXVsdCIsInBvc2l0aW9uIiwibWVzaCIsInNwaGVyZUdlb21ldHJ5IiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJyb3RhdGlvbiIsInBsYW5lR2VvbWV0cnkiLCJhbWJpZW50TGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/three/index.js\n"));

/***/ })

});