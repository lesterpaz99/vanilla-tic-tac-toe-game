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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: 'Arial', sans-serif;\n  background-color: #1E1E2F;\n  color: #F3F4F6;\n  position: relative;\n}\n\n/* Logo */\n.logo {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #E5E7EB;\n  opacity: 0.8;\n}\n\n.container {\n  text-align: center;\n}\n\n/* Players display */\n.players {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  font-size: 1.2rem;\n}\n\n.player {\n  font-weight: bold;\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  transition: background-color 0.3s ease;\n}\n\n.player-x {\n  color: #4ADE80;\n}\n\n.player-o {\n  color: #60A5FA;\n}\n\n.vs {\n  color: #9CA3AF;\n}\n\n/* Highlight active player */\n.active {\n  background-color: #2E2E3A;\n}\n\n/* Board styles */\n.board {\n  display: grid;\n  grid-template-columns: repeat(3, 100px);\n  grid-template-rows: repeat(3, 100px);\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.cell {\n  background-color: #2E2E3A;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #9CA3AF;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.cell:not(.inactive):hover {\n  background-color: #3B3B4D;\n}\n\n.inactive {\n  background-color: transparent;\n  transform: scale(.9);\n  transition: all 0.6s ease;\n  cursor: auto;\n}\n\n.cell.x {\n  color: #4ADE80; /* Green color for X */\n}\n\n.cell.o {\n  color: #60A5FA; /* Blue color for O */\n}\n\n/* play button styles */\n.play-button {\n  background-color: #374151;\n  color: #E5E7EB;\n  padding: 10px 20px;\n  font-size: 1rem;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.play-button:hover {\n  background-color: #4B5563;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/computerTurn.js":
/*!*****************************!*\
  !*** ./src/computerTurn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerLogic: () => (/* binding */ computerLogic)\n/* harmony export */ });\n/* harmony import */ var _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlow.js */ \"./src/gameFlow.js\");\n\n\nconst checkRow = () => {\n\tconst result = {\n\t\tisThreat: false,\n\t\tisOpportunity: false,\n\t\tposition: [null, null],\n\t};\n\n\tconst rowToAttack = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board.findIndex((row) => row.join('') === '00');\n\tif (rowToAttack !== -1) {\n\t\tconst targetCol = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board[rowToAttack].findIndex((col) => col === null);\n\n\t\tresult.isOpportunity = true;\n\t\tresult.position = [rowToAttack, targetCol];\n\t\treturn result;\n\t}\n\n\tconst rowToDefend = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board.findIndex((row) => row.join('') === 'XX');\n\tif (rowToDefend !== -1) {\n\t\tconst targetCol = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board[rowToDefend].findIndex((col) => col === null);\n\n\t\tresult.isThreat = true;\n\t\tresult.position = [rowToDefend, targetCol];\n\t}\n\n\treturn result;\n};\n\nconst checkCol = () => {\n\tconst [row1, row2, row3] = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board;\n\tconst result = {\n\t\tisThreat: false,\n\t\tisOpportunity: false,\n\t\tposition: [null, null],\n\t};\n\n\t// opportunities first\n\tfor (let [i, row] of _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board.entries()) {\n\t\tif (row1[i] === '0' && row2[i] === '0' && row3[i] === null) {\n\t\t\tresult.isOpportunity = true;\n\t\t\tresult.position = [2, i];\n\t\t\tbreak;\n\t\t}\n\t\tif (row1[i] === '0' && row3[i] === '0' && row2[i] === null) {\n\t\t\tresult.isOpportunity = true;\n\t\t\tresult.position = [1, i];\n\t\t\tbreak;\n\t\t}\n\t\tif (row2[i] === '0' && row3[i] === '0' && row1[i] === null) {\n\t\t\tresult.isOpportunity = true;\n\t\t\tresult.position = [0, i];\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tif (!result.isOpportunity) {\n\t\tfor (let [i, row] of _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board.entries()) {\n\t\t\tif (row1[i] === 'X' && row2[i] === 'X' && row3[i] === null) {\n\t\t\t\tresult.isThreat = true;\n\t\t\t\tresult.position = [2, i];\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif (row1[i] === 'X' && row3[i] === 'X' && row2[i] === null) {\n\t\t\t\tresult.isThreat = true;\n\t\t\t\tresult.position = [1, 0];\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif (row2[i] === 'X' && row3[i] === 'X' && row1[i] === null) {\n\t\t\t\tresult.isThreat = true;\n\t\t\t\tresult.position = [0, i];\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\n\treturn result;\n};\n\nconst checkDiagonal = () => {\n\tlet result = {\n\t\tisThreat: false,\n\t\tisOpportunity: false,\n\t\tposition: [null, null],\n\t};\n\tconst [row1, row2, row3] = _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.game.board;\n\tconst lineTopLeftToBottom = [row1[0], row2[1], row3[2]];\n\tconst lineTopRightToBottom = [row1[2], row2[1], row3[0]];\n\n\tif (lineTopLeftToBottom.join('') === '00') {\n\t\tconst colToAttack = lineTopLeftToBottom.findIndex((col) => col === null);\n\t\tresult.isOpportunity = true;\n\t\tresult.position = [colToAttack, colToAttack];\n\t}\n\n\tif (lineTopRightToBottom.join('') === 'XX') {\n\t\tconst colToDefend = lineTopRightToBottom\n\t\t\t.reverse()\n\t\t\t.findIndex((col) => col === null);\n\t\tconst rowToDefend = colToDefend === 2 ? 0 : colToDefend === 0 ? 2 : 1;\n\t\tresult.isThreat = true;\n\t\tresult.position = [rowToDefend, colToDefend];\n\t}\n\n\treturn result;\n};\n\nconst computerLogic = () => {\n\tconst {\n\t\tisThreat: isRowThreat,\n\t\tisOpportunity: isRowOpportunity,\n\t\tposition: rowTargetPosition,\n\t} = checkRow();\n\n\tif (isRowThreat || isRowOpportunity) {\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.setMark)(rowTargetPosition, _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.player0);\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.checkWinner)();\n\t\treturn true;\n\t}\n\n\tconst {\n\t\tisThreat: isColThreat,\n\t\tisOpportunity: isColOpportunity,\n\t\tposition: colTargetPosition,\n\t} = checkCol();\n\n\tif (isColThreat || isColOpportunity) {\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.setMark)(colTargetPosition, _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.player0);\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.checkWinner)();\n\t\treturn true;\n\t}\n\n\tconst {\n\t\tisThreat: isDiagonalThreat,\n\t\tisOpportunity: isDiagOpportunity,\n\t\tposition: diagTargetPosition,\n\t} = checkDiagonal();\n\n\tif (isDiagonalThreat || isDiagOpportunity) {\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.setMark)(diagTargetPosition, _gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.player0);\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_0__.checkWinner)();\n\t\treturn true;\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/computerTurn.js?");

