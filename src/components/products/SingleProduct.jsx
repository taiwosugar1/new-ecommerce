import React from 'react'
import { Link, useNavigate, useParams, useLocation, NavLink } from 'react-router-dom'

import './SingleProduct.css'
import { useDispatch } from 'react-redux'
import { addCart, delCart } from '../../redux/action'
import Categories from '../category/Categories'


const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  useLocation()
 

  const dispatch = useDispatch();
  const addProduct = (product) => {
      dispatch(addCart(product));
  }
  const removeProduct = (product) => {
      dispatch(delCart(product));
  }

  //get product
  const singleProduct = Categories.find(product =>product.id===parseInt(productId))

const { title, price, image, description} = singleProduct

  return (
    <main>
       <div className="pg-header">
        <div className="container">
            <div className="head" >
                <div className="col-lg-7" >
                    <h1>{title}</h1>
                </div>
                <div className="col-lg-5">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-end">
                            <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li >
                            <li className="breadcrumb-item"><Link to={"/category"}>Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page"> {title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
       </div>
       <div className="container content">
        <div className="row">
          <div className="col-lg-5">
           <img src={image} alt="" className='product-img' />
          </div>
          <div className="col-lg-7">
            <h2>{title}</h2>
            <p className="price"><strong>${price}</strong></p>
            <p>{description} {description} {description} {description} {description}</p>
            <br />
            <button className="btn btn-primary btn-sm" onClick={() =>navigate(-1)}>BACK</button>
            <button className="btn btn-primary btn-sm"  onClick={() =>navigate('/searchbar')}>SEARCH FOR PRODUCTS</button>
            <Link to={"/cart"} className="btn btn-primary btn-sm">Cart</Link>

            <br /> 
               <hr />
            <br />

            <button className="btn btn-outline-dark px-4 py-2 ms-2" onClick={()=> addProduct(Categories)}>Add to Cart</button>
                    <button className="btn btn-outline-dark px-4 py-2 ms-2" onClick={()=> removeProduct(Categories)}>remove from Cart</button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3">  view Cart</NavLink>

          </div>
        </div>
       </div>
    </main>
  )
}

export default SingleProduct