function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = parseFloat(document.getElementById('latitude').value);
    const lon = parseFloat(document.getElementById('longitude').value);
    const apiKey = '7003af0266f31a7a8cdc46986a74912b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    if (city) {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp}</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
            })
            .catch(error => {
                console.error('Error fetching weather:',error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Failed to fetch weather for ${city}.</p>`;
            });     
    } else if (lat && lon) {
       // console.log(apiKey);
        fetch(apiUrl2)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temperature: ${data.main.temp}</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
            })
            .catch(error => {
                console.error('Error fetching weather:',error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Failed to fetch weather for ${lat} ${lon}.</p>`;
            });

    }

}

document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails);

