import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
