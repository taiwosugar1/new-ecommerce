import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

const Drop6 = () => {
  // Existing code...
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="dropdownparent">
      {/* Existing code... */}
      <button className="dropbtn" onClick={toggleDropdown}>Button</button>
      {isOpen && (
        
        <div className="all">
        <div className="all-shoes">
        <button className='product-button'>SHOES</button>

          <ul>
            <li><a href="category">Everyday Sneakers</a></li>
            <li><a href="">Active Shoes</a></li>
            <li><a href="">Water repellent Sneakers</a></li>
            <li><a href="">slip ons</a> </li>
            <li><a href="">Hiking</a></li>
            <li><a href="">High tops</a></li>
            <li><a href="">Sales</a></li>
            <li><a href="">shop All</a></li>
            
          </ul>
        </div>
        <div className="best-sellers">
        <button className='product-button'>BEST SELLERS</button>
          <ul>
          <li><a href="">Everyday Sneakers</a></li>
            <li><a href="">Active Shoes</a></li>
            <li><a href="">Water repellent Sneakers</a></li>
            <li><a href="">slip ons</a> </li>
            <li><a href="">Hiking</a></li>
            <li><a href="">High tops</a></li>
            <li><a href="">Sales</a></li>
            
          </ul>
        </div>
        <div className="apparel">
        <Link to={"/category"}><button className='product-button'>APPARELS AND MORE</button></Link>
           
          <ul>
          <li><a href="">Everyday Sneakers</a></li>
            <li><a href="">Active Shoes</a></li>
            <li><a href="">Water repellent Sneakers</a></li>
            <li><a href="">slip ons</a> </li>
            <li><a href="">Hiking</a></li>
            <li><a href="">High tops</a></li>
            <li><a href="">Sales</a></li>
           
          </ul>
        </div>
        <div className="featured">
        <button className='product-button'> FETURED</button>
          <div className="featured1">
            <button>THREE RUNNER GO</button>
          </div>
          <div className="featured2">
          <button>SHOE FOR SPRING</button>
          </div>
          
        </div>
        
      </div>
      )}
    </div>
  );
}

export default Drop6;