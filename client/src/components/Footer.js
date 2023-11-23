import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Inventory Tracker Company</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
