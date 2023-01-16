import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Weather defaultCity="New York" />
        </header>

        <footer>
          This project was created by Sanja Plazonić and it is{" "}
          <a
            href="https://github.com/NjaSa58/weather-react-app"
            target="_blank"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
