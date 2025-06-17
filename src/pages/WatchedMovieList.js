import React from "react";
import WatchedMovie from "../components/WatchedMovie";

function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.Title}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
