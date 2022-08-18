import * as React from 'react'
import { Link } from 'gatsby'

const NavBar = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <h1>VEHICLE ENERGY USAGE</h1>
        <div className='links'>
            <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
          
        
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default NavBar