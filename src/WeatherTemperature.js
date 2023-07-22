import React, { useState } from "react";


export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function convertToFahrenheit(event) {
event.preventDefault();
setUnit("fahrenheit");
}

function convertToCelsius(event) {
event.preventDefault();
setUnit("celsius");
}

if (unit === "celsius") {
return (
    
<span className="temperature">
        {Math.round(props.celsius)}{" "}
          <span href="/" className="units">
            °C|
          </span>
          <a href="/" className="units" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
        
);
} else {
    let fahrenheit= (props.celsius * 9/5) +32;
    return (
    
        <span className="temperature">
                {Math.round(fahrenheit)}{" "}
                  <a href="/" className="units"  onClick={convertToCelsius}>
                    °C|
                  </a>
                  <span href="/" className="units">
                    °F
                  </span>
                </span>
                
        );

}
}