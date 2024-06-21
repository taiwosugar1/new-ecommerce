import React from 'react'
import './Nav.css';
import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { LuHelpCircle } from "react-icons/lu";
import { BsCartCheck } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import SearchBar from '../search/SearchBar';

const Nav = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div  style={{background:"white", width:"100%",position:"sticky", top:"0", zIndex:"999"}}>
     
     <div className="nav">
     
        <nav>
          <ul>
       <li><a href="/men">MEN</a></li>
            <li><a href="/women">WOMEN</a></li>
            <li><a href="/all">KIDS</a></li>
            <li><a href="/searchbar">MARKETS</a></li>
            <li><a href="/category">SALES</a></li>
          </ul>
          <div className="logo">
             <a href="/aboutme">multibrand</a>
          </div>
          <ul>
            <li><NavLink to="/products">NEW PRODUCTS</NavLink></li>
            <li><a href="/">RETURN</a></li>
            <li><a href="/category">STORES</a></li>
            
          </ul>
          <div className='icons'>
          <Link to={'/searchbar'} ><IoSearch className='icon'/></Link>
          <Link to={'/user'}><LuUser className='icon'/></Link>
          <Link to={"/contract"}><LuHelpCircle className='icon' /></Link>
          <NavLink to={'/cart'}><BsCartCheck  className='icon'/> {state.length}</NavLink>
          
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
