import React, {useEffect,useState} from 'react'
import ProductItems from './ProductItem'
// display products Data
function Products() {

  const [data, setData] = useState(null);


  useEffect(() => {
    getData();
  }, [])
  
  const getData= async () =>{
    let apiCall= await fetch('https://fakestoreapi.com/products');  
    let prodData= await apiCall.json();
    // console.log(prodData);
    setData(prodData);
  }

  return (
    <>
        <div className='flex flex-wrap justify-between gap-4 p-4 '>
          {data?.map((curr)=>{
                return <ProductItems key={curr.id} {...curr} />
            })
            }
        </div>
      
    </>
  )
}

export default Products