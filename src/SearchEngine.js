import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo"; 


export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ loaded: false});

  
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    search();
  }

  function showWeather(response) {
    
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000)
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9eca7aac0b071aa16e3cb063adba0785";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weather.loaded) {
  return (
    <div>
    <div className="container">
    <span className="search">
      <form action="#" id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Search location"
          name="search"
          id="search-input"
          onChange={updateCity}
        />
        


        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </span>
    <WeatherInfo data={weather}/>
  </div>
      <Forecast />
    </div>
  );
}  else {
search();
 return "Loading..."
  
}
}
