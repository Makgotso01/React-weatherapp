import React from "react";
import Weather from ".weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
      </div>
    </div>
  );
}
