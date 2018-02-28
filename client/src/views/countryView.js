const CountryView = function(){


}


/*** Method for populating the html select country list element ***/
CountryView.prototype.CreateSelectListOfCountries = function(countries){
  const container = document.getElementbyID('div-countries-list');
  const select = document.createElement('select');
  countries.forEach(function(country){
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });
  container.appendChild(select);
}

module.exports = CountryView;