/***/ }),

/***/ "./src/gameFlow.js":
/*!*************************!*\
  !*** ./src/gameFlow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkWinner: () => (/* binding */ checkWinner),\n/* harmony export */   game: () => (/* binding */ game),\n/* harmony export */   hasWinner: () => (/* binding */ hasWinner),\n/* harmony export */   player0: () => (/* binding */ player0),\n/* harmony export */   playerX: () => (/* binding */ playerX),\n/* harmony export */   setMark: () => (/* binding */ setMark)\n/* harmony export */ });\nconst game = {\n\tboard: [\n\t\t[null, null, null],\n\t\t[null, null, null],\n\t\t[null, null, null],\n\t],\n\twinner: null,\n};\n\nconst playerX = 'X';\nconst player0 = '0';\n\nconst players = {\n\t[playerX]: playerX,\n\t[player0]: player0,\n};\n\nconst updateBoard = ([row, col], player) => {\n\tconst cell = document.querySelector(`[data-cell=\"${row},${col}\"]`);\n\tcell.textContent = player;\n};\n\nconst setMark = ([row, col], playerMark) => {\n\tgame.board[row].splice(col, 1, playerMark);\n\tupdateBoard([row, col], playerMark);\n};\n\nconst checkWinner = () => {\n\t// rows winner validation\n\tconst rows = game.board.map((boardRow) => boardRow.join(''));\n\n\tif (rows.includes('XXX')) {\n\t\tgame.winner = playerX;\n\t\treturn;\n\t}\n\n\tif (rows.includes('000')) {\n\t\tgame.winner = player0;\n\t\treturn;\n\t}\n\n\t// columns winner validation\n\tconst [row1, row2, row3] = game.board;\n\n\trow1.forEach((col, i) => {\n\t\tif (row1[i] !== null && row1[i] === row2[i] && row1[i] === row3[i]) {\n\t\t\tgame.winner = players[col];\n\t\t\treturn;\n\t\t}\n\t});\n\n\t// diagonal winner validation\n\tif (\n\t\t(row1[0] !== null && row1[0] === row2[1] && row1[0] === row3[2]) ||\n\t\t(row1[2] !== null && row1[2] === row2[1] && row1[2] === row3[0])\n\t) {\n\t\tconst player =\n\t\t\trow1[0] !== null && row1[0] === row2[1] && row1[0] === row3[2]\n\t\t\t\t? row1[0]\n\t\t\t\t: row1[2];\n\t\tgame.winner = players[player];\n\t\treturn;\n\t}\n};\n\nconst hasWinner = () => (game.winner !== null ? true : false);\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/gameFlow.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _play_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.js */ \"./src/play.js\");\n\n\n\nconst startBtn = document.querySelector('#playBtn');\nstartBtn.addEventListener('click', () => {\n\tstartBtn.textContent = 'Restart Game';\n\t(0,_play_js__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n});\n\nconst board = document.querySelector('#board');\nboard.addEventListener('click', (e) => {\n\tconst cellValue = e.target;\n\tif (cellValue.className === 'cell') {\n\t\tlet userChoice = cellValue.dataset.cell.split(',');\n\t\tlet row = Number(userChoice[0]);\n\t\tlet col = Number(userChoice[1]);\n\n\t\t(0,_play_js__WEBPACK_IMPORTED_MODULE_1__.playTurn)([row, col]);\n\t}\n});\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/index.js?");

/***/ }),

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playTurn: () => (/* binding */ playTurn),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _computerTurn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerTurn.js */ \"./src/computerTurn.js\");\n/* harmony import */ var _gameFlow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFlow.js */ \"./src/gameFlow.js\");\n\n\n\nconst resetGame = () => {\n\t_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.game.board = [\n\t\t[null, null, null],\n\t\t[null, null, null],\n\t\t[null, null, null],\n\t];\n\t_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.game.winner = null;\n};\n\n// start\nconst startGame = () => {\n\tconst inactiveCells = document.querySelectorAll('.cell');\n\tconst arrCells = Array.from(inactiveCells);\n\n\tarrCells.forEach((cell) => {\n\t\tcell.textContent = '';\n\t\tcell.classList.remove('inactive');\n\t});\n\n\tresetGame();\n};\n\n// game flow\nconst playTurn = (cellPosition) => {\n\t// Player X move\n\tconst [row, col] = cellPosition;\n\tif (_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.game.board[row][col] === null) {\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.setMark)([row, col], _gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.playerX);\n\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.checkWinner)();\n\t}\n\n\tif ((0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.hasWinner)()) {\n\t\treturn;\n\t}\n\n\t// Player 0 move\n\tconst setComputerMark = () => {\n\t\tif ((0,_computerTurn_js__WEBPACK_IMPORTED_MODULE_0__.computerLogic)()) return;\n\n\t\tconst getRandomPosition = () => {\n\t\t\treturn Math.floor(Math.random() * 3);\n\t\t};\n\n\t\tconst row = getRandomPosition();\n\t\tconst col = getRandomPosition();\n\n\t\t// if the space is free, cool. If not, dont pass the turn.\n\t\tif (_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.game.board[row][col] === null) {\n\t\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.setMark)([row, col], _gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.player0);\n\t\t\t(0,_gameFlow_js__WEBPACK_IMPORTED_MODULE_1__.checkWinner)();\n\t\t\treturn;\n\t\t}\n\n\t\t// ask computer choose another cell\n\t\tsetComputerMark();\n\t};\n\n\tsetTimeout(setComputerMark, 1300);\n};\n\n\n//# sourceURL=webpack://vanilla-tic-tac-toe-game/./src/play.js?");

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