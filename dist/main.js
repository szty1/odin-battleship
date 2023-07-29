/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SairaStencilOne-Regular.ttf */ \"./src/fonts/SairaStencilOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/RobotoSlab-Regular.ttf */ \"./src/fonts/RobotoSlab-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --grid-width: 5;\n  --grid-height: 5;\n}\n\n@font-face {\n  font-family: \"SairaStencilOne\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"RobotoSlab\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  font-family: \"Nunito\";\n  font-weight: 600;\n  display: flex;\n}\n\n.content {\n  width: 100%;\n  display: grid;\n  grid-template-rows: 120px 1fr 40px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: rgb(0, 48, 104);\n  padding: 0 30px 0 30px;\n}\n\n.header h2 {\n  color: #ffffff;\n  font-size: 48px;\n  font-family: \"SairaStencilOne\";\n  font-weight: 400;\n  margin: 0 0 -20px 0;\n}\n\n.header h3 {\n  color: #ffffff;\n  font-size: 24px;\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  margin: 0 0 10px 0;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 48, 104);\n}\n\n.footer span {\n  font-size: 16px;\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  color: #ffffff;\n}\n\n.main {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  margin: 40px 0 0 0;\n}\n\n.boards {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: row;\n  gap: 50px;\n}\n\n.side {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 1;\n  padding: 10px;\n}\n\n.side.highlighted {\n  background-color: rgb(229, 234, 236);\n}\n\n.side.winner {\n  background-color: rgb(0, 48, 104);\n}\n\n.side.loser {\n  opacity: 0.5;\n}\n\n.side h3 {\n  color: rgb(0, 48, 104);\n  font-size: 24px;\n  font-family: \"SairaStencilOne\";\n  font-weight: 400;\n  text-decoration: none;\n}\n\n.side.highlighted h3 {\n  text-decoration: underline;\n}\n\n.side.winner h3 {\n  color: #ffffff;\n}\n\n.board {\n  background-color: #ffffff;\n  display: grid;\n  width: 20rem;\n  height: 20rem;\n  grid-template-columns: repeat(var(--grid-width), 1fr);\n  grid-template-rows: repeat(var(--grid-height), 1fr);\n  border: 3px solid rgb(0, 48, 104);\n  padding: 1px;\n}\n\n.cell {\n  border: 1px solid #999999;\n  margin: 1px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cell.ship {\n  background-color: rgba(0, 49, 104, 0.3);\n}\n\n.cell.hit {\n  background-color: rgba(0, 49, 104, 0.7);\n}\n\n.cell.hit::before {\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'SairaStencilOne';\n  content: '·';\n}\n\n.cell.sunk {\n  background-color: rgba(0, 49, 104, 1);\n}\n\n.cell.sunk::before {\n  color: #ffffff;\n  font-size: 18px;\n  font-family: 'SairaStencilOne';\n  content: ' ';\n}\n\n.cell.miss::before {\n  color: rgba(0, 49, 104, 0.3);\n  font-size: 18px;\n  font-family: 'SairaStencilOne';\n  content: 'X';\n}\n\n.cellBtn {\n  border: 1px solid #999999;\n  margin: 1px;\n  display: flex;\n}\n\n.cellBtn:hover {\n  border: 2px solid rgba(0, 49, 104);\n  margin: 1px;\n  display: flex;\n}\n\n.cellBtn.hit {\n\n}\n\n.cellBtn.miss {\n\n}\n\n.instructions h2 {\n  color: rgb(0, 48, 104);\n  font-size: 36px;\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  text-decoration: none;\n  margin: 40px 0 0 0;\n}\n\n.message h2 {\n  color: rgba(0, 49, 104, 0.6);\n  font-size: 36px;\n  font-family: \"RobotoSlab\";\n  font-weight: 400;\n  text-decoration: none;\n  margin: 0;\n}\n\n.newgame input {\n  padding: 20px;\n  font-size: 20px;\n  font-family: \"RobotoSlab\";\n  background-color: rgb(0, 48, 104);\n  color: #ffffff;\n  border: none;\n  margin-top: 20px;\n}\n\n.hide {\n  display: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/component/display.js":
/*!**********************************!*\
  !*** ./src/component/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\n\nconst Display = () => {\n\n  // prints the board to console (for testing purposes)\n  const logBoard = (board) => {\n    board.forEach(row => {\n      let rowdata = [];\n      row.forEach(slot => {\n        rowdata.push(slot.state);\n      });\n      console.log(rowdata.join(' | '));\n    })\n  }\n\n  const loadPage = (size) => {\n    setCSSVariables(size);\n    renderPageSkeleton();\n    renderHeader();\n    renderMain();\n    renderFooter();\n  }\n\n  const setCSSVariables = (size) => {\n    document.documentElement.style.setProperty('--grid-width', size[0]);\n    document.documentElement.style.setProperty('--grid-height', size[1]);\n  }\n\n  const renderPageSkeleton = () => {\n    const content = document.querySelector('.content');\n    content.innerHTML = `\n    <div class=\"header\"></div>\n    <div class=\"main\"></div>\n    <div class=\"footer\"></div>\n    `;\n  }\n\n  const renderHeader = () => {\n    const header = document.querySelector('.header');\n    header.innerHTML = `\n      <h2>BATTLESHIP</h2>\n      <h3>WITH A TWIST</h3>\n    `;\n  }\n\n  const renderMain = () => {\n    const main = document.querySelector('.main');\n    main.innerHTML = `\n      <div class=\"boards\">\n        <div class=\"side\" id=\"player\">\n          <h3>YOUR BOARD</h3>\n          <div class=\"board player\">\n          </div>\n        </div>\n        <div class=\"side\" id=\"computer\">\n          <h3>ENEMY'S BOARD</h3>\n          <div class=\"board computer\">\n          </div>\n        </div>\n      </div>\n      <div class=\"instructions\">\n        <h2></h2>\n      </div>\n      <div class=\"message\">\n        <h2></h2>\n      </div>\n      <div class=\"newgame hide\">\n        <input type=\"button\" value=\"Start a New Game\">\n      </div>\n      `;\n  }\n\n  const renderFooter = () => {\n    const footer = document.querySelector('.footer');\n    footer.innerHTML = `\n    <span>BATTLESHIP by szty1 for Odin Project</span>\n    `;\n  }\n\n  const renderBoard = (player, gameEnded = false) => {\n    const board = document.querySelector(`.board.${player.getName()}`);\n    let grid = \"\";\n    player.getBoard().getBoard().forEach((row, i) => {\n      row.forEach((slot, j) => {\n        if (player.isComputer() && !gameEnded) {\n          if (slot.state === 'miss' || slot.state === 'hit' || slot.state === 'sunk') {\n            grid += `<div class=\"cell ${slot.state}\"></div>`;\n          } else {\n            grid += `<a href=\"#\" class=\"cellBtn\" data-id=\"${i},${j}\"></a>`;\n          }\n        } else {\n          grid += `<div class=\"cell ${slot.state}\"></div>`;\n        }\n      }); \n    });\n    board.innerHTML = grid;\n  }\n\n  const highlight = (currentplayer) => {\n    if (currentplayer.isComputer()) {\n      document.querySelector('#player').classList.add('highlighted');\n      document.querySelector('#computer').classList.remove('highlighted');\n      showMsg(\"\", \".instructions\");\n    } else {\n      document.querySelector('#player').classList.remove('highlighted');\n      document.querySelector('#computer').classList.add('highlighted');\n      showMsg(\"MAKE YOUR MOVE!\", \".instructions\");\n    }\n  }\n\n  const showMsg = (msg, div = \".message\") => {\n    const instructions = document.querySelector(`${div} h2`);\n    instructions.innerHTML = msg;\n  }\n\n  const showWinner = (winner) => {\n    highlight(winner);\n    if (winner.getName() === 'player') {\n      showMsg(\"YOU'VE WON!\", \".instructions\");\n      showMsg(\"NICE GAME!\");\n    }\n    else {\n      showMsg(\"YOU'VE LOST!\", \".instructions\");\n      showMsg(\"BETTER LUCK NEXT TIME!\");\n    }\n  }\n\n  const showNewGameBtn = () => {\n    document.querySelector('.newgame').classList.remove(\"hide\");\n  }\n  \n  return { logBoard, loadPage, renderBoard, highlight, showWinner, showMsg, showNewGameBtn }\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);\n\n\n\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/component/display.js?");

/***/ }),

