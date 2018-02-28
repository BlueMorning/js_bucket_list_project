const RequestCountryAPI = function(){




}

RequestCountryAPI.prototype.getAllCountries = function(callback){
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.eu/rest/v2/all");
  request.addEventListener("load", function(){
    getAllCountriesCallback(callback);
  });
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
