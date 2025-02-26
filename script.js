
const apiKey = 'ed06990013661e6838bb748e8c8633ce';
let currentTempCelsius = null;
let isCelsius = true;

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found!');
                return;
            }

            document.getElementById('weather-city').textContent = data.location.name;
            document.getElementById('weather-description').textContent = data.current.weather_descriptions[0];
            currentTempCelsius = data.current.temperature;
            document.getElementById('weather-temp').textContent = `${currentTempCelsius} °C`;
            document.getElementById('weather-icon').src = data.current.weather_icons[0];
            isCelsius = true;
        })
        .catch(error => alert('Error fetching weather data'));
}

function toggleTemperature() {
    if (currentTempCelsius !== null) {
        if (isCelsius) {
            const tempFahrenheit = (currentTempCelsius * 9/5) + 32;
            document.getElementById('weather-temp').textContent = `${tempFahrenheit.toFixed(1)} °F`;
        } else {
            document.getElementById('weather-temp').textContent = `${currentTempCelsius} °C`;
        }
        isCelsius = !isCelsius;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}
