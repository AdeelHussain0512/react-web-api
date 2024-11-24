import React from 'react'
import ProductItems from './ProductItem'
import { useSelector } from 'react-redux'

function Productdata() {

  const getProduct=useSelector((state)=> state.products.productItems)
  
  return (
    <div>
        <div className='flex flex-wrap justify-between gap-4 p-4'>
    {getProduct?.map((currElem)=>{
            return <ProductItems key={currElem.id} {...currElem} />
    })
  }

    </div>  
      
    </div>
  )
}

export default Productdata