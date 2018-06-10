/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../core/lib/index.js":
/*!******************************************************************************!*\
  !*** /Users/antony/Documents/Code/Web/testground/packages/core/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),

/***/ "../src/App.css":
/*!**********************!*\
  !*** ../src/App.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty (null-loader)\n\n//# sourceURL=webpack:///../src/App.css?");

/***/ }),

/***/ "../src/App.js":
/*!*********************!*\
  !*** ../src/App.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar _jsxFileName = '/Users/antony/Documents/Code/Web/testground/packages/testground/src/App.js';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./App.css */ \"../src/App.css\");\n\nvar _core = __webpack_require__(/*! @react-instudio/core */ \"../../core/lib/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'App', __source: {\n            fileName: _jsxFileName,\n            lineNumber: 9\n          },\n          __self: this\n        },\n        _react2.default.createElement(\n          'header',\n          { className: 'App-header', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 10\n            },\n            __self: this\n          },\n          _react2.default.createElement(\n            'h1',\n            { className: 'App-title', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 11\n              },\n              __self: this\n            },\n            'Welcome to React'\n          )\n        ),\n        _react2.default.createElement(\n          'p',\n          { className: 'App-intro', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 13\n            },\n            __self: this\n          },\n          'To get started, edit ',\n          _react2.default.createElement(\n            'code',\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 14\n              },\n              __self: this\n            },\n            'src/App.js'\n          ),\n          ' and save to reload.'\n        ),\n        _react2.default.createElement(\n          'div',\n          {\n            style: {\n              margin: '10px',\n              padding: '20px',\n              boxShadow: '1px 2px',\n              backgroundColor: 'orange'\n            },\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 16\n            },\n            __self: this\n          },\n          'Hello'\n        ),\n        _react2.default.createElement(\n          'div',\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 26\n            },\n            __self: this\n          },\n          _react2.default.createElement('input', { type: 'text', placeholder: 'Please input your name', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 27\n            },\n            __self: this\n          })\n        ),\n        _react2.default.createElement(_core.InlineStudio, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 29\n          },\n          __self: this\n        })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///../src/App.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jsxFileName = '/Users/antony/Documents/Code/Web/testground/packages/testground/server/src/app.js';\n\nvar _core = __webpack_require__(/*! @cra-express/core */ \"@cra-express/core\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar _require = __webpack_require__(/*! ../../src/App */ \"../src/App.js\"),\n    App = _require.default;\n\nvar clientBuildPath = path.resolve(__dirname, 'client');\nvar app = (0, _core.createReactAppExpress)({\n  clientBuildPath: clientBuildPath,\n  universalRender: (0, _core.handleUniversalRender)(React.createElement(App, {\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: undefined\n  }))\n});\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar app = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nvar PORT = process.env.PORT || 3001;\n\napp.listen(PORT, function () {\n  console.log('CRA Server listening on port ' + PORT + '!');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "@cra-express/core":
/*!************************************!*\
  !*** external "@cra-express/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@cra-express/core\");\n\n//# sourceURL=webpack:///external_%22@cra-express/core%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });