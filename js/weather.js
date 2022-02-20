const API_KEY = "8b27c91422e8b9b0c66b883b3fff39b3"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) =>response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = `${data.name} / ${data.main.temp}℃`;
        weather.innerText = data.weather[0].main;

        if(weather.innerText == "Clouds"){
            document.querySelector(".weatherimg").setAttribute("src","https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-cloud-weather-justicon-flat-justicon-2.png");
        } else if(weather.innerText == "Clear"){
            document.querySelector(".weatherimg").setAttribute("src","https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-hot-weather-nature-flat-icons-inmotus-design.png");
        } else if(weather.innerText == "Rain" ){
            document.querySelector(".weatherimg").setAttribute("src","https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-rain-jungle-vitaliy-gorbachev-flat-vitaly-gorbachev.png");
        }else if(weather.innerText == "Snow" ){
            document.querySelector(".weatherimg").setAttribute("src","https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-snow-alaska-icongeek26-flat-icongeek26.png");
        }else if(weather.innerText == "Thunderstorm" ){
            document.querySelector(".weatherimg").setAttribute("src","https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-storm-weather-justicon-lineal-color-justicon.png");
        }

    });
}

function onGeoErr(){
    alert("Can't find your geolocation.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)


