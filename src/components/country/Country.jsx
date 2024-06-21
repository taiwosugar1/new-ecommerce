import React from 'react'
import "./Country.css"
import { useState } from 'react'

const Country = () => {
const [country, setCountry] = useState([])
const toggleButton =()=>{
    setCountry(!country);
}
  
       


  return (
    <div>
    
      <button onClick={(() =>toggleButton)}>submit currency</button>
      {country && (
        <div>

          <select name="" id=""acion="select">
          <option value="EUR"  action={country}>Euro</option>
          <option value="YEN">Yen</option>
          <option value="NRA">Naira</option>
        </select>
        </div>
      )}
    </div>
  )
}

export default Country
