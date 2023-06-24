/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domElements: () => (/* binding */ domElements),
/* harmony export */   getInput: () => (/* binding */ getInput)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const text = document.getElementById('text');
const city = document.getElementById('name');
const humid = document.getElementById('humidity');
const date = document.getElementById('date');
const feels = document.getElementById('feels');
const temperatureC = document.getElementById('temp-c');
const temperatureF = document.getElementById('temp-f');
const wind = document.getElementById('wind');
const input = document.querySelector('input');
const container = document.querySelector('.container');
document.getElementById('year').innerHTML = new Date().getFullYear()

async function domElements() {
    const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])();
    container.style.display = 'block';

    console.log(data.current.condition.text);
    text.textContent = data.current.condition.text;
    city.textContent = `${data.location.name}, ${data.location.country}`;
    humid.textContent = `Humidity: ${data.current.humidity}%`;
    date.textContent = `As at: ${data.current.last_updated}`;
    temperatureC.textContent = `${data.current.temp_c}C`;
    feels.textContent = `Feels like ${data.current.feelslike_c}C`;
    temperatureF.textContent = `${data.current.temp_f}F`;
    wind.textContent = `Wind speed: ${data.current.wind_kph} km/h`;
}

function getInput() {
    return input.value;
}



/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



async function getData() {
    const input = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getInput)();
    const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=66a64a49c5324e0e8eb152621232006&q=${input}&aqi=no`, {mode: 'cors'});
    const cityData = await weatherData.json();
    console.log(cityData);
    return cityData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


const button = document.querySelector('button');



button.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__.domElements);

console.log(123)
})();

/******/ })()
;
//# sourceMappingURL=main.js.map