var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;

function getLocation(){
if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPosition);
   
}
else{
    document.getElementById("userLocation").innerHTML = "Unable to retrieve location";
}

}
function showPosition(position) {
    var lat= position.coords.latitude;
    var lon= position.coords.longitude;
    console.log(lat);
    console.log(lon);
    var apiUrl = api + "lon=" + lon + "&lat=" + lat;
    console.log(apiUrl);
 $.getJSON(apiUrl, function(json){
    console.log(json);
    var city=json.name;
    var tempCelcius=json.main.temp;
    var tempFahrenheit=tempCelcius * 9/5 +32;
    console.log(city);
    console.log(tempCelcius);
    console.log(tempFahrenheit);
 })}

function getWeather(){
   }