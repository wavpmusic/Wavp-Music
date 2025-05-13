import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment logic here
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Payment Details</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="cardName" className="block text-gray-700 mb-2">Name on Card</label>
          <input
            type="text"
            id="cardName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="expiry" className="block text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              placeholder="MM/YY"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              id="cvv"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}