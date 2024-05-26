import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyapi.online/api/movies');
    dispatch({ type: FETCH_MOVIES, payload: response.data });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
