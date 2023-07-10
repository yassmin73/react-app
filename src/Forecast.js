import React from "react";
import sunny from "./01d@2x.png";
import cloudy from "./02d@2x.png";
import "./styles.css";
export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Fri</h3>

          <div className="card-body">
            <img src={sunny} className="forecast" alt="forecast weather" />
            <div className="high-temperature">7° </div>
            <div className="low-temperature"> 2°</div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Sat</h3>

          <div className="card-body">
            <img src={sunny} className="forecast" alt="forecast weather" />
            <div className="high-temperature">13° </div>
            <div className="low-temperature"> 0°</div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Sun</h3>

          <div className="card-body">
            <img src={sunny} className="forecast" alt="forecast weather" />
            <div className="high-temperature">14° </div>
            <div className="low-temperature"> 4°</div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Mon</h3>

          <div className="card-body">
            <img src={cloudy} className="forecast" alt="forecast weather" />
            <div className="high-temperature">11° </div>
            <div className="low-temperature"> 1°</div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Tue</h3>

          <div className="card-body">
            <img src={cloudy} className="forecast" alt="forecast weather" />
            <div className="high-temperature">11° </div>
            <div className="low-temperature"> 0°</div>
          </div>
        </div>
      </div>

      <div className="col-2">
        <div className="card h-100">
          <h3 className="card-title">Wed</h3>

          <div className="card-body">
            <img src={cloudy} className="forecast" alt="forecast weather" />
            <div className="high-temperature">11° </div>
            <div className="low-temperature"> 2°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
