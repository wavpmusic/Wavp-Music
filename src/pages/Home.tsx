import React from 'react';
import { Link } from 'react-router-dom';
import { Music2, Gift, Calendar, BellRing as Ring } from 'lucide-react';

export default function Home() {
  const occasions = [
    { icon: Ring, title: 'Wedding', price: '₹15,000' },
    { icon: Gift, title: 'Anniversary', price: '₹12,000' },
    { icon: Music2, title: 'Proposal', price: '₹10,000' },
    { icon: Calendar, title: 'Birthday', price: '₹8,000' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Your Story, <span className="text-purple-600">Your Song</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create personalized music for your special moments that's as unique as your love story.
        </p>
        <Link
          to="/create-order"
          className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700"
        >
          Create Your Song
        </Link>
      </div>

      {/* How It Works */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Your Occasion</h3>
            <p className="text-gray-600">Select from our range of special occasions and moments</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Share Your Story</h3>
            <p className="text-gray-600">Tell us about your special memories and moments</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Your Song</h3>
            <p className="text-gray-600">Receive your personalized song crafted just for you</p>
          </div>
        </div>
      </div>

      {/* Occasions */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Occasion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((occasion) => (
            <div key={occasion.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <occasion.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{occasion.title}</h3>
              <p className="text-purple-600 font-bold text-center">{occasion.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}