import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />

        <footer>
          This project was coded by
          <a href="" target="_blank" rel="noopener noreferrer">
            Makgotso Ntai
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Makgotso01/React-weatherappp"
            target="_blank"
            rel="noopener noreferrer">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://kaleidoscopic-semolina-f30b47.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
