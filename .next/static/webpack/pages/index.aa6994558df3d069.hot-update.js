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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _comps_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/comps/Nav */ \"./comps/Nav.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const apiKey = \"1df61fa3f7f3a12a1b00e26422a7d3c6\";\n    const location = \"vancouver\";\n    const units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/forecast?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const grabWeather = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const fetchWeather = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url);\n        console.log(response);\n        console.log(response.data.list);\n        const arrayOfDays = [];\n        let weatherData = response.data.list.map((weather, index)=>{\n            console.log(parseInt(weather.dt_txt.substr(8, 2), 10));\n            let num = parseInt(weather.dt_txt.substr(8, 2), 10);\n            if (num !== arrayOfDays.find((element)=>element === num)) {\n                arrayOfDays.push(num);\n                console.log(\"here\");\n                console.log(response.data.list[index]);\n                var month = \"\";\n                var icon = \"\";\n                if (weather.dt_txt.substr(5, 2) == 1) {\n                    month = \"January\";\n                } else if (weather.dt_txt.substr(5, 2) == 2) {\n                    month = \"Febuary\";\n                } else if (weather.dt_txt.substr(5, 2) == 3) {\n                    month = \"March\";\n                } else if (weather.dt_txt.substr(5, 2) == 4) {\n                    month = \"April\";\n                } else if (weather.dt_txt.substr(5, 2) == 5) {\n                    month = \"May\";\n                } else if (weather.dt_txt.substr(5, 2) == 6) {\n                    month = \"June\";\n                } else if (weather.dt_txt.substr(5, 2) == 7) {\n                    month = \"July\";\n                } else if (weather.dt_txt.substr(5, 2) == 8) {\n                    month = \"August\";\n                } else if (weather.dt_txt.substr(5, 2) == 9) {\n                    month = \"September\";\n                } else if (weather.dt_txt.substr(5, 2) == 10) {\n                    month = \"October\";\n                } else if (weather.dt_txt.substr(5, 2) == 11) {\n                    month = \"November\";\n                } else if (weather.dt_txt.substr(5, 2) == 12) {\n                    month = \"December\";\n                }\n                if (weather.weather[0].main == \"Clouds\") {\n                    icon = \"/icons/broken-clouds.png\";\n                } else if (weather.weather[0].main == \"Clear\") {\n                    icon = \"/icons/clear-sky.png\";\n                } else if (weather.weather[0].main == \"Atmosphere\") {\n                    icon = \"/icons/mist.png\";\n                } else if (weather.weather[0].main == \"Rain\") {\n                    icon = \"/icons/rain.png\";\n                } else if (weather.weather[0].main == \"Drizzle\") {\n                    icon = \"/icons/shower-rain.png\";\n                } else if (weather.weather[0].main == \"Snow\") {\n                    icon = \"/icons/snow.png\";\n                } else if (weather.weather[0].main == \"Thunderstorm\") {\n                    icon = \"/icons/thunderstorm.png\";\n                }\n                var now = new Date(weather.dt_text);\n                var days = [\n                    \"Sunday\",\n                    \"Monday\",\n                    \"Tuesday\",\n                    \"Wednesday\",\n                    \"Thursday\",\n                    \"Friday\",\n                    \"Saturday\"\n                ];\n                var day = days[now.getDate];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Container, {\n                        gap: 2,\n                        justify: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                isHoverable: true,\n                                variant: \"bordered\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: icon,\n                                            alt: icon,\n                                            width: 180,\n                                            height: 180,\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                day,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                month,\n                                                \" \",\n                                                weather.dt_txt.substr(8, 2),\n                                                \", \",\n                                                weather.dt_txt.substr(0, 4)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                weather.main.temp.toFixed(1),\n                                                \"C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: weather.weather[0].main\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, this);\n            }\n        });\n        console.log(arrayOfDays);\n        setData(weatherData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (grabWeather.current === true) {\n            fetchWeather();\n        }\n        return ()=>{\n            grabWeather.current = true;\n        };\n    }, []);\n    const current = new Date();\n    const date = \"\".concat(current.getDate(), \"/\").concat(current.getMonth() + 1, \"/\").concat(current.getFullYear());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().top),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Vancouver BC Weather \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 34\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Last Updates: \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            data,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 166,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"EqIwynCmDLChzvatYTkUftpM4Yo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDZTtBQUNPO0FBQzNCO0FBQ0k7QUFDaUI7QUFHL0IsU0FBU1UsT0FBTzs7SUFFN0IsTUFBTUMsU0FBUTtJQUNkLE1BQU1DLFdBQVc7SUFDakIsTUFBTUMsUUFBUTtJQUNkLE1BQU1DLE1BQU0sc0RBQXdFRCxPQUFsQkQsVUFBUyxXQUF3QkQsT0FBZkUsT0FBTSxXQUFnQixPQUFQRjtJQUVuRyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBO0lBQ2hDLE1BQU1ZLGNBQWNiLDZDQUFNQSxDQUFDLEtBQUs7SUFFaEMsTUFBTWMsZUFBZSxVQUFZO1FBQy9CLE1BQU1DLFdBQVcsTUFBTWIsaURBQVMsQ0FBQ1E7UUFDakNPLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWkUsUUFBUUMsR0FBRyxDQUFDSCxTQUFTSixJQUFJLENBQUNRLElBQUk7UUFFOUIsTUFBTUMsY0FBYSxFQUFFO1FBQ3JCLElBQUlDLGNBQWNOLFNBQVNKLElBQUksQ0FBQ1EsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTtZQUMzRFAsUUFBUUMsR0FBRyxDQUFDTyxTQUFTRixRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLElBQUk7WUFDakQsSUFBSUMsTUFBTUgsU0FBU0YsUUFBUUcsTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRSxJQUFJO1lBRS9DLElBQUdDLFFBQVFSLFlBQVlTLElBQUksQ0FBQ0MsQ0FBQUEsVUFBV0EsWUFBWUYsTUFBTTtnQkFDdkRSLFlBQVlXLElBQUksQ0FBQ0g7Z0JBQ2pCWCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0osSUFBSSxDQUFDUSxJQUFJLENBQUNLLE1BQU07Z0JBQ3JDLElBQUlRLFFBQVE7Z0JBQ1osSUFBSUMsT0FBTztnQkFFWCxJQUFHVixRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDbENLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsQ0FBQztnQkFFRCxJQUFHVCxRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksVUFBVTtvQkFDdENELE9BQU87Z0JBQ1QsT0FBTyxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksU0FBUztvQkFDN0NELE9BQU87Z0JBQ1QsT0FBTSxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksY0FBYztvQkFDakRELE9BQU87Z0JBQ1QsT0FBTSxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksUUFBUTtvQkFDM0NELE9BQU87Z0JBQ1QsT0FBTSxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksV0FBVztvQkFDOUNELE9BQU87Z0JBQ1QsT0FBTSxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksUUFBUTtvQkFDM0NELE9BQU87Z0JBQ1QsT0FBTSxJQUFJVixRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksZ0JBQWdCO29CQUNuREQsT0FBTztnQkFDVCxDQUFDO2dCQUVELElBQUlFLE1BQU0sSUFBSUMsS0FBS2IsUUFBUWMsT0FBTztnQkFFbEMsSUFBSUMsT0FBTztvQkFBQztvQkFBVTtvQkFBVTtvQkFBVztvQkFBYTtvQkFBVztvQkFBUztpQkFBVztnQkFDdkYsSUFBSUMsTUFBTUQsSUFBSSxDQUFDSCxJQUFJSyxPQUFPLENBQUM7Z0JBRTNCLHFCQUNFLDhEQUFDQzs4QkFDQyw0RUFBQ3BDLDZEQUFjO3dCQUFDc0MsS0FBSzt3QkFBR0MsU0FBUTtrQ0FDOUIsNEVBQUN2QyxtREFBSUE7c0NBQ1AsNEVBQUNELG1EQUFJQTtnQ0FBQ3lDLFdBQVc7Z0NBQUNDLFNBQVE7MENBQ3hCLDRFQUFDMUMsd0RBQVM7O3NEQUNaLDhEQUFDUCxtREFBS0E7NENBQ05tRCxLQUFLZjs0Q0FDTGdCLEtBQUtoQjs0Q0FDTGlCLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JDLFFBQVE7Ozs7OztzREFFViw4REFBQ0M7O2dEQUNFZDtnREFBSTs4REFBQyw4REFBQ2U7Ozs7O2dEQUFJO2dEQUFFdEI7Z0RBQU07Z0RBQUVULFFBQVFHLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEdBQUU7Z0RBQUc7Z0RBQUdKLFFBQVFHLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEdBQUU7Ozs7Ozs7c0RBRTdFLDhEQUFDYzs7Z0RBQUtsQixRQUFRVyxJQUFJLENBQUNxQixJQUFJLENBQUNDLE9BQU8sQ0FBQztnREFBRzs7Ozs7OztzREFDbkMsOERBQUNmO3NEQUFLbEIsUUFBUUEsT0FBTyxDQUFDLEVBQUUsQ0FBQ1csSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQWhCbkJWOzs7OztZQXVCZCxDQUFDO1FBQ0g7UUFDQVAsUUFBUUMsR0FBRyxDQUFDRTtRQUNaUixRQUFRUztJQUNWO0lBRUF0QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBR2MsWUFBWTRDLE9BQU8sS0FBSyxJQUFJLEVBQUc7WUFDaEMzQztRQUNGLENBQUM7UUFFRCxPQUFPLElBQU07WUFDWEQsWUFBWTRDLE9BQU8sR0FBRyxJQUFJO1FBQzVCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsVUFBVSxJQUFJckI7SUFDcEIsTUFBTXNCLE9BQU8sR0FBd0JELE9BQXJCQSxRQUFRakIsT0FBTyxJQUFHLEtBQTJCaUIsT0FBeEJBLFFBQVFFLFFBQVEsS0FBRyxHQUFFLEtBQXlCLE9BQXRCRixRQUFRRyxXQUFXO0lBS2hGLHFCQUNFOzswQkFDRSw4REFBQ3pELGtEQUFHQTs7Ozs7MEJBQ0osOERBQUMrQjtnQkFBSzJCLFdBQVcvRCxxRUFBVzs7a0NBQzFCLDhEQUFDMkM7d0JBQUlvQixXQUFXL0Qsb0VBQVU7a0NBQ3hCLDRFQUFDaUU7O2dDQUFHOzhDQUNtQiw4REFBQ1Q7Ozs7OzhDQUN0Qiw4REFBQ1U7O3dDQUFHO3dDQUFlTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWNyQiw4REFBQ0o7Ozs7O2tDQUVILDhEQUFDYjt3QkFBSW9CLFdBQVcvRCxxRUFBVzs7NEJBQ3hCYTswQ0FFRCw4REFBQ3VEO2dDQUNDQyxNQUFLO2dDQUNMTixXQUFXL0QscUVBQVc7Z0NBQ3RCdUUsUUFBTztnQ0FDUEMsS0FBSTs7Ozs7OzBDQUtOLDhEQUFDSjtnQ0FDQ0MsTUFBSztnQ0FDTE4sV0FBVy9ELHFFQUFXO2dDQUN0QnVFLFFBQU87Z0NBQ1BDLEtBQUk7Ozs7OzswQ0FLTiw4REFBQ0o7Z0NBQ0NDLE1BQUs7Z0NBQ0xOLFdBQVcvRCxxRUFBVztnQ0FDdEJ1RSxRQUFPO2dDQUNQQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQixDQUFDO0dBaEx1QmhFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCAsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBOYXYgZnJvbSAnQC9jb21wcy9OYXYnXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBhcGlLZXkgPVwiMWRmNjFmYTNmN2YzYTEyYTFiMDBlMjY0MjJhN2QzYzZcIjtcbiAgY29uc3QgbG9jYXRpb24gPSBcInZhbmNvdXZlclwiO1xuICBjb25zdCB1bml0cyA9IFwibWV0cmljXCI7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IGdyYWJXZWF0aGVyID0gdXNlUmVmKGZhbHNlKTtcbiAgXG4gIGNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5saXN0KTtcblxuICAgIGNvbnN0IGFycmF5T2ZEYXlzID1bXTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSByZXNwb25zZS5kYXRhLmxpc3QubWFwKCh3ZWF0aGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocGFyc2VJbnQod2VhdGhlci5kdF90eHQuc3Vic3RyKDgsMiksIDEwKSk7XG4gICAgICBsZXQgbnVtID0gcGFyc2VJbnQod2VhdGhlci5kdF90eHQuc3Vic3RyKDgsMiksIDEwKTtcbiAgXG4gICAgICBpZihudW0gIT09IGFycmF5T2ZEYXlzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50ID09PSBudW0pKSB7XG4gICAgICAgIGFycmF5T2ZEYXlzLnB1c2gobnVtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpOyBcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5saXN0W2luZGV4XSlcbiAgICAgICAgdmFyIG1vbnRoID0gJydcbiAgICAgICAgdmFyIGljb24gPSAnJ1xuICBcbiAgICAgICAgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gMSkge1xuICAgICAgICAgIG1vbnRoID0gXCJKYW51YXJ5XCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDIpIHtcbiAgICAgICAgICBtb250aCA9IFwiRmVidWFyeVwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSAzKSB7XG4gICAgICAgICAgbW9udGggPSBcIk1hcmNoXCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDQpIHtcbiAgICAgICAgICBtb250aCA9IFwiQXByaWxcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gNSkge1xuICAgICAgICAgIG1vbnRoID0gXCJNYXlcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gNikge1xuICAgICAgICAgIG1vbnRoID0gXCJKdW5lXCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDcpIHtcbiAgICAgICAgICBtb250aCA9IFwiSnVseVwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSA4KSB7XG4gICAgICAgICAgbW9udGggPSBcIkF1Z3VzdFwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSA5KSB7XG4gICAgICAgICAgbW9udGggPSBcIlNlcHRlbWJlclwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSAxMCkge1xuICAgICAgICAgIG1vbnRoID0gXCJPY3RvYmVyXCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDExKSB7XG4gICAgICAgICAgbW9udGggPSBcIk5vdmVtYmVyXCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDEyKSB7XG4gICAgICAgICAgbW9udGggPSBcIkRlY2VtYmVyXCJcbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYod2VhdGhlci53ZWF0aGVyWzBdLm1haW4gPT0gJ0Nsb3VkcycpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy9icm9rZW4tY2xvdWRzLnBuZydcbiAgICAgICAgfSBlbHNlIGlmICh3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbiA9PSAnQ2xlYXInKSB7XG4gICAgICAgICAgaWNvbiA9ICcvaWNvbnMvY2xlYXItc2t5LnBuZydcbiAgICAgICAgfWVsc2UgaWYgKHdlYXRoZXIud2VhdGhlclswXS5tYWluID09ICdBdG1vc3BoZXJlJykge1xuICAgICAgICAgIGljb24gPSAnL2ljb25zL21pc3QucG5nJ1xuICAgICAgICB9ZWxzZSBpZiAod2VhdGhlci53ZWF0aGVyWzBdLm1haW4gPT0gJ1JhaW4nKSB7XG4gICAgICAgICAgaWNvbiA9ICcvaWNvbnMvcmFpbi5wbmcnXG4gICAgICAgIH1lbHNlIGlmICh3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbiA9PSAnRHJpenpsZScpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy9zaG93ZXItcmFpbi5wbmcnXG4gICAgICAgIH1lbHNlIGlmICh3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbiA9PSAnU25vdycpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy9zbm93LnBuZydcbiAgICAgICAgfWVsc2UgaWYgKHdlYXRoZXIud2VhdGhlclswXS5tYWluID09ICdUaHVuZGVyc3Rvcm0nKSB7XG4gICAgICAgICAgaWNvbiA9ICcvaWNvbnMvdGh1bmRlcnN0b3JtLnBuZydcbiAgICAgICAgfVxuICBcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKHdlYXRoZXIuZHRfdGV4dCk7XG5cbiAgICAgICAgdmFyIGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCdGcmlkYXknLCdTYXR1cmRheSddXG4gICAgICAgIHZhciBkYXkgPSBkYXlzW25vdy5nZXREYXRlXTtcbiAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxHcmlkLkNvbnRhaW5lciBnYXA9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8Q2FyZCBpc0hvdmVyYWJsZSB2YXJpYW50PVwiYm9yZGVyZWRcIj5cbiAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHNyYz17aWNvbn1cbiAgICAgICAgICAgIGFsdD17aWNvbn1cbiAgICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE4MH1cbiAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2RheX0gPGJyLz4ge21vbnRofSB7d2VhdGhlci5kdF90eHQuc3Vic3RyKDgsMil9LCB7d2VhdGhlci5kdF90eHQuc3Vic3RyKDAsNCl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXY+e3dlYXRoZXIubWFpbi50ZW1wLnRvRml4ZWQoMSl9QzwvZGl2PlxuICAgICAgICAgIDxkaXY+e3dlYXRoZXIud2VhdGhlclswXS5tYWlufTwvZGl2PlxuICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkLkNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coYXJyYXlPZkRheXMpO1xuICAgIHNldERhdGEod2VhdGhlckRhdGEpO1xuICB9XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGdyYWJXZWF0aGVyLmN1cnJlbnQgPT09IHRydWUgKSB7XG4gICAgICBmZXRjaFdlYXRoZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZ3JhYldlYXRoZXIuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRhdGUgPSBgJHtjdXJyZW50LmdldERhdGUoKX0vJHtjdXJyZW50LmdldE1vbnRoKCkrMX0vJHtjdXJyZW50LmdldEZ1bGxZZWFyKCl9YDtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2Lz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcH0+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgVmFuY291dmVyIEJDIFdlYXRoZXIgPGJyLz5cbiAgICAgICAgICAgIDxoMz5MYXN0IFVwZGF0ZXM6IHtkYXRlfTwvaDM+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvU2t5d2F0Y2gucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAvPlxuICBcbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGJyLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhfVxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgXG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJheGlvcyIsIk5hdiIsIkNhcmQiLCJHcmlkIiwiSG9tZSIsImFwaUtleSIsImxvY2F0aW9uIiwidW5pdHMiLCJ1cmwiLCJkYXRhIiwic2V0RGF0YSIsImdyYWJXZWF0aGVyIiwiZmV0Y2hXZWF0aGVyIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImFycmF5T2ZEYXlzIiwid2VhdGhlckRhdGEiLCJtYXAiLCJ3ZWF0aGVyIiwiaW5kZXgiLCJwYXJzZUludCIsImR0X3R4dCIsInN1YnN0ciIsIm51bSIsImZpbmQiLCJlbGVtZW50IiwicHVzaCIsIm1vbnRoIiwiaWNvbiIsIm1haW4iLCJub3ciLCJEYXRlIiwiZHRfdGV4dCIsImRheXMiLCJkYXkiLCJnZXREYXRlIiwiZGl2IiwiQ29udGFpbmVyIiwiZ2FwIiwianVzdGlmeSIsImlzSG92ZXJhYmxlIiwidmFyaWFudCIsIkJvZHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwicCIsImJyIiwidGVtcCIsInRvRml4ZWQiLCJjdXJyZW50IiwiZGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJjbGFzc05hbWUiLCJ0b3AiLCJoMSIsImgzIiwiZ3JpZCIsImEiLCJocmVmIiwiY2FyZCIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});