import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Weather App</h1>
          <WeatherSearch />
        </header>

        <fotter>
          This project was created by Sanja Plazonić and it is{" "}
          <a
            href="https://github.com/NjaSa58/weather-react-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </fotter>
      </div>
    </div>
  );
}
