const RequestCountryAPI = require('./services/request.js');

const appStart = function(){

  requestCountryAPI = new RequestCountryAPI();
  requestCountryAPI.getAllCountries();

}


document.addEventListener('DOMContentLoaded', appStart);
