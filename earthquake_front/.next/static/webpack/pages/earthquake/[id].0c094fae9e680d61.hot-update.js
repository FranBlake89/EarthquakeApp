"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/earthquake/[id]",{

/***/ "./pages/earthquake/[id].jsx":
/*!***********************************!*\
  !*** ./pages/earthquake/[id].jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Earthquake; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageHeader */ \"./components/PageHeader.jsx\");\n/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MainNav */ \"./components/MainNav.jsx\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Earthquake(param) {\n    let { earthquake } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (!earthquake) {\n        return null;\n    }\n    console.log(\"props.earthquake:\", earthquake);\n    const { id, attributes, comments } = earthquake;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-100 p-5 bg-body-tertiary border rounded-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Earthquake ID:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 25\n                                        }, this),\n                                        \" \",\n                                        id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 21\n                                }, this),\n                                attributes && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"External ID:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                                    lineNumber: 26,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \" \",\n                                                attributes.external_id\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Magnitude:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 33\n                                                }, this),\n                                                \" \",\n                                                attributes.magnitude\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: \"Comments:\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 33\n                                                }, this),\n                                                comments.length > 0 ? comments.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: comment.body\n                                                    }, comment.id, false, {\n                                                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 41\n                                                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"No comments available\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Earthquake, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Earthquake;\nvar _c;\n$RefreshReg$(_c, \"Earthquake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lYXJ0aHF1YWtlL1tpZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFDTjtBQUNPOztBQUVuQyxTQUFTSSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDs7SUFDL0IsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCLElBQUksQ0FBQ0ssWUFBWTtRQUNiLE9BQU87SUFDWDtJQUNBRSxRQUFRQyxHQUFHLENBQUMscUJBQXFCSDtJQUVqQyxNQUFNLEVBQUVJLEVBQUUsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUUsR0FBR047SUFFckMscUJBQ0k7OzBCQUNJLDhEQUFDSCwyREFBT0E7Ozs7OzBCQUNSLDhEQUFDQyxpRUFBU0E7MEJBQ1YsNEVBQUNTO29CQUFJQyxXQUFVOzhCQUNuQiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNDOzRCQUFHRCxXQUFVOzs4Q0FDRiw4REFBQ0U7O3NEQUFHLDhEQUFDQztzREFBTzs7Ozs7O3dDQUF1Qjt3Q0FBRVA7Ozs7Ozs7Z0NBQ3BDQyw0QkFDRzs7c0RBQ0ksOERBQUNLOzs4REFBRyw4REFBQ0M7OERBQU87Ozs7OztnREFBcUI7Z0RBQUVOLFdBQVdPLFdBQVc7Ozs7Ozs7c0RBQ3pELDhEQUFDRjs7OERBQUcsOERBQUNDOzhEQUFPOzs7Ozs7Z0RBQW1CO2dEQUFFTixXQUFXUSxTQUFTOzs7Ozs7O3NEQUNyRCw4REFBQ0g7OzhEQUFHLDhEQUFDQzs4REFBTzs7Ozs7O2dEQUNQTCxTQUFTUSxNQUFNLEdBQUcsSUFDZlIsU0FBU1MsR0FBRyxDQUFDQyxDQUFBQSx3QkFDVCw4REFBQ047a0VBQXFCTSxRQUFRQyxJQUFJO3VEQUF6QkQsUUFBUVosRUFBRTs7Ozs4RUFHdkIsOERBQUNjOzhEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFDO0dBdkN3Qm5COztRQUNMSixrREFBU0E7OztLQURKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lYXJ0aHF1YWtlL1tpZF0uanN4P2FkNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnQC9jb21wb25lbnRzL01haW5OYXYnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWFydGhxdWFrZSh7IGVhcnRocXVha2UgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgaWYgKCFlYXJ0aHF1YWtlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncHJvcHMuZWFydGhxdWFrZTonLCBlYXJ0aHF1YWtlKTtcblxuICAgIGNvbnN0IHsgaWQsIGF0dHJpYnV0ZXMsIGNvbW1lbnRzIH0gPSBlYXJ0aHF1YWtlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNYWluTmF2IC8+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIHAtNSBiZy1ib2R5LXRlcnRpYXJ5IGJvcmRlciByb3VuZGVkLTNcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nbXktNCc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkVhcnRocXVha2UgSUQ6PC9zdHJvbmc+IHtpZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPkV4dGVybmFsIElEOjwvc3Ryb25nPiB7YXR0cmlidXRlcy5leHRlcm5hbF9pZH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPk1hZ25pdHVkZTo8L3N0cm9uZz4ge2F0dHJpYnV0ZXMubWFnbml0dWRlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q29tbWVudHM6PC9zdHJvbmc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjb21tZW50LmlkfT57Y29tbWVudC5ib2R5fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Tm8gY29tbWVudHMgYXZhaWxhYmxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo0MDAwL2FwaS9mZWF0dXJlcz9wYWdlPTEmcGVyUGFnZT0yMGApO1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcblxuICAgICAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChlYXJ0aHF1YWtlKSA9PiAoe1xuICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBlYXJ0aHF1YWtlLmlkLnRvU3RyaW5nKCkgfSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRocyxcbiAgICAgICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxuICAgICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBwYXRoczogW10sIGZhbGxiYWNrOiAnYmxvY2tpbmcnIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjQwMDAvYXBpL2ZlYXR1cmVzLyR7cGFyYW1zLmlkfWApO1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IGVhcnRocXVha2U6IGRhdGEgfSB9O1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBnZXQgRWFydGhxdWFrZTogJHtlcnJvcn1gKTtcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZWFydGhxdWFrZTogbnVsbCB9IH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlBhZ2VIZWFkZXIiLCJNYWluTmF2IiwiQ29udGFpbmVyIiwiRWFydGhxdWFrZSIsImVhcnRocXVha2UiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJhdHRyaWJ1dGVzIiwiY29tbWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwic3Ryb25nIiwiZXh0ZXJuYWxfaWQiLCJtYWduaXR1ZGUiLCJsZW5ndGgiLCJtYXAiLCJjb21tZW50IiwiYm9keSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/earthquake/[id].jsx\n"));

/***/ })

});