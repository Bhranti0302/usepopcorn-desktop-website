import React, { useEffect, useRef, useState } from "react";
import StarRating from "./components/StarRating";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useKey } from "./hooks/useKey";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import WatchedSummary from "./pages/WatchedSummary";
import WatchedMovieList from "./pages/WatchedMovieList";

const KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const [query, setQuery] = useState("inception");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isloading, error } = useMovies(query);

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isloading && <Loader />}
          {!isloading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <Error message={error} />}
        </Box>
        <Box>
          <>
            {selectedId ? (
              <MovieDetails
                selectedId={selectedId}
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMovieList
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched}
                />
              </>
            )}
          </>
        </Box>
      </Main>
    </>
  );
}

export default App;
