import React, { useEffect } from 'react'
import Login from './Login'

function Home() {
    useEffect(()=> {
        fetch('/')
        .then((res)=> res.json())
        .then((data)=> console.log(data))
    }, [])
  return (
    <div>
      <Login/>
    </div>
  )
}

export default Home
