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

/***/ "./Contact.js":
/*!********************!*\
  !*** ./Contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\r\n  constructor(form) {\r\n    this.fullName = form.elements[\"fullName\"].value;\r\n    this.email = form.elements[\"email\"].value;\r\n    this.subject = form.elements[\"subject\"].value;\r\n    this.body = form.elements[\"msg\"].value;\r\n  }\r\n\r\n  fullName = \"\";\r\n  email = \"\";\r\n  subject = \"\";\r\n  body = \"\";\r\n\r\n  send() {\r\n    console.info(this.formatMessage());\r\n\tdocument.getElementById(\"formInfo\").innerHTML = \"We're not seding emails yet...feature for version 2.\"\r\n  }\r\n\r\n  formatMessage() {\r\n    return `To: ${this.fullName}\r\nEmail: ${this.email}\r\nSubject: ${this.subject}\r\nBody: ${this.body}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./Contact.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./Contact.js\");\n\r\n\r\nconst formInfo = document.getElementById(\"formInfo\");\r\nconst hasJob = true;\r\n\r\nif (hasJob) {\r\n  showMessage(\"Thanks for visiting, I'm currently employed. \");\r\n} else {\r\n  showMessage(\"Please look around, I'm currently looking for a position.\");\r\n}\r\n\r\nlet today = new Date();\r\nlet dayOfWeek = today.getDay();\r\n\r\nif (dayOfWeek === 0 || dayOfWeek === 6) {\r\n  showMessage(\"Since it is the weekend, please be patient with my returning your email.\");\r\n}\r\n\r\nfunction showMessage(message) {\r\n  formInfo.innerHTML = \"<p>\" + message + \"</p>\";\r\n}\r\n\r\nfunction clearMessage() {\r\n  formInfo.innerHTML = \"\";\r\n}\r\n\r\nconst contactForm = document.getElementById(\"contactForm\");\r\ncontactForm.addEventListener(\"submit\", function (event) {\r\n  event.preventDefault();\r\n  const contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contactForm);\r\n  contact.send();\r\n  //   showMessage(\"Sending your message...Thank You: \" + contact.fullName);\r\n});\r\n\r\nconst experiences = document.getElementsByClassName(\"experience\");\r\nfor (let x = 0; x < experiences.length; x++) {\r\n  const item = experiences[x];\r\n  item.addEventListener(\"mouseenter\", function (event) {\r\n    event.target.style = \"background-color: #999999;\";\r\n  });\r\n  item.addEventListener(\"mouseleave\", function (event) {\r\n    event.target.style = \"\";\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;