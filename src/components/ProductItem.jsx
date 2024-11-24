import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductItem( {category, title, description, price, rating, id, image}) {

  return (
<div className="w-[350px] h-[500px] relative  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
    <img  className='h-[300px] w-full rounded-xl' src={image}  alt='prod-image'/>
    </div>
    
    <h5 className="mb-2 text-2xl my-1 font-bold tracking-tight text-gray-900 dark:text-white"> {title.slice(0,20)}...</h5>

    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description. slice(0,80)}.... </p>
    
    <a href="#" className="inline-flex absolute bottom-5 w-20 items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:focus:ring-blue-800">
        ${price} 
    </a>
    
    <div className="flex flex-col absolute left-[115px] bottom-5 bg-white rounded-lg pb-1 px-2 ">
      <div className='flex gap-2'>
          <h4 className='text-[12px]'>Rating</h4>  
          <div className='text-gray-700 dark:text-gray-400 text-[12px]'>  {rating.rate} </div>
      </div>
    </div>
     
    <NavLink to={`/products/${category}/${id}`}>
    <button className='inline-flex absolute bottom-5 right-5 items-center px-4 py-2  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
      View Detaits
    </button>
    </NavLink>

</div>

  )
}

export default ProductItem