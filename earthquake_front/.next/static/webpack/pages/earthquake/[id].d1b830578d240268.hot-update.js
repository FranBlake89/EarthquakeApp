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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Earthquake; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageHeader */ \"./components/PageHeader.jsx\");\n/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MainNav */ \"./components/MainNav.jsx\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Earthquake(props) {\n    var _props_earthquake;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (!props) {\n        return null;\n    }\n    console.log(\"earthquake::\", props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"earthquake ID: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 21\n                                }, this),\n                                (_props_earthquake = props.earthquake) === null || _props_earthquake === void 0 ? void 0 : _props_earthquake.id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"External ID: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 21\n                                }, this),\n                                props.earthquake[\"attributes\"].external_id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Start Time: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 21\n                                }, this),\n                                props.earthquake[\"attributes\"].magnitude\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Stop Time: \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 21\n                                }, this),\n                                props.earthquake.comments.map((e)=>e.body)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/earthquake/[id].jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Earthquake, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Earthquake;\nvar _c;\n$RefreshReg$(_c, \"Earthquake\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lYXJ0aHF1YWtlL1tpZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1M7QUFFUDtBQUNROztBQUVuQyxTQUFTSSxXQUFXQyxLQUFLO1FBYWFBOztJQVpqRCxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsSUFBRyxDQUFDSyxPQUFNO1FBQ04sT0FBTztJQUNYO0lBQ0FFLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JIO0lBRTVCLHFCQUNJOzswQkFDQSw4REFBQ0gsMkRBQU9BOzs7OzswQkFDUiw4REFBQ0MsaUVBQVNBOzBCQUNOLDRFQUFDTTtvQkFBR0MsV0FBVTs7c0NBQ1YsOERBQUNDOzs4Q0FBRyw4REFBQ0M7OENBQU87Ozs7OztpQ0FBeUJQLG9CQUFBQSxNQUFNUSxVQUFVLGNBQWhCUix3Q0FBQUEsa0JBQWtCUyxFQUFFOzs7Ozs7O3NDQUN6RCw4REFBQ0g7OzhDQUFHLDhEQUFDQzs4Q0FBTzs7Ozs7O2dDQUF1QlAsTUFBTVEsVUFBVSxDQUFDLGFBQWEsQ0FBQ0UsV0FBVzs7Ozs7OztzQ0FDN0UsOERBQUNKOzs4Q0FBRyw4REFBQ0M7OENBQU87Ozs7OztnQ0FBc0JQLE1BQU1RLFVBQVUsQ0FBQyxhQUFhLENBQUNHLFNBQVM7Ozs7Ozs7c0NBQzFFLDhEQUFDTDs7OENBQUcsOERBQUNDOzhDQUFPOzs7Ozs7Z0NBQXFCUCxNQUFNUSxVQUFVLENBQUNJLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xRjtHQXRCd0JoQjs7UUFDTEosa0RBQVNBOzs7S0FESkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWFydGhxdWFrZS9baWRdLmpzeD9hZDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9QYWdlSGVhZGVyJztcblxuaW1wb3J0IE1haW5OYXYgZnJvbSAnQC9jb21wb25lbnRzL01haW5OYXYnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFYXJ0aHF1YWtlKHByb3BzKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBpZighcHJvcHMpe1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZWFydGhxdWFrZTo6JywgcHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8TWFpbk5hdiAvPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbXktNCc+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+ZWFydGhxdWFrZSBJRDogPC9zdHJvbmc+e3Byb3BzLmVhcnRocXVha2U/LmlkfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RXh0ZXJuYWwgSUQ6IDwvc3Ryb25nPntwcm9wcy5lYXJ0aHF1YWtlWydhdHRyaWJ1dGVzJ10uZXh0ZXJuYWxfaWR9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5TdGFydCBUaW1lOiA8L3N0cm9uZz57cHJvcHMuZWFydGhxdWFrZVsnYXR0cmlidXRlcyddLm1hZ25pdHVkZX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlN0b3AgVGltZTogPC9zdHJvbmc+e3Byb3BzLmVhcnRocXVha2UuY29tbWVudHMubWFwKGUgPT4gZS5ib2R5KX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMgKCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hcGkvZmVhdHVyZXM/cGFnZT0xJnBlcl9wYWdlPTIwYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChlYXJ0aHF1YWtlKSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHsgaWQ6IGVhcnRocXVha2UuaWQgfSxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6NDAwMC9hcGkvZmVhdHVyZXMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKTtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvcjogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgLy9jb25zb2xlLnRhYmxlKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7IGVhcnRocXVha2U6IGRhdGEgfSB9O1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBnZXQgRWFydGhxdWFrZTogJHtlcnJvcn1gKTtcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZWFydGhxdWFrZTogbnVsbCB9IH07XG4gICAgfVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQYWdlSGVhZGVyIiwiTWFpbk5hdiIsIkNvbnRhaW5lciIsIkVhcnRocXVha2UiLCJwcm9wcyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwic3Ryb25nIiwiZWFydGhxdWFrZSIsImlkIiwiZXh0ZXJuYWxfaWQiLCJtYWduaXR1ZGUiLCJjb21tZW50cyIsIm1hcCIsImUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/earthquake/[id].jsx\n"));

/***/ })

});