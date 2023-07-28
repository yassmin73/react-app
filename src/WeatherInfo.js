import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
    return (
<div className="WeatherInfo">

<div className="row">
  <div className="col">
    <div className="card h-100">
      <div className="card-body-1">
        <h2 className="card-title-1" id="city">
          {props.data.city}
        </h2>
        Today's weather
        <br />
        <br />
        <div className="float-left">
        <WeatherIcon code={props.data.icon} description={props.data.description} size={80} />
        {" "}
        <WeatherTemperature celsius={props.data.temperature} />
        
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <div className="card-body-1">
        <div className="card-text-1" >
        <br />
        
          <span> Last updated: </span>{" "}
          <span className="card-text-1"> <FormattedDate date={props.data.date} /> </span>
          <div>
          <ul>
            <li  className="text-capitalize">
              <div id="description">{props.data.description} </div>
            </li>
            <li >
              Humidity: <span id="humidity" > {Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    </div>    
);
}