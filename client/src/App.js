import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Signup from './components/Signup';
import Customers from './components/Customers';
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <>
      <AnimatedCursor innerSize={20} color="39, 217, 186" />
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
}

export default App;
