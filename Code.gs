function getAddress(place, city) {
  var state = 'New York';
  var country = 'United States';
  var API_KEY = 'AIzaSyDMU3zdjAfyraWORUaDwspHx_Dvf4gCpgI';
  var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' +
    place + ' ' + city + ' ' + state + '&key=' + API_KEY;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  obj = JSON.parse(json);
  addr = obj.results[0].formatted_address;
  return addr;
}


function getLat(address) {
  var API_KEY = 'AIzaSyDMU3zdjAfyraWORUaDwspHx_Dvf4gCpgI';
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    address + '&key=' + API_KEY;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  obj = JSON.parse(json);
  lat = obj.results[0].geometry.location.lat;
  return lat;
}

function getLon(address){
  var API_KEY = 'AIzaSyDMU3zdjAfyraWORUaDwspHx_Dvf4gCpgI';
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    address + '&key=' + API_KEY;
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  obj = JSON.parse(json);
  lon = obj.results[0].geometry.location.lng;
  return lon;
}