import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/logo.png'

function NavBar() {
  return (
    <header className="bg-purple-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt='The logo of the inventory' className="h-20 w-17" />
            <div>
              <h1 className="text-xl font-bold">Inventory App</h1>
              <p className="text-sm">Created by Damola at Moringa School</p>
            </div>
          </Link>
        </div>

        <nav className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/customers" className="hover:underline">Customers</Link>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
