import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <h1>This movie was rated {movieRating} star</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <StarRating size={24} color={"#fcc419"} defaultRating={4} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    />
    <Test />
  </React.StrictMode>
);
