import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/customers')
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newCustomer = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      birthDate: birthDate,
    };

    // Simulating adding the new customer to the list
    setCustomers([...customers, newCustomer]);

    // Simulating a successful signup
    console.log("Signup successful:", newCustomer);

    // Clear form fields
    setFirstName("");
    setLastName("");
    setAddress("");
    setBirthDate("");

    // Redirect to "/customers" after successful signup
    navigate('/customers');
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-black p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl text-center mb-6 text-purple-700 font-bold">Sign up</h1>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">First Name</label>
          <input
            className="w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter your first name..."
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Last Name</label>
          <input
            className="w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter your last name..."
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Address</label>
          <input
            className="w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600"
            placeholder="Enter your address..."
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-white mb-2">Birth Date</label>
          <input
            className="w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>

        <button
          className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
          type="submit"
        >
          Sign up
        </button>
        <div className='mt-4 text-center text-white'>
          Already have an account? <Link to='/login' className='text-purple-700 font-bold'>Sign in here</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
