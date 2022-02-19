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
        }

    });
}

function onGeoErr(){
    alert("Can't find your geolocation.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)


