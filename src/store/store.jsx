import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../reducers/movieReducer';
import favoriteReducer from '../reducers/favoriteReducer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoriteReducer,
  },
});

export default store;
