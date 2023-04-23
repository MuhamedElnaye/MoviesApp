import React from "react";
import { useMoviesContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";
const WatchList = () => {
  const MoviesContext = useMoviesContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h1>My Watch List</h1>
          <span className="movies-count">
            {MoviesContext.watchList.length}
            {MoviesContext.watchList.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {MoviesContext.watchList.length > 0 ? (
          <div className="movie-grid">
            {MoviesContext.watchList.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Your List ,Add Some !</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
