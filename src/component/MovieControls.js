import React from "react";
import { useMoviesContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";
const MovieControls = ({ movie, type }) => {
  const MoviesContext = useMoviesContext();
  return (
    <div className="inner-card-control">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesContext.moviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHELIST,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesContext.moviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash" />
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MoviesContext.moviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
