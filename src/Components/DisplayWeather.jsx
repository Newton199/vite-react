import React, { useState, useEffect } from 'react';
import './DisplayWeather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY`);
      const data = await response.json();
      setWeatherData(data);
    }
    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp}</p>
      <p>Humidity: {weatherData.main.humidity}</p>
      <p>Wind: {weatherData.wind.speed}</p>
    </div>
  );
}

export default Weather;
