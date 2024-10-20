import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
