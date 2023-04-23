import React from "react";
import { useMoviesContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";

const Watched = () => {
  const MoviesContext = useMoviesContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watched Movies </h1>
          <span className="movies-count">
            {MoviesContext.watched.length}
            {MoviesContext.watched.length === 1 ? `  Movie` : "  Movies"}
          </span>
        </div>
        {MoviesContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MoviesContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies Watched!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
