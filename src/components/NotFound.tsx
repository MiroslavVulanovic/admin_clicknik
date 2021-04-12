import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="fixed inset-0 bg-blue-100 h-screen w-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-black mb-5">404 - Not Found!</h1>
    <Link to="/" className="text-lg font-black">
      Vrati se na početnu stranu
    </Link>
  </div>
);

export default NotFound;