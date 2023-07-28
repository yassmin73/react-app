import React, { useState, useEffect } from "react";
import "./styles.css";

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

useEffect(() => {
setLoaded(false);
}, [props.coordinates]);


  function handleSubmit(response) {
setForecast(response.data.daily);
setLoaded(true);
  }

if (loaded) {
  return (
    <div className="row">
     {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}

     </div>
  );
 
} else {
  const apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let lat= props.coordinates.lat;
  let lon= props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit)
  
  return null; 
 
}
}
