let input = document.querySelector(".input-country");
let searchBtn = document.querySelector(".search");
let weatherImg = document.querySelector(".weather-img");
let weatherBox = document.querySelector(".weather-box");
let weatherBody = document.querySelector(".weather-body");
let temp = document.querySelector(".temp");
let description = document.querySelector(".desc");
let weatherData;
let response;
let actualTemp;
let image;
async function checkWeather(city) {
    const api_key = "d7cbf70ffcb447d3b5a0cfc6bf60c09b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   
    try {
        weatherData = await fetch(url);
        response = await weatherData.json();
        weatherBody.style.display = "flex";
        if (response.cod === 404) {
            console.log("Error:", response.message);
            // Handle error here
            weatherImg.src = "img/404.png";
            return;

        }

        actualTemp = response.main.temp - 273.15;
        actualTemp = actualTemp.toFixed(1);
        console.log("Temperature:", actualTemp);

        temp.innerHTML = `${actualTemp} <sup>°C</sup>`;
        image = response.weather[0].main;

        switch (response.weather[0].main) {
            case 'Clouds':
                weatherImg.src = "img/cloud.png";
                description.innerText = response.weather[0].description;
                break;
            case 'Clear':
                weatherImg.src = "img/clear.png";
                description.innerText = response.weather[0].description;
                break;
            case 'Rain':
                weatherImg.src = "img/rain.png";
                description.innerText = response.weather[0].description;
                break;
            case 'Mist':
                weatherImg.src = "img/mist.png";
                description.innerText = response.weather[0].description;
                break;
            case 'Snow':
                weatherImg.src = "img/snow.png";
                description.innerText = response.weather[0].description;
                break;
            default:
                // Handle unknown weather condition
                break;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        // Handle other errors, such as network issues
        weatherImg.src = "img/404.png";
        weatherBox.innerHTML = `<h2>No Location Found</h2>`

    }
}

// async function checkWeather(city){
//     const api_key = "d7cbf70ffcb447d3b5a0cfc6bf60c09b";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
  
//     weatherData = await fetch(url);
//     response = await weatherData.json();
//     actualTemp = response.main.temp-273.15;
//     actualTemp = actualTemp.toFixed(1);
//     console.log(response.main.temp-273.15);
//     temp.innerHTML = `${actualTemp} <sup>°C</sup>`
//     image = response.weather[0].main;
//     if (response.cod === 404) {
//         console.log("Error:", response.message);
//         // Handle error here
//         weatherImg.src = "img/404.png";
//         return;
//     }
   
    
//     // if(image === "Clear"){
//     //     description.innerText = "Clear"
//     //     weatherImg.src = "img/clear.png"
//     // }
//     // else if(image === "Cloud"){
//     //     description.innerText = "Cloudy Day"
//     //     weatherImg.src = "img/cloud.png"
//     // }
//     // else if(image === "Rain"){
//     //     description.innerText = "Cloudy Day"
//     //     weatherImg.src = "img/rain.png"
//     // }
    
//     switch(response.weather[0].main){
//         case 'Clouds':
//             weatherImg.src = "img/cloud.png";
//             description.innerText = response.weather[0].description;
//             break;
//         case 'Clear':
//             weatherImg.src = "img/clear.png";
//             description.innerText = response.weather[0].description;

//             break;
//         case 'Rain':
//             weatherImg.src = "img/rain.png";
//             description.innerText = response.weather[0].description;

//             break;
//         case 'Mist':
//             weatherImg.src = "img/mist.png";
//             description.innerText = response.weather[0].description;

//             break;
//         case 'Snow':
//             weatherImg.src = "img/snow.png";
//             description.innerText = response.weather[0].description;

//             break;
//         default:
          
//     }
//     if (response.cod == '404'){
//         weatherImg.src = "img/404.png";
//     }
    
// }

searchBtn.addEventListener("click", () => {
    
    checkWeather(input.value.toLowerCase());
}
)