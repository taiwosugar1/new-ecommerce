import React from 'react'
import Hero from '../hero/Hero'
import Favourite from '../favourite/Favourite'
import Shoes from '../shoes/Shoes'
import Summer from '../summer/Summer'
import Shop from '../../components/shop/Shop';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Favourite/>
        <Summer/>
        <Shoes/>
        <Shop/>
    </div>
  )
}

export default Home