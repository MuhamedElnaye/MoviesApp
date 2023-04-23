import React from "react";
import "./ResultCard.css";
import { useMoviesContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";
const ResultCard = ({ movie }) => {
  const MovieContext = useMoviesContext();
  const storeMovieWatchlist = MovieContext.watchList.find(
    (mov) => mov.imdbID === movie.imdbID
  );
  const storeMovieWatched = MovieContext.watched.find(
    (mov) => mov.imdbID === movie.imdbID
  );
  const watchListDisable = storeMovieWatchlist
    ? true
    : storeMovieWatched
    ? true
    : false;
  const watchedDisabled = storeMovieWatched ? true : false;
  return (
    <div className="result-cart">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisable}
            onClick={() => {
              MovieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHELIST,
                payload: movie,
              });
            }}
          >
            Add To Watch List
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              MovieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              });
            }}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
