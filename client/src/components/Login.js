import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.timestamp)
    }

    function handleClick(e){
        console.log("I am clicked")
    }

  return (
    <div className='grid h-screen place-items-center' >
        <form onSubmit={handleSubmit}>
            <h1 className="text-4xl">Sign in</h1>
            <div className='mt-4'>
            <label>
                <span className='px-4'>username</span>
                <input className='border-2 border-sky-500' placeholder='Enter your username...' type='text' required/>
            </label>
            </div>
            <div className='mt-4'>
            <label>
                <span className='px-4'>password</span>
                <input className='border-2 border-sky-500' placeholder='Enter your password...' type='password' required/>
            </label>
            </div>
            <div className='mt-4'>
            <button className='border-2 border-sky-500 flex flex-col justify-center items-center w-full h-full' type='submit' onClick={handleClick}>
                <Link to={'/products'}> Sign in</Link>
            </button>
            </div>
        </form>
    </div>
  )
}

export default Login
