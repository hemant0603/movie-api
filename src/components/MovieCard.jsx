import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favoriteActions';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg m-4 size-80">
      <img className="w-full" src={movie.image} alt={movie.movie} />
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="font-bold text-xl mb-2">{movie.movie}</div>
          <p className="text-gray-700 text-base">Rating: {movie.rating}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <button
            className="text-red-500"
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
          <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on IMDb</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
