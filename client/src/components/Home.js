import React from 'react';
import Login from './Login';
import Signup from './Signup';

function Home() {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-cover bg-center rounded-lg">
      <div className="relative bg-black  min-h-screen text-white">

       {/* Header section */}
        <header className="bg-black py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Inventory Tracker</span>
            </h1>
          </div>
        </header>

         {/* Main Content  */}
        <div className="container mx-auto mt-8 p-4">
          <div className="bg-opacity-90 bg-gray-800 p-8 rounded-md shadow-md">

            {/* Company Mission Section */}
            <div className="text-center mb-8">
              <h1 className='text-white text-5xl font-bold mb-4'>
                Transform Your Business with
                <br />
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Inventory Tracker</span>
              </h1>
              <p className='text-white text-lg'>
                Unlock the potential of your enterprise with our cutting-edge Inventory Tracker. Elevate efficiency, streamline processes, and safeguard your data with a suite designed for success.
              </p>
            </div>

            {/* Grid sections for forms */}
            <div className="flex justify-around">
              <div className="w-1/2">
                <Login />
              </div>
              <div className="w-1/2">
                <Signup />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
