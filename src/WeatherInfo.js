import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <div className="d-flex WeatherInfo-leftData">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <ul className="WeatherInfo-rightData">
            <li>
              Reel Feel:&ensp;
              {Math.round(props.data.reelFeel)}°C
            </li>
            <li>Humidity:&ensp; {props.data.humidity}%</li>
            <li>
              Wind:&emsp;&ensp;
              {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
