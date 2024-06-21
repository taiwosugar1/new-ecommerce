import React from 'react';
import './Summer.css'
import { Link } from 'react-router-dom';

const summer = () => {
  return (
    <div className='summers'>

      <div className="summer-head">
        <h1>Summer Hues Unlocked</h1>
        <p>Brand new colors inspired by Ethiopia's stunning Dallol Volcano.</p>
       <div className="summer-button">
       <Link to={'/men'}><button>Shop Men</button></Link>
       <Link to={'/women'}><button>Shop Women</button></Link>
       </div>

      </div>
        <div className="summer">
            <div className="boxs">
               <img src="https://images.pexels.com/photos/1122605/pexels-photo-1122605.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               <h1>Tree Runner Go</h1>
               <hr />
               <p>Reimagined Breezy, Everyday Sneaker</p>
            </div>
            <div className="boxs">
                <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h1>Tree Breezer</h1>
                <hr />
                <p>Lightweight Flat</p>
            </div>
            <div className="boxs">
                <img src="https://images.pexels.com/photos/1854171/pexels-photo-1854171.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <h1>Tree Breezer</h1>
                <hr />
                <p>Lightweight Flat</p>
            </div>
            {/* <div className="boxs">
                <img src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h1>Tree Runner</h1>
                <hr />
                <p>Breezy, Everyday Sneaker</p>
            </div> */}
        </div>
        <div className='summer-shoe'>
          <img src="https://images.pexels.com/photos/267326/pexels-photo-267326.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/1039083/pexels-photo-1039083.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='flower'/>
          <img src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default summer