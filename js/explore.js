const apiKey = '277933e120c563addcd7527acadb54b7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const cities = ['New York', 'Melbourne', 'Vancouver' , 'London'];
const cityElements = document.querySelectorAll('.city');
const tempElements = document.querySelectorAll('.temp');
const humidityElements = document.querySelectorAll('.humidity');
const weatherIconElements = document.querySelectorAll('.weather-icon');

async function checkWeather(city, index) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    cityElements[index].innerHTML = data.name;
    tempElements[index].innerHTML = '溫度: ' + Math.round(data.main.temp) + '°C';
    humidityElements[index].innerHTML = '濕度: ' + data.main.humidity + '%';

    if (data.weather[0].main == 'Clouds') {
        weatherIconElements[index].src = 'weather/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
        weatherIconElements[index].src = 'weather/clear.png';
    } else if (data.weather[0].main == 'Rain') {
        weatherIconElements[index].src = 'weather/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIconElements[index].src = 'weather/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
        weatherIconElements[index].src = 'weather/mist.png';
    }
    console.log(data.name, data.weather[0].main);
}

function updateWeather() {
    cities.forEach((city, index) => {
        checkWeather(city, index);
    });
    setTimeout(updateWeather, 10000);
}

updateWeather();