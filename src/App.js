
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Nav from './components/navbar/Nav';
import User from './components/user/User';
import All from './components/all/All';
import {  BrowserRouter, Outlet, Route, Routes  } from "react-router-dom";
import './App.css';
import Men from './components/men/Men';
import SearchBar from './components/search/SearchBar';
import Women from './components/women/Women';
import Category from './components/category/Category';
import NewArrival from './components/all/NewArrival';
import Footer from './components/navbar/Footer';

import About from './components/about/About';
import Cart from './components/cart/Cart';
import AboutMe from './components/about/AboutMe';
import AllDetails from './components/all/AllDetails';

import SingleProduct from './components/products/SingleProduct';
import Products from './components/products/Products';
import Product from './components/products/Product';
import Contract from './components/Contract';


function App() {
    return(
        <div className='app'>

     <BrowserRouter>
       <Navbar/>
       <Nav/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/active-shoes" element={<Contact/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/products/:productId" element={<SingleProduct/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route path="/searchbar" element={<SearchBar/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/all" element={<All/>}/>
          <Route path="/alldetails" element={<AllDetails/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contract" element={<Contract/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/newArrival" element={<NewArrival/>}/>
         </Routes>
         <Footer />
     </BrowserRouter>
        </div>
              
      )
    };


export default App;
