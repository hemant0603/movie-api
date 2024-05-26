import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">MyMovieApp</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Movies</Link>
        <Link to="/favorites" className="text-white hover:text-gray-300">Favorites</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
