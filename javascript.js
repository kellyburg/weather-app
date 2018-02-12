function getLocation(){
if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPosition);
}
else{
    document.getElementById("userLocation").innerHTML = "Unable to retrieve location";
}
}
function showPosition(position) {
    document.getElementById("userLocation").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}