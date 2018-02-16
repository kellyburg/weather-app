var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var displayTemp;
var tempCelcius;
var tempFahrenheit;
function getLocation(){
if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showData);
   
}
else{
    document.getElementById("userLocation").innerHTML = "Unable to retrieve location";
}

}
function showData(position) {
    var lat= position.coords.latitude;
    var lon= position.coords.longitude;
    console.log(lat);
    console.log(lon);
    var apiUrl = api + "lon=" + lon + "&lat=" + lat;
    console.log(apiUrl);
 $.getJSON(apiUrl, function(json){
    console.log(json);
    var city=json.name;
    tempCelcius=json.main.temp;
    displayTemp=tempCelcius;
    tempFahrenheit=(tempCelcius * 9/5 +32).toFixed(2);
    var weatherDesc = json.weather[0].description;
    console.log(city);
    document.getElementById("userLocation").innerHTML = city;
    console.log(tempCelcius);
    document.getElementById("temperature").innerHTML = displayTemp + " " +String.fromCharCode(176) + "C";
    console.log(tempFahrenheit);``
    document.getElementById("weatherDescription").innerHTML = weatherDesc;
    document.getElementById("weatherIcon").className="wi wi-owm-"+json.weather[0].id;
    document.getElementsByTagName("html")[0].style.visibility = "visible";

    console.log(displayTemp);
    return displayTemp, tempCelcius, tempFahrenheit;


 })}
 function displayCelcius(){
    displayTemp= tempCelcius;
    document.getElementById("temperature").innerHTML = displayTemp + " " +String.fromCharCode(176) + "C";
    document.getElementById("c-button").className="btn btn-primary active";
    document.getElementById("f-button").className="btn btn-default";

} 
function displayFahrenheit(){
    displayTemp= tempFahrenheit;
    document.getElementById("temperature").innerHTML = displayTemp + " " +String.fromCharCode(176) + "F";
    document.getElementById("f-button").className="btn btn-primary active";
    document.getElementById("c-button").className="btn btn-default";
} 