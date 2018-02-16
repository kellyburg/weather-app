var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempCelcius;
var tempFahrenheit;
function getLocation(){
if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showData);
   
}
else{
    document.getElementById("userCity").innerHTML = "Unable to retrieve location";
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
    var country=json.sys.country;
    tempCelcius=json.main.temp;
    tempFahrenheit=(tempCelcius * 9/5 +32).toFixed(2);
    var weatherDesc = json.weather[0].description;
    document.getElementById("userLocation").innerHTML = city+", "+country;
    
    document.getElementById("temperature").innerHTML = tempCelcius + " " +String.fromCharCode(176) + "C";
    document.getElementById("weatherDescription").innerHTML = weatherDesc;
    document.getElementById("weatherIcon").className="wi wi-owm-"+json.weather[0].id;
    document.getElementsByTagName("html")[0].style.visibility = "visible";

    return displayTemp, tempCelcius, tempFahrenheit;


 })}
 function displayCelcius(){
    var displayTemp= tempCelcius;
    document.getElementById("temperature").innerHTML = displayTemp + " " +String.fromCharCode(176) + "C";
    document.getElementById("c-button").className="btn btn-primary active";
    document.getElementById("f-button").className="btn btn-default";

} 
function displayFahrenheit(){
    var displayTemp= tempFahrenheit;
    document.getElementById("temperature").innerHTML = displayTemp + " " +String.fromCharCode(176) + "F";
    document.getElementById("f-button").className="btn btn-primary active";
    document.getElementById("c-button").className="btn btn-default";
} 