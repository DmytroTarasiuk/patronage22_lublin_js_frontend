webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PopularProducts/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/PopularProducts/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MainButton */ \"./src/components/MainButton/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/eszarowska/Desktop/patronage22_lublin_js_frontend/src/components/PopularProducts/index.tsx\";\n\n\n\n\n\n\n// import products from \"../../pages/api/products\";\nvar products = [{\n  \"id\": 1,\n  \"title\": \"Pierwszy produkt\",\n  \"price\": 15000,\n  \"description\": \"Opis proiduktu\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 2,\n  \"title\": \"Drugi produkt\",\n  \"price\": 15555,\n  \"description\": \"First Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}, {\n  \"id\": 3,\n  \"title\": \"Trzeci produkt\",\n  \"price\": 15551412,\n  \"description\": \"Sec Prod\",\n  \"photos\": \"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80\"\n}];\nvar Underline = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"styled\"])('div')(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    backgroundColor: theme.palette.primary.main,\n    width: '150px',\n    height: '5px',\n    textAlign: 'center',\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    borderRadius: '10%',\n    marginTop: '5px'\n  };\n});\n\nfunction PopularProducts(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sx: {\n      marginTop: 10,\n      flexGrow: 1\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      variant: \"h4\",\n      textAlign: 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: \"Popular Products\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Underline, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        flexGrow: 1\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        container: true,\n        spacing: {\n          xs: 2,\n          md: 3\n        },\n        columns: {\n          xs: 2,\n          md: 12\n        },\n        children: Array.from(Array(3)).map(function (_, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            item: true,\n            xs: 2,\n            sm: 4,\n            md: 4,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Item, {\n              children: \"xs=2\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 13\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 2\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Offers\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, this), products && products.map(function (product) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: product.photos,\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 17\n            }, _this)\n          }, \"product-\".concat(product.id), false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: product.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 19\n          }, _this)]\n        }, void 0, true);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      sx: {\n        marginTop: 3,\n        textAlign: 'center'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/products\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MainButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: \"ALL PRODUCTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, this);\n} // export async function getServerSideProps() {\n//     const response = await fetch('http://localhost:3000/api/products');\n//     const data = await response.json();\n//     return {\n//       props: {\n//         products: data,\n//       }\n//     }\n//   }\n\n\n_c = PopularProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularProducts);\n\nvar _c;\n\n$RefreshReg$(_c, \"PopularProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9wdWxhclByb2R1Y3RzL2luZGV4LnRzeD9lNjkzIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiVW5kZXJsaW5lIiwic3R5bGVkIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJ3aWR0aCIsImhlaWdodCIsInRleHRBbGlnbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIlBvcHVsYXJQcm9kdWN0cyIsInByb3BzIiwiZmxleEdyb3ciLCJ4cyIsIm1kIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiXyIsImluZGV4IiwicHJvZHVjdCIsInBob3RvcyIsImlkIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUlBLElBQU1BLFFBQVEsR0FDZCxDQUNJO0FBQUUsUUFBTSxDQUFSO0FBQVcsV0FBUyxrQkFBcEI7QUFBd0MsV0FBUyxLQUFqRDtBQUF3RCxpQkFBZSxnQkFBdkU7QUFDQSxZQUFVO0FBRFYsQ0FESixFQUtJO0FBQUUsUUFBTSxDQUFSO0FBQVcsV0FBUyxlQUFwQjtBQUFxQyxXQUFTLEtBQTlDO0FBQXFELGlCQUFlLFlBQXBFO0FBQ0EsWUFBVTtBQURWLENBTEosRUFTSTtBQUFFLFFBQU0sQ0FBUjtBQUFXLFdBQVMsZ0JBQXBCO0FBQXNDLFdBQVMsUUFBL0M7QUFBeUQsaUJBQWUsVUFBeEU7QUFDQSxZQUFVO0FBRFYsQ0FUSixDQURBO0FBZUEsSUFBTUMsU0FBUyxHQUFHQyxtRUFBTSxDQUFDLEtBQUQsQ0FBTixDQUFjO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZ0I7QUFDNUNDLG1CQUFlLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURLO0FBRTVDQyxT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QTtBQUNBO0FBQ0E7QUFDQTs7O0tBekVTSyxlO0FBMkVNQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BvcHVsYXJQcm9kdWN0cy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIi4uL01haW5CdXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcbmltcG9ydCB7IGJveFNpemluZyB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi9Qcm9kdWN0SXRlbVwiO1xuaW1wb3J0IHsgS2V5LCBSZWFjdENoaWxkLCBSZWFjdEZyYWdtZW50LCBSZWFjdFBvcnRhbCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvcHJvZHVjdHNcIjtcblxuXG5cbmNvbnN0IHByb2R1Y3RzPVxuW1xuICAgIHsgXCJpZFwiOiAxLCBcInRpdGxlXCI6IFwiUGllcndzenkgcHJvZHVrdFwiLCBcInByaWNlXCI6IDE1MDAwLCBcImRlc2NyaXB0aW9uXCI6IFwiT3BpcyBwcm9pZHVrdHVcIiwgXG4gICAgXCJwaG90b3NcIjogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ0MTk4NjMwMDkxNy02NDY3NGJkNjAwZDg/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMyNzAmcT04MFwiIH1cbiAgICAsXG4gICAgXG4gICAgeyBcImlkXCI6IDIsIFwidGl0bGVcIjogXCJEcnVnaSBwcm9kdWt0XCIsIFwicHJpY2VcIjogMTU1NTUsIFwiZGVzY3JpcHRpb25cIjogXCJGaXJzdCBQcm9kXCIsIFxuICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIiB9XG4gICAgLFxuICAgIFxuICAgIHsgXCJpZFwiOiAzLCBcInRpdGxlXCI6IFwiVHJ6ZWNpIHByb2R1a3RcIiwgXCJwcmljZVwiOiAxNTU1MTQxMiwgXCJkZXNjcmlwdGlvblwiOiBcIlNlYyBQcm9kXCIsIFxuICAgIFwicGhvdG9zXCI6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NDE5ODYzMDA5MTctNjQ2NzRiZDYwMGQ4P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcwJnE9ODBcIn1cblxuXVxuXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB3aWR0aDogJzE1MHB4JyxcbiAgICBoZWlnaHQ6ICc1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAlJyxcbiAgICBtYXJnaW5Ub3A6ICc1cHgnXG59KSk7XG5cbmZ1bmN0aW9uIFBvcHVsYXJQcm9kdWN0cyhwcm9wczphbnkpe1xuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IDEwLCBmbGV4R3JvdzogMSB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgICA8Qm94PlBvcHVsYXIgUHJvZHVjdHM8L0JveD5cbiAgICAgICAgICAgICAgICA8VW5kZXJsaW5lIC8+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cblxuICAgICAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90b3M9e3Byb2R1Y3QucGhvdG9zfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD4gKi99XG4gICAgICAgICAgICB7LyogPHVsPlxuICAgICAge3Byb3BzLnByb2R1Y3RzICYmIHByb3BzLnByb2R1Y3RzLm1hcCgocHJvZHVjdDogeyBpZDphbnksIHRpdGxlOmFueSB9KSA9PlxuICAgICAgICA8UHJvZHVjdEl0ZW1cbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgIDwvUHJvZHVjdEl0ZW0+XG4gICAgICApfVxuICAgIDwvdWw+ICovfVxuIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX0gY29sdW1ucz17eyB4czogMiwgIG1kOiAxMiB9fT5cbiAgICAgICAge0FycmF5LmZyb20oQXJyYXkoMykpLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17NH0gbWQ9ezR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPEl0ZW0+eHM9MjwvSXRlbT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuXG4gICAgPGRpdj5cbiAgICAgIDxoMT5PZmZlcnM8L2gxPlxuICAgICAgICB7cHJvZHVjdHMgJiYgcHJvZHVjdHMubWFwKCggcHJvZHVjdDogeyBpZDogYW55OyBwaG90b3M6IGFueTsgZGVzY3JpcHRpb246IGFueTsgfSkgPT5cbiAgICAgICAgICA8PjxkaXYga2V5PXtgcHJvZHVjdC0ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QucGhvdG9zfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+PHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPjwvPlxuICAgICAgIFxuICAgICAgICApfVxuICBcbiAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IDMsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFMTCBQUk9EVUNUU1xuICAgICAgICAgICAgICAgICAgICA8L01haW5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHMnKTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICBcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgcHJvZHVjdHM6IGRhdGEsXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJQcm9kdWN0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PopularProducts/index.tsx\n");

/***/ })

})