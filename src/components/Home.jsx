import React, { useState, useEffect } from 'react'
import ProductItems from './ProductItem'
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  {addProductItems} from '../store/cart'

function Home() {
const [data, setData] = useState(null);
const Productdispatch = useDispatch();

useEffect(() => {
  getData();
  addData();
}, [data])







const getData= async () =>{
  let apiCall= await fetch('https://fakestoreapi.com/products');  
  let prodData= await apiCall.json(); 
  setData(prodData);
}

const addproduct = (cartProd)=>{
  Productdispatch(addProductItems(cartProd));
}  

const addData =()=>{
  if (data?.length > 0) {
    data.forEach((product) => {
      addproduct(product); 
    });
  }
} 

  return (
<>  
{/* onClick={addData} */}
 <Link className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300' to='/data'
> Add to Cart </Link>

    <h3 className='text-3xl mx-6 pt-6 pb-2 font-bold'> New Products</h3>

  <NavLink className='text-2xl flex justify-end me-20 mt-2 font-semibold underline text-blue-700' to="/products">See All Product's </NavLink>

</>

  )
}

export default Home