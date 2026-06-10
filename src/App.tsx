import React from "react";
import "./App.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Nick Feige</h1> 
      <button
        onClick={() => alert("Hello!")}
        className="button"
      >
        Click Me
      </button>
    </div>
  );
}