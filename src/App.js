import "./App.css";
import React from "react";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}
