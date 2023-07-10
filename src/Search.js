import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Forecast from "./Forecast";
export default function SearchEngine() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (temperature) {
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
            <img src={icon} alt={description} />{" "}
            <span class="temperature" id="temperature-input">
            {Math.round(temperature)}{" "}
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
            <p className="card-text-1" />
            <br />
            <p>
              <span> Last updated: </span>{" "}
              <span className="card-text-1">5:00</span>
              <ul>
                <li>
                  <div id="description">{description} </div>
                </li>
                <li>
                  Humidity: <span id="humidity"> {Math.round(humidity)}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(wind)}</span> km/h
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <Forecast />
    </div>
    </div>
  );

}  else {
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
              {"Tokyo"}
            </h2>
            Today's weather
            <br />
            <br />
            <img src={icon} alt={description} />{" "}
            <span class="temperature" id="temperature-input">
            16{" "}
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
            <p className="card-text-1" />
            <br />
            <p>
              <span> Last updated: </span>{" "}
              <span className="card-text-1">5:00</span>
              <ul>
                <li>
                  <div id="description">Clear </div>
                </li>
                <li>
                  Humidity: <span id="humidity"> 32</span>%
                </li>
                <li>
                  Wind: <span id="wind">2</span> km/h
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <Forecast />
    </div>
    </div>
  );
}
}
