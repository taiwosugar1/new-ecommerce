import React from 'react'
import { Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <nav className='d-flex justify-content-center'>
          <div className="nav nav-pills">
            <Link to={"/"}><b> Home</b></Link>
            <Link to={"/about"}><b> About</b></Link>
            <Link to={"/category"}><b>Products</b></Link>
            <Link to={"/all"}><b> All</b></Link>
            <Link to={"/user"}><b> User</b></Link>
        </div>
        </nav>
      </div>

    </div>
  )
}

export default Footer