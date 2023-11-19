import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="bg-purple-600 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Inventory App</h1>
          <p className="text-sm">Created by Damola at Moringa School</p>
        </div>

        <nav className="flex items-center space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/customers" className="hover:underline">Customers</Link>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

