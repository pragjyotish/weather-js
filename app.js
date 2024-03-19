const apiKey = '6501fae86012c2d999f5b9156890204b';

document.getElementById('search-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const city = this.value;
        getWeather(city);
    }
});

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('search-box').value;
    getWeather(city);
});


function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => updateWeather(data));
}

function updateWeather(data) {
    const cityName = document.getElementById('city-name');
    const weatherDescription = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');

    cityName.textContent = `City : ${data.name}`;
    weatherDescription.textContent = `Description : ${data.weather[0].description}`;
    temperature.textContent = `Temperature : ${data.main.temp} °C`;
    humidity.textContent = `Humidity : ${data.main.humidity}` ;
}