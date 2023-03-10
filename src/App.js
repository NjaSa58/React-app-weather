import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Weather defaultCity="Zagreb" />
        </header>

        <footer>
          This project was created by Sanja Plazonić and it is{" "}
          <a
            href="https://github.com/NjaSa58/React-app-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
