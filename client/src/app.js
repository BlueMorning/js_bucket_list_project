const RequestCountryAPI = require('./services/request.js');
const CountryView = require('./views/countryView.js');

const appStart = function(){



  const requestCountryAPI = new RequestCountryAPI();
  const countryView       = new CountryView();
  requestCountryAPI.getAllCountries(countryView.CreateSelectListOfCountries);

}


document.addEventListener('DOMContentLoaded', appStart);
