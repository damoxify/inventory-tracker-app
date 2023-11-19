import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.timestamp);
  }

  function handleClick() {
    console.log("I am clicked");

    navigate('/products');
  }

  return (
    <div className='min-h-screen flex items-center justify-center '>
      <form onSubmit={handleSubmit} className='bg-black p-8 rounded-md shadow-md max-w-md w-full'>
        <h1 className="text-4xl mb-6 text-center text-purple-700 font-bold">Sign in</h1>
        <div className='mb-4'>
          <label className='block text-sm text-white mb-2'>Username</label>
          <input
            className='w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600'
            placeholder='Enter your username...'
            type='text'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm text-white mb-2'>Password</label>
          <input
            className='w-full p-2 border border-purple-400 rounded-md focus:outline-none focus:border-purple-600'
            placeholder='Enter your password...'
            type='password'
            required
          />
        </div>
        <div>
          <button
            className='w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500'
            type='submit'
            onClick={handleClick}
          >
            Sign in
          </button>
        </div>
        <div className='mt-4 text-center text-white'>
          Already a customer? <Link to='/' className='text-purple-700 font-bold'>Sign in here</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
