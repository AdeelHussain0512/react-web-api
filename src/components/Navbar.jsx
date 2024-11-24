import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const NavBarIcon =[
    { navLink: '/' , Name: 'Home'  },
    { navLink: '/products' , Name: 'Products'  },
    { navLink: '/data' , Name: 'Product Data'  },
  ]
  
  return (
    <div className='bg-blue-500 p-4'>
      <ul className='flex gap-4 py-2  justify-center '>
        {NavBarIcon.map((item,index) => (
                  <li className='text-white text-xl '> <NavLink to={item.navLink}> {item.Name}  </NavLink> </li>
        )
        )}
      </ul>

    </div>
  )
}

export default Navbar