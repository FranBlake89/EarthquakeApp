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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Pagination,Table!=!react-bootstrap */ \"__barrel_optimize__?names=Container,Pagination,Table!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageHeader */ \"./components/PageHeader.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_MainNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/MainNav */ \"./components/MainNav.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Removed unnecessary 'use' import\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);\n    const [pageData, setPageData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null); // Initialized as null instead of empty array\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"http://127.0.0.1:4000/api/features?page=\".concat(page, \"&perPage=20\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (data) {\n            console.log(\"data::UseEffect\", data);\n            setPageData(data.data); // Set pageData to data.data\n        }\n    }, [\n        data,\n        data.pagination.total_pages\n    ]);\n    const previous = ()=>{\n        if (page > 1) {\n            setPage(page - 1);\n        }\n    };\n    const next = ()=>{\n        // Changed condition to check if page is less than total pages\n        if (data && page < data.pagination.total_pages) {\n            setPage(page + 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"EarthQuakes DATA on RAILS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Test for Frogmi creating an API on rails and a Front that consumes USGS data and persist\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainNav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Earthquakes List\",\n                        text: \"Full list of earthquakes on the last month.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Table, {\n                        bordered: true,\n                        hover: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"ID\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Magnitude\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Place\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Time\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Magnitude Type\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: pageData ? pageData.map((earthquake)=>{\n                                    const { id, attributes, links } = earthquake;\n                                    const { magnitude, place, time, mag_type, coodinates } = attributes;\n                                    const { longitude, latitude } = coodinates;\n                                    const { external_url } = links;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        onClick: ()=>{\n                                            router.push(\"/earthquake/\".concat(id));\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: id\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: magnitude\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: place\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: time\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: mag_type\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, id, true, {\n                                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 19\n                                    }, this);\n                                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            colSpan: \"5\",\n                                            children: \"Loading...\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Pagination, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Pagination.Prev, {\n                                onClick: previous\n                            }, void 0, false, {\n                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Pagination.Item, {\n                                children: page\n                            }, void 0, false, {\n                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Pagination_Table_react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Pagination.Next, {\n                                onClick: next\n                            }, void 0, false, {\n                                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franciscocastillo/WORKSPACE/GITHUB/earthquake_front/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Sw1xVICNmN7qoej5a+JkVSIOzKQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzswQ0FDMUIsOERBQUNwQix5R0FBVUEsQ0FBQ3NELElBQUk7MENBQUU1Qzs7Ozs7OzBDQUNsQiw4REFBQ1YseUdBQVVBLENBQUN1RCxJQUFJO2dDQUFDTixTQUFTNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDO0dBckZ3QmI7O1FBQ1BMLGtEQUFTQTtRQUtBQywyQ0FBTUE7OztLQU5SSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENvbnRhaW5lciwgUGFnaW5hdGlvbiwgVGFibGUgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gUmVtb3ZlZCB1bm5lY2Vzc2FyeSAndXNlJyBpbXBvcnRcbmltcG9ydCBNYWluTmF2IGZyb20gJ0AvY29tcG9uZW50cy9NYWluTmF2JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlRGF0YSwgc2V0UGFnZURhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIEluaXRpYWxpemVkIGFzIG51bGwgaW5zdGVhZCBvZiBlbXB0eSBhcnJheVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgaHR0cDovLzEyNy4wLjAuMTo0MDAwL2FwaS9mZWF0dXJlcz9wYWdlPSR7cGFnZX0mcGVyUGFnZT0yMGApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhOjpVc2VFZmZlY3QnLCBkYXRhKTtcbiAgICAgIHNldFBhZ2VEYXRhKGRhdGEuZGF0YSk7IC8vIFNldCBwYWdlRGF0YSB0byBkYXRhLmRhdGFcbiAgICB9XG4gIH0sIFtkYXRhLCBkYXRhLnBhZ2luYXRpb24udG90YWxfcGFnZXNdKTtcblxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2UocGFnZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIC8vIENoYW5nZWQgY29uZGl0aW9uIHRvIGNoZWNrIGlmIHBhZ2UgaXMgbGVzcyB0aGFuIHRvdGFsIHBhZ2VzXG4gICAgaWYgKGRhdGEgJiYgcGFnZSA8IGRhdGEucGFnaW5hdGlvbi50b3RhbF9wYWdlcykge1xuICAgICAgc2V0UGFnZShwYWdlICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RWFydGhRdWFrZXMgREFUQSBvbiBSQUlMUzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUZXN0IGZvciBGcm9nbWkgY3JlYXRpbmcgYW4gQVBJIG9uIHJhaWxzIGFuZCBhIEZyb250IHRoYXQgY29uc3VtZXMgVVNHUyBkYXRhIGFuZCBwZXJzaXN0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE1haW5OYXYgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxQYWdlSGVhZGVyIHRpdGxlPSdFYXJ0aHF1YWtlcyBMaXN0JyB0ZXh0PSdGdWxsIGxpc3Qgb2YgZWFydGhxdWFrZXMgb24gdGhlIGxhc3QgbW9udGguJyAvPlxuXG4gICAgICAgIDxUYWJsZSBib3JkZXJlZCBob3Zlcj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5NYWduaXR1ZGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+UGxhY2U8L3RoPlxuICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5NYWduaXR1ZGUgVHlwZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3BhZ2VEYXRhID8gKFxuICAgICAgICAgICAgICBwYWdlRGF0YS5tYXAoKGVhcnRocXVha2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBhdHRyaWJ1dGVzLCBsaW5rcyB9ID0gZWFydGhxdWFrZTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1hZ25pdHVkZSwgcGxhY2UsIHRpbWUsIG1hZ190eXBlLCBjb29kaW5hdGVzIH0gPSBhdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbG9uZ2l0dWRlLCBsYXRpdHVkZSB9ID0gY29vZGluYXRlcztcbiAgICAgICAgICAgICAgICBjb25zdCB7IGV4dGVybmFsX3VybCB9ID0gbGlua3M7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aWR9IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goYC9lYXJ0aHF1YWtlLyR7aWR9YCkgfX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57aWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnttYWduaXR1ZGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntwbGFjZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnttYWdfdHlwZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPSc1Jz5Mb2FkaW5nLi4uPC90ZD4gey8qIENoYW5nZWQgY29sU3BhbiB0byBtYXRjaCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgKi99XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG5cbiAgICAgICAgPFBhZ2luYXRpb24+XG4gICAgICAgICAgPFBhZ2luYXRpb24uUHJldiBvbkNsaWNrPXtwcmV2aW91c30gLz5cbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtPntwYWdlfTwvUGFnaW5hdGlvbi5JdGVtPlxuICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHQgb25DbGljaz17bmV4dH0gLz5cbiAgICAgICAgPC9QYWdpbmF0aW9uPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQ29udGFpbmVyIiwiUGFnaW5hdGlvbiIsIlRhYmxlIiwiUGFnZUhlYWRlciIsInVzZVJvdXRlciIsInVzZVNXUiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWFpbk5hdiIsIkhvbWUiLCJyb3V0ZXIiLCJwYWdlIiwic2V0UGFnZSIsInBhZ2VEYXRhIiwic2V0UGFnZURhdGEiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGFnaW5hdGlvbiIsInRvdGFsX3BhZ2VzIiwicHJldmlvdXMiLCJuZXh0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRleHQiLCJib3JkZXJlZCIsImhvdmVyIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJlYXJ0aHF1YWtlIiwiaWQiLCJhdHRyaWJ1dGVzIiwibGlua3MiLCJtYWduaXR1ZGUiLCJwbGFjZSIsInRpbWUiLCJtYWdfdHlwZSIsImNvb2RpbmF0ZXMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImV4dGVybmFsX3VybCIsIm9uQ2xpY2siLCJwdXNoIiwidGQiLCJjb2xTcGFuIiwiUHJldiIsIkl0ZW0iLCJOZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});