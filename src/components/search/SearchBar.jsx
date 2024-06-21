import React, { useState } from "react";
import "./SearchBar.css";
import data from "../category/Categories";

import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllProducts, setShowAllProducts] = useState(false);
  

  return (
    <>
    
      <div className="templateContainer">
        <div className="searchInput_Container">
        <button onClick={() => setShowAllProducts(true)}>Show All Products</button>
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowAllProducts(false); // Reset to hide all products on change
            }}
          />
        </div>
        <div className="template_Container">
          {showAllProducts
            ? data.map((val) => (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="details">{val.description}</p>
                  <div className="row justify-content-between">
                    <p className="price">${val.price}</p>
                    <Link to={`/products/${val.id}`}><p>DETAILS &#8594;</p></Link>
                  </div>
                </div>
              ))
            : data
                // eslint-disable-next-line array-callback-return
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else 
                  if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => (
                  <div className="template" key={val.id}>
                    <Link>
                      <img src={val.image} alt="" />
                    </Link>
                    <h3>{val.title}</h3>
                    <p className="price">${val.price}</p>
                    <Link to={`/products/${val.id}`}>DETAILS &#8594;</Link>
                  </div>
                ))}
        </div>
       
      </div>
    </>
  );
};

export default Search;