import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-2">
          <span>Made with</span>
          <Heart className="h-5 w-5 text-red-500 fill-current" />
          <span>by Wavp Music</span>
        </div>
        <div className="mt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Wavp Music. All rights reserved.
        </div>
      </div>
    </footer>
  );
}