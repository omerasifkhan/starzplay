import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <nav className="flex items-center p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600">
      {/* Left side (main logo) */}
      <div>
        <Link
        to="/"
        onClick={() => setSelectedOption(null)}>
        <h1 className="text-white text-4xl p-3 font-bold cursor-pointer">STARZPLAY</h1>
        </Link>

      </div>

      {/* Center (additional options) */}
      <div className="flex items-center flex-grow">
        {/* Add your additional options here */}
        <Link
          to="/movies"
          className={`text-sm mx-2 hover:text-white ${
            selectedOption === 'movies' ? 'text-yellow-500 underline' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('movies')}
        >
          MOVIES
        </Link>
        <Link
          to="/tv-shows"
          className={`text-sm mx-2 hover:text-white ${
            selectedOption === 'tv-shows' ? 'text-yellow-500 underline' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('tv-shows')}
        >
          TV SHOWS
        </Link>
        <Link
          to="/arabic"
          className={`text-sm mx-2 hover:text-white ${
            selectedOption === 'arabic' ? 'text-yellow-500 underline' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('arabic')}
        >
          ARABIC
        </Link>
        <Link
          to="/kids-channels"
          className={`text-sm mx-2 hover:text-white ${
            selectedOption === 'kids-channels' ? 'text-yellow-500 underline' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('kids-channels')}
        >
          KIDS CHANNELS
        </Link>

        {/* Add more options as needed */}
      </div>

      {/* Right side (search and settings icons) */}
      <div className="flex items-center">
        {/* Replace these placeholders with actual icons */}
        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faSearch}
          size="lg" // Adjust the size (options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x')
          color="#F8F9FA" // Set the color
          className="mr-2"
          style={{marginRight: '25px'}}
        />
        <FontAwesomeIcon 
          icon={faCog}
          size="lg" // Adjust the size (options: 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x')
          color="#F8F9FA" // Set the color
        /> 
        {/* <span className="text-white mx-2 cursor-pointer">🔍</span>
        <span className="text-white mx-2 cursor-pointer">⚙️</span> */}
      </div>
    </nav>
  );
};

export default Navbar;
