import { FETCH_MOVIES } from '../actions/movieActions';

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload.sort((a, b) => b.rating - a.rating) };
    default:
      return state;
  }
};

export default movieReducer;
