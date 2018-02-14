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
    var weatherDesc = json.weather[0].description;
    console.log(city);
    document.getElementById("userLocation").innerHTML = city;
    console.log(tempCelcius);
    document.getElementById("temperature").innerHTML = tempCelcius + " " +String.fromCharCode(176) + "C";
    console.log(tempFahrenheit);
    document.getElementById("weatherDescription").innerHTML = weatherDesc;
    document.getElementById("weatherIcon").src=json.weather[0].icon;
 })}
