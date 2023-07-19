import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ loaded: false});

  
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000)
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
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
        <input type="submit" value="Search" />


        <button>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </span>
  </div>
  <br />

    <div className="row">
      <div className="col">
        <div className="card h-100">
          <div className="card-body-1">
            <h2 className="card-title-1" id="city">
              {" "}
              {city}
            </h2>
            Today's weather
            <br />
            <br />
            <img src={weather.icon} alt={weather.description} />{" "}
            <span className="temperature" id="temperature-input">
            {Math.round(weather.temperature)}{" "}
              <a href="/" className="units">
                °C|
              </a>
              <a href="/" className="units">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="card-body-1">
            <div className="card-text-1" >
            <br />
            
              <span> Last updated: </span>{" "}
              <span className="card-text-1"> <FormattedDate date={weather.date} /> </span>
              <div>
              <ul>
                <li  className="text-capitalize">
                  <div id="description">{weather.description} </div>
                </li>
                <li >
                  Humidity: <span id="humidity" > {Math.round(weather.humidity)}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(weather.wind)}</span> km/h
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Forecast />
    </div>
    </div>
  );

}  else {
 const apiKey = "9eca7aac0b071aa16e3cb063adba0785";

 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showWeather);
 return "Loading..."
  
}
}