/***/ "./src/component/gameControl.js":
/*!**************************************!*\
  !*** ./src/component/gameControl.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/component/display.js\");\n/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ship.js */ \"./src/factories/ship.js\");\n/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/gameboard.js */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/player.js */ \"./src/factories/player.js\");\n/* harmony import */ var _shipTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipTypes.js */ \"./src/component/shipTypes.js\");\n\n\n\n\n\n\nconst GameControl = () => {\n\n  // board size (standard is 10 by 10)\n  const boardSize = [10,10];\n\n  // ship sizes and shapes. supports irregular shaped ships,\n  // as we used to play it in school :)\n  // TODO: allow players to choose custom shapes\n  // const shipSizes = [5,4,3,3,2,2,1,1];\n  const shipSizes = [5];\n\n  // create the players. human player will start the game\n  let player = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('player', false, (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(boardSize));\n  let computer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('computer', true, (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(boardSize));  \n  let current = computer;\n\n   // init display \n  const display = (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  \n  const init = () => {\n\n    // load html skeleton\n    display.loadPage(boardSize);\n\n    [player, computer].forEach(player => {\n      shipSizes.forEach(size => {\n\n        // select a random ship shape with the specified size\n        const shipOffset = randomShipShape(size);\n\n        // place ship at random location on the board\n        let rndCoords = randomCoords(boardSize);\n        let ship = (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipOffset);\n        while(player.getBoard().placeShip(ship, rndCoords) === false) {\n          rndCoords = randomCoords(boardSize);\n        }\n      });\n\n      display.renderBoard(player);\n    })\n\n    playRound();\n  }\n\n  // update the current player's board and init computer's move\n  const playRound = () => {\n    toggleEventListeners();\n    display.highlight(current);\n    display.renderBoard(current);\n\n    if (checkWinner()) return;\n\n    if (current.isComputer()) {\n      setTimeout(playComputerMove, 500);\n    }\n  }\n\n  // record the computer's move and chech if game is over\n  const playComputerMove = () => {\n    const move = current.smartMove(boardSize);\n    current.addMove(move);\n    const state = getOtherPlayer().getBoard().receiveAttack(move);\n    switch(state.state) {\n      case 'hit':\n        current.setLastHit(move);\n        break;\n      case 'sunk':\n        current.setLastHit(move);\n        current.markSunkNeighbors(state.ship, boardSize);\n        break;\n    }\n    current = getOtherPlayer();\n    playRound();\n  }\n\n  // record the player's move and chech if game is over\n  const handlePlayerMove = (coord) => {\n    if (current === player && player.addMove(coord)) {\n      const state = getOtherPlayer().getBoard().receiveAttack(coord);\n      switch(state.state) {\n        case 'miss':\n          display.showMsg(\"NOTHING THERE\");\n          break;\n        case 'hit':\n          display.showMsg(\"THAT'S A HIT\");\n          break;\n        case 'sunk':\n          display.showMsg(\"THAT SHIP HAS SUNK\");\n          break;\n      }\n      current = getOtherPlayer();\n      playRound();\n    }\n  }\n\n  // check is current player sunk all ships\n  const checkWinner = () => {\n    if (current.getBoard().areAllSunk()) {\n      display.renderBoard(computer, true);\n      display.showWinner(getOtherPlayer());\n      display.showNewGameBtn();\n      gameOverEventListeners();\n      return true;\n    }\n    return false;\n  }\n\n  // HELPER FUNCTIONS\n\n  const getOtherPlayer = () => {\n    if (current === player) return computer;\n    else return player;\n  }\n\n  // returns a random shape with the specified size from the shipTypes array\n  const randomShipShape = (size) => {\n    const shipType = _shipTypes_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find(element => element.size === size);\n    const randomIndex = Math.floor(Math.random() * shipType.shapes.length);\n    return shipType.shapes[randomIndex];\n  }\n\n  // returns a random 2d coordinate\n  const randomCoords = (size) => {\n    const x = Math.floor(Math.random() * size[0]);\n    const y = Math.floor(Math.random() * size[1]);\n    return [x,y];\n  }\n\n  // USER INPUT\n\n  // toggle event listeners when player is in/active\n  const toggleEventListeners = () => {\n    if (current.isComputer()) {\n      document.querySelector('.board.computer').removeEventListener('click', handleTileClick);\n    } else {\n      document.querySelector('.board.computer').addEventListener('click', handleTileClick);\n    }\n  }\n\n  // remove event listeners\n  const gameOverEventListeners = () => {\n    document.querySelector('.board.computer').removeEventListener('click', handleTileClick);\n    document.querySelector('.newgame input').addEventListener('click', handleNewGameBtnClick);\n\n  }\n\n  // handle player input\n  const handleTileClick = (e) => {\n    if (e.target.dataset.id != undefined) {\n      handlePlayerMove(e.target.dataset.id.split(','));\n    }\n  }\n\n  const handleNewGameBtnClick = (e) => {\n    player = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('player', false, (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(boardSize));\n    computer = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('computer', true, (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(boardSize));  \n    current = computer;\n    init();\n  }\n\n  return { init, playRound }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControl);\n\n//# sourceURL=webpack://odin-battleship/./src/component/gameControl.js?");

