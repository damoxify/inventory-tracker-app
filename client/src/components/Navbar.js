import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NavBar() {
  return (
    <header>
        <div>
            <h1>This app was created by Damola at Moringa School</h1>
        </div>
        <nav>
            <Link to="/">Home</Link>
        </nav>
    </header>
  )
}

export default NavBar
