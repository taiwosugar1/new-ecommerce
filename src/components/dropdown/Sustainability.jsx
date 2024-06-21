import React, { useState } from 'react';

import './Details.css'
import { GoChevronDown } from 'react-icons/go';

const Drop6 = () => {
  // Existing code...
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="details">
      
      <button className="detailsbtn" onClick={toggleDropdown}>SUSTAINABILITY <GoChevronDown /></button>
      {isOpen && (
        
       
        <div className="all-dtails">
       
       <div className='all-details-div'>
           <p>Our breathable, silky-smooth sneaker made with responsibly sourced eucalyptus tree fiber treads lightly in everything you do.</p>
        </div>

              <div className='all-details-div'>
                 <h3>Best for:</h3>
                   <p>Walking, warmer weather, everyday wear</p>
              </div>
              <div className='all-details-div'>
                <h3>Thermoregulating Material:</h3>
                   <p>Lightweight, breathable eucalyptus fiber provides next-level comfort</p>
              </div>
              <div className='all-details-div'>
                <h3>Versatile Design:</h3>
                <p>Wear-with-everything classic style, great for travel</p>
                </div>
                <div className='all-details-div'>
              <h3>Where It’s Made:</h3>
              <p>Vietnam. Learn more about<a href="" >Our Operations</a></p>
              </div>
          
        </div>
   
      
        
      
      )}
    </div>
  );
}

export default Drop6;