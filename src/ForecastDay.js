import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {

    function maxTemp() {
        let temp= Math.round(props.data.temp.max);
        return `${temp}`;
    }
    function minTemp() {
        let temp= Math.round(props.data.temp.min);
        return `${temp}`;
    }

    function day() {
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();
        let days= [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }
return ( 
    <div className="card h-100">
    <h3 className="card-title"> {day()} </h3>

    <div className="card-body">
      <WeatherIcon code={props.data.weather[0].icon} size={60} />
      <div className="high-temperature mt-3">{maxTemp()}°</div>
      <div className="low-temperature"> {minTemp()}°</div>
    </div>
  </div>
);
}