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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_angle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/angle */ \"./utils/angle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Three() {\n    _s();\n    const orbitControlRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)((state)=>{\n        if (!!orbitControlRef.current) {\n            const { x , y  } = state.mouse;\n            console.log(y * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(90 - 30));\n            orbitControlRef.current.setAzimuthalAngle(-x * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(45));\n            orbitControlRef.current.setPolarAngle((y + 1) * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(90 - 30));\n            orbitControlRef.current;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera, {\n                makeDefault: true,\n                position: [\n                    0,\n                    1,\n                    5\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.OrbitControls, {\n                ref: orbitControlRef,\n                minPolarAngle: (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(60),\n                maxPolarAngle: (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(80)\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                position: [\n                    0,\n                    0.5,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            0.5,\n                            32,\n                            32\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                rotation: [\n                    (0,_utils_angle__WEBPACK_IMPORTED_MODULE_2__.angleToRadians)(-90),\n                    0,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                        args: [\n                            7,\n                            7\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#1ea3d8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                args: [\n                    \"#ffffff\",\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Three, \"V0w0+i0BRYR59Trd6lfwf0dVLqU=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame\n    ];\n});\n_c = Three;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Three);\nvar _c;\n$RefreshReg$(_c, \"Three\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUU7QUFDdkI7QUFDZjtBQUNvQjtBQUVuRCxTQUFTSyxRQUFROztJQUNoQixNQUFNQyxrQkFBa0JILDZDQUFNQSxDQUFDLElBQUk7SUFDbkNELDREQUFRQSxDQUFDSyxDQUFBQSxRQUFTO1FBQ2pCLElBQUksQ0FBQyxDQUFDRCxnQkFBZ0JFLE9BQU8sRUFBRTtZQUM5QixNQUFNLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFLEdBQUdILE1BQU1JLEtBQUs7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSU4sNERBQWNBLENBQUMsS0FBSztZQUVwQ0UsZ0JBQWdCRSxPQUFPLENBQUNNLGlCQUFpQixDQUFDLENBQUNMLElBQUlMLDREQUFjQSxDQUFDO1lBQ3hERSxnQkFBZ0JFLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLENBQUNMLElBQUksS0FBS04sNERBQWNBLENBQUMsS0FBSztZQUNwRUUsZ0JBQWdCRSxPQUFPO1FBQzlCLENBQUM7SUFDRjtJQUVBLHFCQUNDOzswQkFFQyw4REFBQ1AsZ0VBQWlCQTtnQkFBQ2UsV0FBVztnQkFBQ0MsVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTs7Ozs7OzBCQUNsRCw4REFBQ2pCLDREQUFhQTtnQkFDYmtCLEtBQUtaO2dCQUNMYSxlQUFlZiw0REFBY0EsQ0FBQztnQkFDOUJnQixlQUFlaEIsNERBQWNBLENBQUM7Ozs7OzswQkFHL0IsOERBQUNpQjtnQkFBS0osVUFBVTtvQkFBQztvQkFBRztvQkFBSztpQkFBRTs7a0NBQzFCLDhEQUFDSzt3QkFBZUMsTUFBTTs0QkFBQzs0QkFBSzs0QkFBSTt5QkFBRzs7Ozs7O2tDQUNuQyw4REFBQ0M7d0JBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBSTdCLDhEQUFDSjtnQkFBS0ssVUFBVTtvQkFBQ3RCLDREQUFjQSxDQUFDLENBQUM7b0JBQUs7b0JBQUc7aUJBQUU7O2tDQUMxQyw4REFBQ3VCO3dCQUFjSixNQUFNOzRCQUFDOzRCQUFHO3lCQUFFOzs7Ozs7a0NBQzNCLDhEQUFDQzt3QkFBcUJDLE9BQU07Ozs7Ozs7Ozs7OzswQkFHN0IsOERBQUNHO2dCQUFhTCxNQUFNO29CQUFDO29CQUFXO2lCQUFFOzs7Ozs7OztBQUdyQztHQXJDU2xCOztRQUVSSCx3REFBUUE7OztLQUZBRztBQXNDVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RocmVlL2luZGV4LmpzPzJlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JiaXRDb250cm9scywgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhbmdsZVRvUmFkaWFucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FuZ2xlJztcblxuZnVuY3Rpb24gVGhyZWUoKSB7XG5cdGNvbnN0IG9yYml0Q29udHJvbFJlZiA9IHVzZVJlZihudWxsKTtcblx0dXNlRnJhbWUoc3RhdGUgPT4ge1xuXHRcdGlmICghIW9yYml0Q29udHJvbFJlZi5jdXJyZW50KSB7XG5cdFx0XHRjb25zdCB7IHgsIHkgfSA9IHN0YXRlLm1vdXNlO1xuXHRcdFx0Y29uc29sZS5sb2coeSAqIGFuZ2xlVG9SYWRpYW5zKDkwIC0gMzApKTtcblxuXHRcdFx0b3JiaXRDb250cm9sUmVmLmN1cnJlbnQuc2V0QXppbXV0aGFsQW5nbGUoLXggKiBhbmdsZVRvUmFkaWFucyg0NSkpO1xuICAgICAgICAgb3JiaXRDb250cm9sUmVmLmN1cnJlbnQuc2V0UG9sYXJBbmdsZSgoeSArIDEpICogYW5nbGVUb1JhZGlhbnMoOTAgLSAzMCkpICAgXG4gICAgICAgICBvcmJpdENvbnRyb2xSZWYuY3VycmVudFxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0ey8qIENhbWVyYSAtIHNldCBpbml0aWFsIHBvc2l0aW9uIHRoZW4gY2hhbmdlIHdpdGggb3JiaXQgY29udHJvbHMgKi99XG5cdFx0XHQ8UGVyc3BlY3RpdmVDYW1lcmEgbWFrZURlZmF1bHQgcG9zaXRpb249e1swLCAxLCA1XX0gLz5cblx0XHRcdDxPcmJpdENvbnRyb2xzXG5cdFx0XHRcdHJlZj17b3JiaXRDb250cm9sUmVmfVxuXHRcdFx0XHRtaW5Qb2xhckFuZ2xlPXthbmdsZVRvUmFkaWFucyg2MCl9XG5cdFx0XHRcdG1heFBvbGFyQW5nbGU9e2FuZ2xlVG9SYWRpYW5zKDgwKX1cblx0XHRcdC8+XG5cdFx0XHR7LyogQmFsbCAqL31cblx0XHRcdDxtZXNoIHBvc2l0aW9uPXtbMCwgMC41LCAwXX0+XG5cdFx0XHRcdDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMC41LCAzMiwgMzJdfSAvPlxuXHRcdFx0XHQ8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9JyNmZmZmZmYnIC8+XG5cdFx0XHQ8L21lc2g+XG5cblx0XHRcdHsvKiBGbG9vciAqL31cblx0XHRcdDxtZXNoIHJvdGF0aW9uPXtbYW5nbGVUb1JhZGlhbnMoLTkwKSwgMCwgMF19PlxuXHRcdFx0XHQ8cGxhbmVHZW9tZXRyeSBhcmdzPXtbNywgN119IC8+XG5cdFx0XHRcdDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj0nIzFlYTNkOCcgLz5cblx0XHRcdDwvbWVzaD5cblx0XHRcdHsvKiBBbWJpZW50IGxpZ2h0ICovfVxuXHRcdFx0PGFtYmllbnRMaWdodCBhcmdzPXtbJyNmZmZmZmYnLCAxXX0gLz5cblx0XHQ8Lz5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IFRocmVlO1xuIl0sIm5hbWVzIjpbIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUZyYW1lIiwidXNlUmVmIiwiYW5nbGVUb1JhZGlhbnMiLCJUaHJlZSIsIm9yYml0Q29udHJvbFJlZiIsInN0YXRlIiwiY3VycmVudCIsIngiLCJ5IiwibW91c2UiLCJjb25zb2xlIiwibG9nIiwic2V0QXppbXV0aGFsQW5nbGUiLCJzZXRQb2xhckFuZ2xlIiwibWFrZURlZmF1bHQiLCJwb3NpdGlvbiIsInJlZiIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWVzaCIsInNwaGVyZUdlb21ldHJ5IiwiYXJncyIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiLCJyb3RhdGlvbiIsInBsYW5lR2VvbWV0cnkiLCJhbWJpZW50TGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/three/index.js\n"));

/***/ })

});