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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const RequestCountryAPI = __webpack_require__(1);
const CountryView = __webpack_require__(3);

const appStart = function(){



  const requestCountryAPI = new RequestCountryAPI();
  const countryView       = new CountryView();
  requestCountryAPI.getAllCountries(countryView.CreateSelectListOfCountries);

}


document.addEventListener('DOMContentLoaded', appStart);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const RequestCountryAPI = function(){




}

RequestCountryAPI.prototype.getAllCountries = function(callback){
  console.log("getAllCountries");
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.eu/rest/v2/all");
  request.addEventListener("load", this.getAllCountriesCallback.bind(request, callback));
  request.send();
}

RequestCountryAPI.prototype.getAllCountriesCallback = function(callback){
  if(this.status != 200){
    console.log(this.status);
  }
  else
  {
      const countries = JSON.parse(this.responseText);
      callback(countries);
  }
}


module.exports = RequestCountryAPI;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

const CountryView = function(){


}


/*** Method for populating the html select country list element ***/
CountryView.prototype.CreateSelectListOfCountries = function(countries){

  const container = document.getElementById('div-countries-list');
  const select    = document.createElement('select');

  countries.forEach(function(country){
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });
  container.appendChild(select);
}

module.exports = CountryView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map