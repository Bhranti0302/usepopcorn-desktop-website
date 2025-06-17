import React from "react";

function NumResults({ movies }) {
  return <p className="num-results">Found {movies.length} top results</p>;
}

export default NumResults;
