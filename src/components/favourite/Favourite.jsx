import React from 'react';
import './Favourite.css'

const Favourite = () => {
  return (
    <div className='favours'>

        <h1>Our Favorites</h1>
        <div className="favourite-lite">
            <h3 className='favour-h2'>FOR EVERYDAY</h3>
            <h3>FOR TRAVEL</h3>
            <h3>FOR EVERY ACTIVITY</h3>
        </div>

        <hr />

        <div className="favorite">
            <div className="boxs">
               <img src="https://images.pexels.com/photos/1122605/pexels-photo-1122605.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <h1>Tree Runner Go</h1>
               <hr />
               <p>Reimagined Breezy, Everyday Sneaker</p>
            </div>
            <div className="boxs">
                <img src="https://images.pexels.com/photos/1854171/pexels-photo-1854171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <h1>Tree Breezer</h1>
                <hr />
                <p>Lightweight Flat</p>
            </div>
            <div className="boxs">
                <img src="https://images.pexels.com/photos/6748262/pexels-photo-6748262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h1>Tree Runner</h1>
                <hr />
                <p>Breezy, Everyday Sneaker

</p>
            </div>
        </div>
    </div>
  )
}

export default Favourite