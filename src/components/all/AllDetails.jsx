import React from 'react'
import './AllDetails.css'
import Categories from '../category/Categories'
import { Link } from 'react-router-dom'


const Details = () => {

  return (
    <div>
          {Categories.map((user) => (
          <li key={user.id}>
            <Link to={user.id}><img src={user.image} alt="" />{user.title}{user.category}</Link>
          </li>
        ))}
      <h1> Details</h1>
    </div>
  )
}

export default Details
