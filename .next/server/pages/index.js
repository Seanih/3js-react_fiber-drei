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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/three/index.js":
/*!***********************************!*\
  !*** ./components/three/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ \"@react-three/drei\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_angle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/angle */ \"./utils/angle.js\");\n\n\n\n\n\nfunction Three() {\n    const orbitControlRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)((state)=>{\n        if (!!orbitControlRef.current) {\n            const { x , y  } = state.mouse;\n            console.log(y * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(90 - 30));\n            orbitControlRef.current.setAzimuthalAngle(-x * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(45));\n            orbitControlRef.current.setPolarAngle((y + 1) * (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(90 - 30));\n            orbitControlRef.current.update();\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera, {\n                makeDefault: true,\n                position: [\n                    0,\n                    1,\n                    5\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.OrbitControls, {\n                ref: orbitControlRef,\n                minPolarAngle: (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(60),\n                maxPolarAngle: (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(80)\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                position: [\n                    0,\n                    0.5,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            0.5,\n                            32,\n                            32\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                rotation: [\n                    (0,_utils_angle__WEBPACK_IMPORTED_MODULE_4__.angleToRadians)(-90),\n                    0,\n                    0\n                ],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"planeGeometry\", {\n                        args: [\n                            7,\n                            7\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        color: \"#1ea3d8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                args: [\n                    \"#ffffff\",\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/components/three/index.js\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Three);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RocmVlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ3ZCO0FBQ2Y7QUFDb0I7QUFFbkQsU0FBU0ssUUFBUTtJQUNoQixNQUFNQyxrQkFBa0JILDZDQUFNQSxDQUFDLElBQUk7SUFFbkNELDREQUFRQSxDQUFDSyxDQUFBQSxRQUFTO1FBQ2pCLElBQUksQ0FBQyxDQUFDRCxnQkFBZ0JFLE9BQU8sRUFBRTtZQUM5QixNQUFNLEVBQUVDLEVBQUMsRUFBRUMsRUFBQyxFQUFFLEdBQUdILE1BQU1JLEtBQUs7WUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSU4sNERBQWNBLENBQUMsS0FBSztZQUVwQ0UsZ0JBQWdCRSxPQUFPLENBQUNNLGlCQUFpQixDQUFDLENBQUNMLElBQUlMLDREQUFjQSxDQUFDO1lBQzlERSxnQkFBZ0JFLE9BQU8sQ0FBQ08sYUFBYSxDQUFDLENBQUNMLElBQUksS0FBS04sNERBQWNBLENBQUMsS0FBSztZQUNwRUUsZ0JBQWdCRSxPQUFPLENBQUNRLE1BQU07UUFDL0IsQ0FBQztJQUNGO0lBRUEscUJBQ0M7OzBCQUVDLDhEQUFDZixnRUFBaUJBO2dCQUFDZ0IsV0FBVztnQkFBQ0MsVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTs7Ozs7OzBCQUNsRCw4REFBQ2xCLDREQUFhQTtnQkFDYm1CLEtBQUtiO2dCQUNMYyxlQUFlaEIsNERBQWNBLENBQUM7Z0JBQzlCaUIsZUFBZWpCLDREQUFjQSxDQUFDOzs7Ozs7MEJBRy9CLDhEQUFDa0I7Z0JBQUtKLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUs7aUJBQUU7O2tDQUMxQiw4REFBQ0s7d0JBQWVDLE1BQU07NEJBQUM7NEJBQUs7NEJBQUk7eUJBQUc7Ozs7OztrQ0FDbkMsOERBQUNDO3dCQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7OzBCQUk3Qiw4REFBQ0o7Z0JBQUtLLFVBQVU7b0JBQUN2Qiw0REFBY0EsQ0FBQyxDQUFDO29CQUFLO29CQUFHO2lCQUFFOztrQ0FDMUMsOERBQUN3Qjt3QkFBY0osTUFBTTs0QkFBQzs0QkFBRzt5QkFBRTs7Ozs7O2tDQUMzQiw4REFBQ0M7d0JBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7MEJBRzdCLDhEQUFDRztnQkFBYUwsTUFBTTtvQkFBQztvQkFBVztpQkFBRTs7Ozs7Ozs7QUFHckM7QUFDQSxpRUFBZW5CLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZV9wb3J0Zm9saW8vLi9jb21wb25lbnRzL3RocmVlL2luZGV4LmpzPzJlMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JiaXRDb250cm9scywgUGVyc3BlY3RpdmVDYW1lcmEgfSBmcm9tICdAcmVhY3QtdGhyZWUvZHJlaSc7XG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhbmdsZVRvUmFkaWFucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FuZ2xlJztcblxuZnVuY3Rpb24gVGhyZWUoKSB7XG5cdGNvbnN0IG9yYml0Q29udHJvbFJlZiA9IHVzZVJlZihudWxsKTtcblxuXHR1c2VGcmFtZShzdGF0ZSA9PiB7XG5cdFx0aWYgKCEhb3JiaXRDb250cm9sUmVmLmN1cnJlbnQpIHtcblx0XHRcdGNvbnN0IHsgeCwgeSB9ID0gc3RhdGUubW91c2U7XG5cdFx0XHRjb25zb2xlLmxvZyh5ICogYW5nbGVUb1JhZGlhbnMoOTAgLSAzMCkpO1xuXG5cdFx0XHRvcmJpdENvbnRyb2xSZWYuY3VycmVudC5zZXRBemltdXRoYWxBbmdsZSgteCAqIGFuZ2xlVG9SYWRpYW5zKDQ1KSk7XG5cdFx0XHRvcmJpdENvbnRyb2xSZWYuY3VycmVudC5zZXRQb2xhckFuZ2xlKCh5ICsgMSkgKiBhbmdsZVRvUmFkaWFucyg5MCAtIDMwKSk7XG5cdFx0XHRvcmJpdENvbnRyb2xSZWYuY3VycmVudC51cGRhdGUoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHsvKiBDYW1lcmEgLSBzZXQgaW5pdGlhbCBwb3NpdGlvbiB0aGVuIGNoYW5nZSB3aXRoIG9yYml0IGNvbnRyb2xzICovfVxuXHRcdFx0PFBlcnNwZWN0aXZlQ2FtZXJhIG1ha2VEZWZhdWx0IHBvc2l0aW9uPXtbMCwgMSwgNV19IC8+XG5cdFx0XHQ8T3JiaXRDb250cm9sc1xuXHRcdFx0XHRyZWY9e29yYml0Q29udHJvbFJlZn1cblx0XHRcdFx0bWluUG9sYXJBbmdsZT17YW5nbGVUb1JhZGlhbnMoNjApfVxuXHRcdFx0XHRtYXhQb2xhckFuZ2xlPXthbmdsZVRvUmFkaWFucyg4MCl9XG5cdFx0XHQvPlxuXHRcdFx0ey8qIEJhbGwgKi99XG5cdFx0XHQ8bWVzaCBwb3NpdGlvbj17WzAsIDAuNSwgMF19PlxuXHRcdFx0XHQ8c3BoZXJlR2VvbWV0cnkgYXJncz17WzAuNSwgMzIsIDMyXX0gLz5cblx0XHRcdFx0PG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPScjZmZmZmZmJyAvPlxuXHRcdFx0PC9tZXNoPlxuXG5cdFx0XHR7LyogRmxvb3IgKi99XG5cdFx0XHQ8bWVzaCByb3RhdGlvbj17W2FuZ2xlVG9SYWRpYW5zKC05MCksIDAsIDBdfT5cblx0XHRcdFx0PHBsYW5lR2VvbWV0cnkgYXJncz17WzcsIDddfSAvPlxuXHRcdFx0XHQ8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9JyMxZWEzZDgnIC8+XG5cdFx0XHQ8L21lc2g+XG5cdFx0XHR7LyogQW1iaWVudCBsaWdodCAqL31cblx0XHRcdDxhbWJpZW50TGlnaHQgYXJncz17WycjZmZmZmZmJywgMV19IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBUaHJlZTtcbiJdLCJuYW1lcyI6WyJPcmJpdENvbnRyb2xzIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ1c2VGcmFtZSIsInVzZVJlZiIsImFuZ2xlVG9SYWRpYW5zIiwiVGhyZWUiLCJvcmJpdENvbnRyb2xSZWYiLCJzdGF0ZSIsImN1cnJlbnQiLCJ4IiwieSIsIm1vdXNlIiwiY29uc29sZSIsImxvZyIsInNldEF6aW11dGhhbEFuZ2xlIiwic2V0UG9sYXJBbmdsZSIsInVwZGF0ZSIsIm1ha2VEZWZhdWx0IiwicG9zaXRpb24iLCJyZWYiLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1lc2giLCJzcGhlcmVHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwicm90YXRpb24iLCJwbGFuZUdlb21ldHJ5IiwiYW1iaWVudExpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/three/index.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/three */ \"./components/three/index.js\");\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {\n                id: \"three-canvas-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                    fallback: null,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_three__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Cold/coding/threejs_projects/3js-react_fiber-drei/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFFZjtBQUNJO0FBQ087QUFFeEMsTUFBTUksT0FBaUIsSUFBTTtJQUM1QixxQkFDQyw4REFBQ0M7OzBCQUNBLDhEQUFDSixrREFBSUE7O2tDQUNKLDhEQUFDSztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNaLHNEQUFNQTtnQkFBQ2EsSUFBRzswQkFDViw0RUFBQ1gsMkNBQVFBO29CQUFDWSxVQUFVLElBQUk7OEJBQ3ZCLDRFQUFDWCx5REFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0FBRUEsaUVBQWVDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZV9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdG1sIH0gZnJvbSAnQHJlYWN0LXRocmVlL2RyZWknO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaHJlZSBmcm9tICcuLi9jb21wb25lbnRzL3RocmVlJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8Q2FudmFzIGlkPSd0aHJlZS1jYW52YXMtY29udGFpbmVyJz5cblx0XHRcdFx0PFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cblx0XHRcdFx0XHQ8VGhyZWUgLz5cblx0XHRcdFx0PC9TdXNwZW5zZT5cblx0XHRcdDwvQ2FudmFzPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJIZWFkIiwiU3VzcGVuc2UiLCJUaHJlZSIsIkhvbWUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaWQiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/angle.js":
/*!************************!*\
  !*** ./utils/angle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"angleToRadians\": () => (/* binding */ angleToRadians)\n/* harmony export */ });\nconst angleToRadians = (angleInDeg)=>Math.PI / 180 * angleInDeg;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hbmdsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsaUJBQWlCQyxDQUFBQSxhQUFjLEtBQU1FLEVBQUUsR0FBRyxNQUFPRixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BhY2VfcG9ydGZvbGlvLy4vdXRpbHMvYW5nbGUuanM/ZDU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYW5nbGVUb1JhZGlhbnMgPSBhbmdsZUluRGVnID0+IChNYXRoLlBJIC8gMTgwKSAqIGFuZ2xlSW5EZWc7XG4iXSwibmFtZXMiOlsiYW5nbGVUb1JhZGlhbnMiLCJhbmdsZUluRGVnIiwiTWF0aCIsIlBJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/angle.js\n");

/***/ }),

/***/ "@react-three/drei":
/*!************************************!*\
  !*** external "@react-three/drei" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ "@react-three/fiber":
/*!*************************************!*\
  !*** external "@react-three/fiber" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();