import * as actions from "./ActionTypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHELIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHELIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchList: [...state.watchList, action.payload],
      };
    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [...state.watched, action.payload],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
