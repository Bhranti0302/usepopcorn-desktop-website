import React from "react";

function Movie({ movie, onSelectMovie }) {
  return (
    <li className="list-movie" onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <div>
        <p>📅 {movie.Year}</p>
      </div>
    </li>
  );
}

export default Movie;
