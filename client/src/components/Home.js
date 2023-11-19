import React from 'react';
import Login from './Login';
import Signup from './Signup';
import inventorybg from '../components/inventorybg.png';

function Home() {
  return (
    <section className="justify-center bg-no-repeat bg-cover bg-center rounded-lg">
      <div className="relative bg-black">
        <div className="min-h-screen">
          {/* Header */}
          <header className="bg-purple-600 text-black py-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold">Inventory Tracker</h1>
            </div>
          </header>

          {/* Main Content */}
          <div className="container mx-auto mt-8 p-4">
            <div
              className="justify-center bg-repeat bg-center p-8 rounded-md shadow-md"
              style={{
                backgroundImage: `url(${inventorybg})`,
                backgroundColor: 'rgba(255, 255, 255, 1)'
              }}
            >
              {/* Welcome Section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-purple-700 mb-2">Welcome to Inventory Tracker</h2>
                <p className="text-black ">Keep track of your inventory with ease.</p>
              </div>

              {/* Quick Actions */}
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
      </div>
    </section>
  );
}

export default Home;
