import React from 'react';
import './Shop.css'
import { Link } from 'react-router-dom';


const Shop = () => {
  return (
    <div className='shops'>
        
        <div className="shop-head">
        <h1>From Cardio To Patio</h1>
        <p>All the bouncy active shoes you need to keep in stride with the season.</p>
       <div className="shop-button">
       <Link to={'/men'}><button>Shop Men</button></Link>
       <Link to={'/women'}><button>Shop Women</button></Link>
       </div>
      </div>
      <div className="shop">
            <div className="boxes">
               <img src="https://images.pexels.com/photos/1122605/pexels-photo-1122605.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <h1>Tree Runner Go</h1>
               <hr />
               <p>Reimagined Breezy, Everyday Sneaker</p>
            </div>
            <div className="boxes">
                <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h1>Tree Breezer</h1>
                <hr />
                <p>Lightweight Flat</p>
            </div>
            <div className="boxes">
                <img src="https://images.pexels.com/photos/1854171/pexels-photo-1854171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <h1>Tree Breezer</h1>
                <hr />
                <p>Lightweight Flat</p>
            </div>
            {/* <div className="boxes">
                <img src="https://images.pexels.com/photos/6748262/pexels-photo-6748262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1>Tree Runner</h1>
                <hr />
                <p>Breezy, Everyday Sneaker</p>
            </div> */}
        </div>
      
    </div>
  )
}

export default Shop