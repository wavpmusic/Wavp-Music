import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import CreateOrder from './pages/CreateOrder';
import Payment from './pages/Payment';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;