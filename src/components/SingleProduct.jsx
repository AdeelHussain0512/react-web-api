  import React, { useEffect, useState } from 'react'
  import { useDispatch } from 'react-redux';
  import { Link, useParams } from 'react-router-dom'
  
  function SingleProduct() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false)  
    const [Counter, setCounter] = useState(0)

    const dispatch = useDispatch();

    const getData= async () =>{
      setLoading(true)
      let apiCall= await fetch('https://fakestoreapi.com/products');  
      let prodData= await apiCall.json();
      setLoading(false);
      setData(prodData);
    }

    useEffect(() => {
      getData();
    }, [])
    
  const {id}= useParams();

  const filterData= data?.filter((currElem)=>{
      return currElem?.id=== parseInt(id);
  })

  if(loading){
    return <h2>Loading</h2> 
    }

  if(!filterData || filterData.length === 0) {
      return <h2>Data Not Available</h2> 
    }


  function CartValue(action){
    if(action ==='Add'){
      setCounter(Counter+1)
    }
    if(action==='Del'){
      if(Counter>0){
        setCounter(Counter-1)
      }
      if(Counter===0){
        // setCounter(Counter=0)
        alert('Cart Is Empty')
      }
    }

  }

    return (
<>
      <div className='bg-rose-50 mx-2 my-2 pb-2 '>
        <h3 className='font-bold bg-slate-500 text-center text-3xl py-4 '>{filterData[0]?.title} </h3>
        <table className='bg-slate-200 flex h-[500px] my-4 mx-32'>
            <tr className='flex   bg-slate-300 m-4 py-6'>
              <td className='p-2 bg-slate-500 mx-2'><img className='h-[400px] w-full rounded-2xl' src={filterData[0]?.image} /></td>

              <td className='px-16 mx-2 grid bg-slate-500'>
                <tr className=''>
                  <td className='font-semibold text-lg px-4 py-6'> Description:</td>
                  <td className='text-wrap text-justify w-[500px] py-6 '>{filterData[0]?.description}</td>
                  </tr>

                <tr className='ms-14'>
                  <td className='font-semibold text-lg  px-4'>Price: </td>
                  <td className='text-2xl font-bold'>${filterData[0]?.price}</td>
                </tr>

                <tr className='flex  '>
                  <td className='font-semibold text-lg px-4 pt-2 '>Add to Cart:</td>
                  <td className=' font-bold text-xl text-white flex  space-x-4  '> 
                    <div> <button className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300' onClick={(x)=>CartValue('Add')}> Add </button>   </div>
                    <div> <button className='bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300' onClick={(x)=>CartValue('Del')}> Del </button>   </div>
                    <div className='text-xl font-bold text-white pt-2'> {Counter}   </div>
                  </td>
                </tr>

              </td>
            </tr>
        </table>
      </div>
</>

    )
  }

  export default SingleProduct