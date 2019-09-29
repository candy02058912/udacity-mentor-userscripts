// ==UserScript==
// @name        Udacity Student Notes
// @version     1.0.0
// @author      Candy Tsai <candy02058912@gmail.com>
// @description Keep notes about your students
// @match       https://hub.udacity.com/conversations/*
// @namespace   https://hub.udacity.com/
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/student-hub-notes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/student-hub-notes/elements.js":
/*!*******************************************!*\
  !*** ./src/student-hub-notes/elements.js ***!
  \*******************************************/
/*! exports provided: notesDiv, notesTitle, notesTextArea, saveBtn, saveBtnText, injectELements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notesDiv\", function() { return notesDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notesTitle\", function() { return notesTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"notesTextArea\", function() { return notesTextArea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveBtn\", function() { return saveBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveBtnText\", function() { return saveBtnText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectELements\", function() { return injectELements; });\nconst notesDiv = document.createElement(\"div\");\nconst notesTitle = document.createElement(\"h3\");\nconst notesTextArea = document.createElement(\"textarea\");\nconst saveBtn = document.createElement(\"button\");\nconst saveBtnText = document.createElement(\"span\");\n\nconst injectELements = () => {\n  const sidebar = document.querySelector(\n    \".participant-details_bodySegment__v46XI\"\n  );\n  saveBtnText.append(\"Save\");\n  saveBtnText.classList.add(\"vds-button__content\");\n\n  saveBtn.classList.add(\"vds-button\", \"vds-button--primary\");\n  saveBtn.setAttribute(\"style\", \"margin-top: 1rem;\");\n  saveBtn.append(saveBtnText);\n\n  notesTitle.append(\"Notes\");\n  notesDiv.append(notesTitle, notesTextArea, saveBtn);\n  sidebar.prepend(notesDiv);\n};\n\n\n//# sourceURL=webpack:///./src/student-hub-notes/elements.js?");

/***/ }),

/***/ "./src/student-hub-notes/index.js":
/*!****************************************!*\
  !*** ./src/student-hub-notes/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/student-hub-notes/main.js\");\n\nconst fireOnHashChangesToo = true;\nsetInterval(function() {\n  if (\n    this.lastPathStr !== location.pathname ||\n    this.lastQueryStr !== location.search ||\n    (fireOnHashChangesToo && this.lastHashStr !== location.hash)\n  ) {\n    this.lastPathStr = location.pathname;\n    this.lastQueryStr = location.search;\n    this.lastHashStr = location.hash;\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n}, 100);\n\n\n//# sourceURL=webpack:///./src/student-hub-notes/index.js?");

/***/ }),

/***/ "./src/student-hub-notes/main.js":
/*!***************************************!*\
  !*** ./src/student-hub-notes/main.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes */ \"./src/student-hub-notes/notes.js\");\n\n\nconst main = () => {\n  const startScript = setInterval(function() {\n    const loaded = document.querySelector(\n      \".nanodegree-list-accordion_nanodegreeList__2z2nn\"\n    );\n    if (loaded) {\n      clearInterval(startScript);\n      Object(_notes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n  }, 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n\n//# sourceURL=webpack:///./src/student-hub-notes/main.js?");

/***/ }),

/***/ "./src/student-hub-notes/notes.js":
/*!****************************************!*\
  !*** ./src/student-hub-notes/notes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/student-hub-notes/elements.js\");\n\nconst notesScript = () => {\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"injectELements\"]();\n\n  const chatId = window.location.pathname.split(\"/\")[2];\n  const storageKey = `candy:${chatId}`;\n\n  // Save notes to local storage\n  let saved = false;\n  const saveNotes = e => {\n    localStorage.setItem(storageKey, _elements__WEBPACK_IMPORTED_MODULE_0__[\"notesTextArea\"].value);\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"saveBtn\"].classList.add(\"vds-button--secondary\");\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"saveBtnText\"].innerHTML = \"Saved\";\n    saved = true;\n  };\n  const canSaveNotes = e => {\n    if (saved) {\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"saveBtnText\"].innerHTML = \"Save\";\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"saveBtn\"].classList.remove(\"vds-button--secondary\");\n      saved = false;\n    }\n  };\n\n  // Load notes\n  const notes = localStorage.getItem(storageKey);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"notesTextArea\"].value = notes;\n\n  // Bind events\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"saveBtn\"].addEventListener(\"click\", saveNotes);\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"notesTextArea\"].addEventListener(\"keyup\", canSaveNotes);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (notesScript);\n\n\n//# sourceURL=webpack:///./src/student-hub-notes/notes.js?");

/***/ })

/******/ });