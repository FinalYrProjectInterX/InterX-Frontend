// components/SearchBar.js

import React from 'react';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none"
      />
      <button className="ml-2 #ffffff36; hover:bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
