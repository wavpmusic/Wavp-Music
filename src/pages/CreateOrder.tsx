import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music2, Gift, Calendar, BellRing as Ring } from 'lucide-react';

export default function CreateOrder() {
  const navigate = useNavigate();
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [instructions, setInstructions] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const occasions = [
    { icon: Ring, title: 'Wedding', price: '₹15,000' },
    { icon: Gift, title: 'Anniversary', price: '₹12,000' },
    { icon: Music2, title: 'Proposal', price: '₹10,000' },
    { icon: Calendar, title: 'Birthday', price: '₹8,000' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Create Your Song</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Select Occasion</label>
          <div className="grid grid-cols-2 gap-4">
            {occasions.map((occasion) => (
              <button
                key={occasion.title}
                type="button"
                onClick={() => setSelectedOccasion(occasion.title)}
                className={`p-4 border rounded-md text-center ${
                  selectedOccasion === occasion.title
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-500'
                }`}
              >
                <occasion.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <div className="font-semibold">{occasion.title}</div>
                <div className="text-purple-600">{occasion.price}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 mb-2">
            Your Story and Instructions
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={6}
            placeholder="Tell us about your special memories, moments, and any specific words you'd like in the song..."
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="deliveryDate" className="block text-gray-700 mb-2">
            Expected Delivery Date
          </label>
          <input
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}