/***/ }),

/***/ "./src/component/shipTypes.js":
/*!************************************!*\
  !*** ./src/component/shipTypes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipTypes = [\n  {\n    size:5,\n    shapes: [\n      [[0,0], [0,1], [0,2], [0,3], [0,4]],\n      [[0,0], [1,0], [2,0], [3,0], [4,0]],\n      [[0,0], [1,0], [2,0], [1,-1], [1,1]],\n      [[0,0], [0,1], [0,2], [1,0], [2,0]],\n      [[0,0], [1,0], [2,0], [2,1], [2,2]],\n      [[0,0], [0,1], [0,2], [-1,0], [-2,0]],\n      [[0,0], [1,0], [2,0], [2,-1], [2,-2]],\n    ]\n  },\n  {\n    size:4,\n    shapes: [\n      [[0,0], [0,1], [0,2], [0,3]],\n      [[0,0], [1,0], [2,0], [3,0]],\n      [[0,0], [0,1], [1,0], [1,1]],\n      [[0,0], [1,0], [2,0], [1,1]],\n      [[0,0], [0,1], [0,2], [1,1]],\n      [[0,0], [1,0], [2,0], [1,-1]],\n      [[0,0], [0,1], [0,2], [-1,1]],\n    ]\n  },\n  {\n    size:3,\n    shapes: [\n      [[0,0], [0,1], [0,2]],\n      [[0,0], [1,0], [2,0]],\n      [[0,0], [1,0], [0,1]],\n      [[0,0], [1,0], [1,-1]],\n      [[0,0], [-1,0], [-1,1]],\n      [[0,0], [-1,0], [-1,-1]]\n    ]\n  },\n  {\n    size:2,\n    shapes: [\n      [[0,0], [0,1]],\n      [[0,0], [1,0]]\n    ]\n  },\n  {\n    size:1,\n    shapes: [\n      [[0,0]]\n    ]\n  }\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipTypes);\n\n//# sourceURL=webpack://odin-battleship/./src/component/shipTypes.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = (boardSize) => {\n\n  // create board 2d array and init slot states\n  let board = Array.from(Array(boardSize[0]), () => new Array(boardSize[1]).fill({state:'empty', ship: null}));\n  let ships = [];\n\n  const getBoard = () => board;\n\n  const setSlotState = (coord, state, ship = null) => {\n    board[coord[0]][coord[1]] = {state:state, ship:ship};\n  }\n\n  const getSlotState = (coord) => {\n    return board[coord[0]][coord[1]];\n  }\n\n  const isSlotAvailable = (coord) =>\n  {\n    // check if coordinates are valid and return state if true\n    if (coord[0] < 0 || coord[1] < 0 || coord[0] >= boardSize[0] || coord[1] >= boardSize[1]) {\n      return false;\n    } else {\n      return (getSlotState(coord).state === \"empty\");\n    }\n  }\n\n  const placeShip = (ship, coord) => {\n\n    // create an array of ship requested coordinates\n    let coordsArray = [];\n    ship.getShape().forEach(offset => coordsArray.push([coord[0] + offset[0], coord[1] + offset[1]]));\n  \n    // check if all slots are available\n    if (coordsArray.every(isSlotAvailable)) {\n\n      // mark ship slots\n      coordsArray.forEach((coord) => {\n        ship.addCoord(coord);\n        setSlotState(coord, 'ship', ship);\n      });\n\n      // mark neighboring slots as unavaiable for next ships\n      coordsArray.forEach((coord) => {\n        for (let i = -1; i <= 1; i++) {\n          for (let j = -1; j <= 1; j++) {\n            if (isSlotAvailable([coord[0] + i, coord[1] + j])) {\n              setSlotState([coord[0] + i, coord[1] + j], 'na', null);\n            }\n          }\n        } \n      });\n\n      ships.push(ship);\n      return true;\n    }\n    return false;\n  }\n\n  const receiveAttack = (coord) => {\n\n    // get state of selected slot\n    const state = getSlotState(coord);\n\n    // if its a ship, call hit function of ship and set slot state to hit\n    if (state.state === 'ship') {\n      state.ship.hit();\n      if (state.ship.isSunk()) {\n        setShipSunk(state.ship);\n      }\n      else {\n        setSlotState(coord, 'hit', state.ship);\n      } \n    }\n\n    // set slot state to miss\n    else {\n      setSlotState(coord, 'miss');\n    } \n\n    // return new state of slot\n    return getSlotState(coord);\n  }\n\n  const setShipSunk = (ship) => {\n    ship.getCoords().forEach(coord => {\n      setSlotState(coord, 'sunk', ship);\n    });\n  }\n\n  const areAllSunk = () => {\n    return ships.every((ship) => ship.isSunk());\n  }\n\n  return { getBoard, placeShip, receiveAttack, areAllSunk, isSlotAvailable }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://odin-battleship/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (name, computer, board) => {\n  let moves = [];\n  let lastHit = [];\n  const neighbors = [[-1,0],[0,-1],[0,1],[1,0]];\n  const sunkNeighbors = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];\n\n  const getName = () => {\n    return name;\n  }\n\n  const isComputer = () => {\n    return computer;\n  }\n\n  const getBoard = () => {\n    return board;\n  }\n\n  const addMove = (coord) => {\n    if (!moves.includes(toString(coord))) {\n      moves.push(toString(coord));\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  const setLastHit = (coord) => {\n    if (coord === null) {\n      lastHit = [];\n    }\n    else {\n      lastHit.push(coord);\n    }\n  }\n\n  // iterate through neighboring tiles if hit a ship or pick a random move\n  const smartMove = (size) => {\n\n    // iterate throught lastHit array\n    while (lastHit.length > 0) {\n      for (let i = 0; i < neighbors.length; i++) {\n        let coord = [lastHit.at(-1)[0] + neighbors.at(i)[0], lastHit.at(-1)[1] + neighbors.at(i)[1]];\n\n        // check if coord is valid and is available\n        if (isValidCoord(coord, size)) {\n          if (!moves.includes(toString(coord))) {\n            return coord;\n            break;\n          }\n        }\n      }\n      lastHit.pop();\n    } \n\n    // find an available random coordinate\n    let randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[1])}`;\n    while (moves.includes(randomCoord)) {\n      randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[[1]])}`;\n    }\n    return toCoords(randomCoord);\n  }\n\n  // mark all neighboring tiles of a sunk ship\n  const markSunkNeighbors = (ship, size) => {\n    const coords = [...ship.getCoords()];\n    while (coords.length > 0) {\n      for (let i = 0; i < sunkNeighbors.length; i++) {\n        let coord = [coords.at(-1)[0] + sunkNeighbors.at(i)[0], coords.at(-1)[1] + sunkNeighbors.at(i)[1]];\n\n        // check if coord is valid and is available\n        if (isValidCoord(coord, size)) {\n          addMove(coord);\n        }\n      }\n      coords.pop();\n    }\n  }\n\n  // helper functions to store coords as strings\n  const toString = (coord) => {\n    return `${coord[0]},${coord[1]}`;\n  }\n\n  const toCoords = (coordStr) => {\n    const coord = coordStr.split(',');\n    return [parseInt(coord[0]), parseInt(coord[1])];\n  }\n\n  const isValidCoord = (coord, size) => {\n    return (coord[0] >= 0 && coord[0] < size[0] && coord[1] >= 0 && coord[1] < size[1]);\n  }\n\n  return { getName, isComputer, getBoard, addMove, setLastHit, smartMove, markSunkNeighbors }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (shape = [[0,0]]) => {\n  let hits = 0;\n  let sunk = false;\n  let size = shape.length;\n  let coords = [];\n\n  const getShape = () => {\n    return shape;\n  }\n\n  const getSize = () => {\n    return size;\n  }\n\n  const getHits = () => {\n    return hits;\n  }\n\n  const addCoord = (coord) => {\n    coords.push(coord);\n  }\n\n  const getCoords = () => {\n    return coords;\n  }\n\n  const hit = () => {\n    hits++;\n    return hits;\n  }\n\n  const isSunk = () => {\n    return hits >= size;\n  }\n\n  return { getShape, getSize, getHits, addCoord, getCoords, hit, isSunk };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n\n//# sourceURL=webpack://odin-battleship/./src/factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_gameControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/gameControl.js */ \"./src/component/gameControl.js\");\n\n\nconst game = (0,_component_gameControl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ngame.init();\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ }),

/***/ "./src/fonts/RobotoSlab-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/RobotoSlab-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39c7af8a5d124ff3c247.ttf\";\n\n//# sourceURL=webpack://odin-battleship/./src/fonts/RobotoSlab-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/SairaStencilOne-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/SairaStencilOne-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d71378f180e77f557c2e.ttf\";\n\n//# sourceURL=webpack://odin-battleship/./src/fonts/SairaStencilOne-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;