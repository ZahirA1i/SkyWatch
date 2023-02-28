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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _comps_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/comps/Nav */ \"./comps/Nav.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const apiKey = \"1df61fa3f7f3a12a1b00e26422a7d3c6\";\n    const location = \"vancouver\";\n    const units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/forecast?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const grabWeather = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);\n    const fetchWeather = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url);\n        console.log(response);\n        console.log(response.data.list);\n        const arrayOfDays = [];\n        let weatherData = response.data.list.map((weather, index)=>{\n            console.log(parseInt(weather.dt_txt.substr(8, 2), 10));\n            let num = parseInt(weather.dt_txt.substr(8, 2), 10);\n            if (num !== arrayOfDays.find((element)=>element === num)) {\n                arrayOfDays.push(num);\n                console.log(\"here\");\n                console.log(response.data.list[index]);\n                var month = \"\";\n                var icon = \"\";\n                if (weather.dt_txt.substr(5, 2) == 1) {\n                    month = \"January\";\n                } else if (weather.dt_txt.substr(5, 2) == 2) {\n                    month = \"Febuary\";\n                } else if (weather.dt_txt.substr(5, 2) == 3) {\n                    month = \"March\";\n                } else if (weather.dt_txt.substr(5, 2) == 4) {\n                    month = \"April\";\n                } else if (weather.dt_txt.substr(5, 2) == 5) {\n                    month = \"May\";\n                } else if (weather.dt_txt.substr(5, 2) == 6) {\n                    month = \"June\";\n                } else if (weather.dt_txt.substr(5, 2) == 7) {\n                    month = \"July\";\n                } else if (weather.dt_txt.substr(5, 2) == 8) {\n                    month = \"August\";\n                } else if (weather.dt_txt.substr(5, 2) == 9) {\n                    month = \"September\";\n                } else if (weather.dt_txt.substr(5, 2) == 10) {\n                    month = \"October\";\n                } else if (weather.dt_txt.substr(5, 2) == 11) {\n                    month = \"November\";\n                } else if (weather.dt_txt.substr(5, 2) == 12) {\n                    month = \"December\";\n                }\n                if (weather.weather[0].main == \"Clouds\") {\n                    icon = \"/icons/broken-clouds.png\";\n                } else if (weather.weather[0].main == \"Clear\") {\n                    icon = \"/icons/clear-sky.png\";\n                } else if (weather.weather[0].main == \"Atmosphere\") {\n                    icon = \"/icons/mist.png\";\n                } else if (weather.weather[0].main == \"Rain\") {\n                    icon = \"/icons/rain.png\";\n                } else if (weather.weather[0].main == \"Drizzle\") {\n                    icon = \"/icons/shower-rain.png\";\n                } else if (weather.weather[0].main == \"Snow\") {\n                    icon = \"/icons/snow.png\";\n                } else if (weather.weather[0].main == \"Thunderstorm\") {\n                    icon = \"/icons/thunderstorm.png\";\n                }\n                var now = new Date(weather.dt_text);\n                var days = [\n                    \"Sunday\",\n                    \"Monday\",\n                    \"Tuesday\",\n                    \"Wednesday\",\n                    \"Thursday\",\n                    \"Friday\",\n                    \"Saturday\"\n                ];\n                var day = days[now.getDate];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Container, {\n                        gap: 2,\n                        justify: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                isHoverable: true,\n                                variant: \"bordered\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: icon,\n                                            alt: icon,\n                                            width: 180,\n                                            height: 180,\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                day,\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \" \",\n                                                month,\n                                                \" \",\n                                                weather.dt_txt.substr(8, 2),\n                                                \", \",\n                                                weather.dt_txt.substr(0, 4)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                weather.main.temp.toFixed(1),\n                                                \"C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: weather.weather[0].main\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, this);\n            }\n        });\n        console.log(arrayOfDays);\n        setData(weatherData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (grabWeather.current === true) {\n            fetchWeather();\n        }\n        return ()=>{\n            grabWeather.current = true;\n        };\n    }, []);\n    const current = new Date();\n    const date = \"\".concat(current.getDate(), \"/\").concat(current.getMonth() + 1, \"/\").concat(current.getFullYear());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().top),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Vancouver BC Weather \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 34\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Last Updates: \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            data,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 156,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                                lineNumber: 174,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zahirali/Desktop/SkyWatch/pages/index.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"EqIwynCmDLChzvatYTkUftpM4Yo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDZTtBQUNPO0FBQzNCO0FBQ0k7QUFDaUI7QUFHL0IsU0FBU1UsT0FBTzs7SUFFN0IsTUFBTUMsU0FBUTtJQUNkLE1BQU1DLFdBQVc7SUFDakIsTUFBTUMsUUFBUTtJQUNkLE1BQU1DLE1BQU0sc0RBQXdFRCxPQUFsQkQsVUFBUyxXQUF3QkQsT0FBZkUsT0FBTSxXQUFnQixPQUFQRjtJQUVuRyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBO0lBQ2hDLE1BQU1ZLGNBQWNiLDZDQUFNQSxDQUFDLEtBQUs7SUFFaEMsTUFBTWMsZUFBZSxVQUFZO1FBQy9CLE1BQU1DLFdBQVcsTUFBTWIsaURBQVMsQ0FBQ1E7UUFDakNPLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWkUsUUFBUUMsR0FBRyxDQUFDSCxTQUFTSixJQUFJLENBQUNRLElBQUk7UUFFOUIsTUFBTUMsY0FBYSxFQUFFO1FBQ3JCLElBQUlDLGNBQWNOLFNBQVNKLElBQUksQ0FBQ1EsSUFBSSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTtZQUMzRFAsUUFBUUMsR0FBRyxDQUFDTyxTQUFTRixRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLElBQUk7WUFDakQsSUFBSUMsTUFBTUgsU0FBU0YsUUFBUUcsTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRSxJQUFJO1lBRS9DLElBQUdDLFFBQVFSLFlBQVlTLElBQUksQ0FBQ0MsQ0FBQUEsVUFBV0EsWUFBWUYsTUFBTTtnQkFDdkRSLFlBQVlXLElBQUksQ0FBQ0g7Z0JBQ2pCWCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0osSUFBSSxDQUFDUSxJQUFJLENBQUNLLE1BQU07Z0JBQ3JDLElBQUlRLFFBQVE7Z0JBQ1osSUFBSUMsT0FBTztnQkFFWCxJQUFHVixRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDbENLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sR0FBRztvQkFDekNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsT0FBTyxJQUFHVCxRQUFRRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sSUFBSTtvQkFDMUNLLFFBQVE7Z0JBQ1YsQ0FBQztnQkFFRCxJQUFHVCxRQUFRQSxPQUFPLENBQUMsRUFBRSxDQUFDVyxJQUFJLElBQUksVUFBVTtvQkFDdENE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O2dDQUNQQyxLQUFJOzs7Ozs7MENBS04sOERBQUNKO2dDQUNDQyxNQUFLO2dDQUNMTixXQUFXL0QscUVBQVc7Z0NBQ3RCdUUsUUFBTztnQ0FDUEMsS0FBSTs7Ozs7OzBDQUtOLDhEQUFDSjtnQ0FDQ0MsTUFBSztnQ0FDTE4sV0FBVy9ELHFFQUFXO2dDQUN0QnVFLFFBQU87Z0NBQ1BDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hCLENBQUM7R0EvS3VCaEU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0ICwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IE5hdiBmcm9tICdAL2NvbXBzL05hdidcbmltcG9ydCB7IENhcmQsIEdyaWQgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGFwaUtleSA9XCIxZGY2MWZhM2Y3ZjNhMTJhMWIwMGUyNjQyMmE3ZDNjNlwiO1xuICBjb25zdCBsb2NhdGlvbiA9IFwidmFuY291dmVyXCI7XG4gIGNvbnN0IHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7bG9jYXRpb259JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWA7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgZ3JhYldlYXRoZXIgPSB1c2VSZWYoZmFsc2UpO1xuICBcbiAgY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmxpc3QpO1xuXG4gICAgY29uc3QgYXJyYXlPZkRheXMgPVtdO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IHJlc3BvbnNlLmRhdGEubGlzdC5tYXAoKHdlYXRoZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwYXJzZUludCh3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoOCwyKSwgMTApKTtcbiAgICAgIGxldCBudW0gPSBwYXJzZUludCh3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoOCwyKSwgMTApO1xuICBcbiAgICAgIGlmKG51bSAhPT0gYXJyYXlPZkRheXMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQgPT09IG51bSkpIHtcbiAgICAgICAgYXJyYXlPZkRheXMucHVzaChudW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7IFxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmxpc3RbaW5kZXhdKVxuICAgICAgICB2YXIgbW9udGggPSAnJ1xuICAgICAgICB2YXIgaWNvbiA9ICcnXG4gIFxuICAgICAgICBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSAxKSB7XG4gICAgICAgICAgbW9udGggPSBcIkphbnVhcnlcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gMikge1xuICAgICAgICAgIG1vbnRoID0gXCJGZWJ1YXJ5XCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDMpIHtcbiAgICAgICAgICBtb250aCA9IFwiTWFyY2hcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gNCkge1xuICAgICAgICAgIG1vbnRoID0gXCJBcHJpbFwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSA1KSB7XG4gICAgICAgICAgbW9udGggPSBcIk1heVwiXG4gICAgICAgIH0gZWxzZSBpZih3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoNSwyKSA9PSA2KSB7XG4gICAgICAgICAgbW9udGggPSBcIkp1bmVcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gNykge1xuICAgICAgICAgIG1vbnRoID0gXCJKdWx5XCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDgpIHtcbiAgICAgICAgICBtb250aCA9IFwiQXVndXN0XCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDkpIHtcbiAgICAgICAgICBtb250aCA9IFwiU2VwdGVtYmVyXCJcbiAgICAgICAgfSBlbHNlIGlmKHdlYXRoZXIuZHRfdHh0LnN1YnN0cig1LDIpID09IDEwKSB7XG4gICAgICAgICAgbW9udGggPSBcIk9jdG9iZXJcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gMTEpIHtcbiAgICAgICAgICBtb250aCA9IFwiTm92ZW1iZXJcIlxuICAgICAgICB9IGVsc2UgaWYod2VhdGhlci5kdF90eHQuc3Vic3RyKDUsMikgPT0gMTIpIHtcbiAgICAgICAgICBtb250aCA9IFwiRGVjZW1iZXJcIlxuICAgICAgICB9XG4gIFxuICAgICAgICBpZih3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbiA9PSAnQ2xvdWRzJykge1xuICAgICAgICAgIGljb24gPSAnL2ljb25zL2Jyb2tlbi1jbG91ZHMucG5nJ1xuICAgICAgICB9IGVsc2UgaWYgKHdlYXRoZXIud2VhdGhlclswXS5tYWluID09ICdDbGVhcicpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy9jbGVhci1za3kucG5nJ1xuICAgICAgICB9ZWxzZSBpZiAod2VhdGhlci53ZWF0aGVyWzBdLm1haW4gPT0gJ0F0bW9zcGhlcmUnKSB7XG4gICAgICAgICAgaWNvbiA9ICcvaWNvbnMvbWlzdC5wbmcnXG4gICAgICAgIH1lbHNlIGlmICh3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbiA9PSAnUmFpbicpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy9yYWluLnBuZydcbiAgICAgICAgfWVsc2UgaWYgKHdlYXRoZXIud2VhdGhlclswXS5tYWluID09ICdEcml6emxlJykge1xuICAgICAgICAgIGljb24gPSAnL2ljb25zL3Nob3dlci1yYWluLnBuZydcbiAgICAgICAgfWVsc2UgaWYgKHdlYXRoZXIud2VhdGhlclswXS5tYWluID09ICdTbm93Jykge1xuICAgICAgICAgIGljb24gPSAnL2ljb25zL3Nub3cucG5nJ1xuICAgICAgICB9ZWxzZSBpZiAod2VhdGhlci53ZWF0aGVyWzBdLm1haW4gPT0gJ1RodW5kZXJzdG9ybScpIHtcbiAgICAgICAgICBpY29uID0gJy9pY29ucy90aHVuZGVyc3Rvcm0ucG5nJ1xuICAgICAgICB9XG4gIFxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUod2VhdGhlci5kdF90ZXh0KTtcblxuICAgICAgICB2YXIgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5J11cbiAgICAgICAgdmFyIGRheSA9IGRheXNbbm93LmdldERhdGVdO1xuICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPEdyaWQuQ29udGFpbmVyIGdhcD17Mn0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxDYXJkIGlzSG92ZXJhYmxlIHZhcmlhbnQ9XCJib3JkZXJlZFwiPlxuICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgc3JjPXtpY29ufVxuICAgICAgICAgICAgYWx0PXtpY29ufVxuICAgICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICAgIGhlaWdodD17MTgwfVxuICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7ZGF5fSA8YnIvPiB7bW9udGh9IHt3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoOCwyKX0sIHt3ZWF0aGVyLmR0X3R4dC5zdWJzdHIoMCw0KX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdj57d2VhdGhlci5tYWluLnRlbXAudG9GaXhlZCgxKX1DPC9kaXY+XG4gICAgICAgICAgPGRpdj57d2VhdGhlci53ZWF0aGVyWzBdLm1haW59PC9kaXY+XG4gICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQuQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mRGF5cyk7XG4gICAgc2V0RGF0YSh3ZWF0aGVyRGF0YSk7XG4gIH1cbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZ3JhYldlYXRoZXIuY3VycmVudCA9PT0gdHJ1ZSApIHtcbiAgICAgIGZldGNoV2VhdGhlcigpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBncmFiV2VhdGhlci5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF0ZSA9IGAke2N1cnJlbnQuZ2V0RGF0ZSgpfS8ke2N1cnJlbnQuZ2V0TW9udGgoKSsxfS8ke2N1cnJlbnQuZ2V0RnVsbFllYXIoKX1gO1xuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBWYW5jb3V2ZXIgQkMgV2VhdGhlciA8YnIvPlxuICAgICAgICAgICAgPGgzPkxhc3QgVXBkYXRlczoge2RhdGV9PC9oMz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9Ta3l3YXRjaC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gIFxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhfVxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgXG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJheGlvcyIsIk5hdiIsIkNhcmQiLCJHcmlkIiwiSG9tZSIsImFwaUtleSIsImxvY2F0aW9uIiwidW5pdHMiLCJ1cmwiLCJkYXRhIiwic2V0RGF0YSIsImdyYWJXZWF0aGVyIiwiZmV0Y2hXZWF0aGVyIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImFycmF5T2ZEYXlzIiwid2VhdGhlckRhdGEiLCJtYXAiLCJ3ZWF0aGVyIiwiaW5kZXgiLCJwYXJzZUludCIsImR0X3R4dCIsInN1YnN0ciIsIm51bSIsImZpbmQiLCJlbGVtZW50IiwicHVzaCIsIm1vbnRoIiwiaWNvbiIsIm1haW4iLCJub3ciLCJEYXRlIiwiZHRfdGV4dCIsImRheXMiLCJkYXkiLCJnZXREYXRlIiwiZGl2IiwiQ29udGFpbmVyIiwiZ2FwIiwianVzdGlmeSIsImlzSG92ZXJhYmxlIiwidmFyaWFudCIsIkJvZHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInByaW9yaXR5IiwicCIsImJyIiwidGVtcCIsInRvRml4ZWQiLCJjdXJyZW50IiwiZGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJjbGFzc05hbWUiLCJ0b3AiLCJoMSIsImgzIiwiZ3JpZCIsImEiLCJocmVmIiwiY2FyZCIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});