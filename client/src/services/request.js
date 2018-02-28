const RequestCountryAPI = function(){




}

RequestCountryAPI.prototype.getAllCountries = function(callback){
  console.log("getAllCountries");
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.eu/rest/v2/all");
  request.addEventListener("load", function(){
    this.getAllCountriesCallback(callback);
  }.bind(this));
  request.send();
}

RequestCountryAPI.prototype.getAllCountriesCallback = function(callback){
  console.log(callback);
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
