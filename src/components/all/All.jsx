import React from 'react';
import '../all/All.css'
import { Link } from 'react-router-dom';
// import Dropdown from '../all/Dropdown';
// <Dropdown/>

const Men = () => {
  return (
    <div>
     
  
      
        <div className="all">
          <div className="all-shoes">
          <Link to={"/category"}><button className='product-button'>SHOES</button></Link>

            <ul>
              <li><a href="category">Everyday Sneakers</a></li>
              <li><a href="">Active Shoes</a></li>
              <li><a href="">Water repellent Sneakers</a></li>
              <li><a href="">slip ons</a> </li>
              <li><a href="">Hiking</a></li>
              <li><a href="">High tops</a></li>
              <li><a href="">Sales</a></li>
              <li><a href="/category">shop All</a></li>
              
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
      
    </div>
  )
}

export default Men






// import React from 'react';
// import { Link } from 'react-router-dom';
// import './All.css';
// import Navbar from '../navbar/Navbar';
// import Nav from '../navbar/Nav';

// const Men = () => {
//   // Array of categories with their corresponding items
//   const categories = [
//     {
//       name: 'SHOES',
//       items: [
//         'Everyday Sneakers',
//         'Active Shoes',
//         'Water repellent Sneakers',
//         'Slip Ons',
//         'Hiking',
//         'High Tops',
//         'Sales',
//         'Shop All'
//       ]
//     },
//     {
//       name: 'BEST SELLERS',
//       items: [
//         'Everyday Sneakers',
//         'Active Shoes',
//         'Water repellent Sneakers',
//         'Slip Ons',
//         'Hiking',
//         'High Tops',
//         'Sales'
//       ]
//     },
//     {
//       name: 'APPARELS AND MORE',
//       items: [
//         'Everyday Sneakers',
//         'Active Shoes',
//         'Water repellent Sneakers',
//         'Slip Ons',
//         'Hiking',
//         'High Tops',
//         'Sales'
//       ]
//     },
//     {
//       name: 'FEATURED',
//       items: [
//         'THREE RUNNER GO',
//         'SHOE FOR SPRING'
//       ]
//     }
//   ];

//   return (
//     <div>
//       <Navbar />
//       <Nav />
//       <div className="all">
//         {categories.map((category, index) => (
//           <div key={index} className="category">
//             <button className='product-button'>{category.name}</button>
//             <ul>
//               {category.items.map((item, itemIndex) => (
//                 <li key={itemIndex}>
//                   <Link to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Men;