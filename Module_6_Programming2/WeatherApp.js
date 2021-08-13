const APPID = "f3b233447d7f149ef001552b59da63e5";

function update(weather) {
	temp.innerHTML = weather.temp;
	loc.innerHTML = weather.loc;
	icon.src = "https://openweathermap.org/img/w/" + weather.icon +".png;"
}
window.onload = function(){
	icon = document.getElementById("icon");
	temp = document.getElementById("temp");
	loc = document.getElementById("loc");

	if(navigator.geolocation){
		let showPosition = function(position){
			updateByGeo(position.coords.latitude, position.coords.longitude);
		}
		navigator.geolocation.getCurrentPosition(showPosition);
	}
}
function updateByGeo(lat, lon){
	let url ="https://api.openweathermap.org/data/2.5/weather?" +
	"lat=" + lat +
	"&lon=" + lon +
	"&APPID=" + APPID;
  console.log(url)
	sendRequest(url);
}

function sendRequest(url){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			let data = JSON.parse(xmlhttp.responseText);
      console.log(data);
			let weather = {};
			weather.icon = data.weather[0].icon;
			weather.loc = data.name;
			weather.temp = K2F(data.main.temp);

			update(weather);
		}
	};

	xmlhttp.open("GET",url, true);
	xmlhttp.send();
}

function K2F(k){
	return Math.floor(9/5 * (k-273) + 32);
}
function cToF(celsius){
	return Math.floor(9 / 5+ 32);
}
function fToC(farenheit){
	return Math.floor((farenheit - 32)* 5 / 9);
}
function toggleScale(){
	if(temScale.innerHTML === "°C"){
		temp.innerHTML = cToF(temp.innerHTML);
		temScale.innerHTML = "°F";
}	else if (temScale.innerHTML === "°F"){
	temp.innerHTML = fToC(temp.innerHTML);
	temScale.innerHTML = "°C";
}
temScale.addEventListener("click", toggleScale);
}

