import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">Wavp Music</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signup" className="text-gray-600 hover:text-purple-600">Sign Up</Link>
            <Link to="/create-order" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}